// ============================================
// AITuber Radio — Viewer Main Entry
// ============================================
//
// モジュール構成（段階的にモジュールファイルへ移行中）:
//   modules/recording.js  — 合成Canvas録画
//   modules/content.js    — ニュース/天気/今日は何の日取得
//   modules/subtitle.js   — 字幕表示
//   modules/parser.js     — 台本パーサー (parseScript/parseSetlist)
//
// TODO: 各セクションのコードを上記モジュールの import に段階的に置換
// ============================================

import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm'

const status = document.getElementById('status')
const canvas = document.getElementById('canvas')
const subtitleBox = document.getElementById('subtitle-box')
const subtitleTitle = document.getElementById('subtitle-title')
const subtitleText = document.getElementById('subtitle-text')

// ============================================
// Scene Setup
// ============================================
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.2
renderer.setClearColor(0x000000, 0)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 1.3, 2.5)

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffd4e5, 1.2)
dirLight.position.set(1, 2, 1)
scene.add(dirLight)

const backLight = new THREE.DirectionalLight(0x4466ff, 0.4)
backLight.position.set(-1, 1, -1)
scene.add(backLight)

// ============================================
// OrbitControls（モデル操作）
// ============================================
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 1.2, 0)
controls.enableDamping = true
controls.dampingFactor = 0.1
controls.screenSpacePanning = true  // 上下移動を画面空間で行う
controls.minDistance = 0.3
controls.maxDistance = 10
controls.update()

// ============================================
// Camera Position Save / Restore
// ============================================
async function saveCameraPosition() {
  const data = {
    cameraPosition: camera.position.toArray(),
    controlsTarget: controls.target.toArray(),
    cameraFov: camera.fov
  }
  await chrome.storage.local.set({ cameraSettings: data })
  status.textContent = '📌 カメラ位置を保存しました'
  console.log('Camera saved:', data)
}

async function resetCameraPosition() {
  await chrome.storage.local.remove('cameraSettings')
  // デフォルト位置に戻す
  const head = currentVRM?.humanoid?.getNormalizedBoneNode('head')
  if (head) {
    const headPos = new THREE.Vector3()
    head.getWorldPosition(headPos)
    controls.target.set(0, headPos.y - 0.05, 0)
    camera.position.set(0, headPos.y, 2.0)
  } else {
    controls.target.set(0, 1.2, 0)
    camera.position.set(0, 1.3, 2.5)
  }
  controls.update()
  status.textContent = '🔄 カメラ位置をリセットしました'
}

async function loadCameraPosition() {
  const result = await chrome.storage.local.get('cameraSettings')
  if (result.cameraSettings) {
    const { cameraPosition, controlsTarget, cameraFov } = result.cameraSettings
    camera.position.fromArray(cameraPosition)
    controls.target.fromArray(controlsTarget)
    if (cameraFov) camera.fov = cameraFov
    camera.updateProjectionMatrix()
    controls.update()
    console.log('Camera restored:', result.cameraSettings)
    return true
  }
  return false
}

// ============================================
// VRM Loading & Multi-Character Management
// ============================================
// キャラクタースロット（最大2体）
const characters = [
  { name: '', vrm: null, mixer: null, speakerId: 38, position: 'center' },
  { name: '', vrm: null, mixer: null, speakerId: 3, position: 'right' }
]
let activeCharIndex = 0  // 現在話しているキャラのインデックス

// 後方互換: currentVRM は characters[0].vrm を参照
let _legacyVRM = null
Object.defineProperty(window, '_currentVRMOverride', { value: false, writable: true })
let currentVRM = null  // 互換用。loadVRM() と characters 両方から更新される
let mixer = null
const timer = new THREE.Timer()

const audioCtx = new AudioContext()
const analyser = audioCtx.createAnalyser()
const timeDomainData = new Float32Array(2048)

// ============================================
// 録画機能（MediaRecorder）
// ============================================
let mediaRecorder = null
let recordedChunks = []
let isRecording = false
let recordingStartTime = 0

// recording fade control (global)
let recordFadeAlpha = 0  // デフォルトはフェードなし
let recordFadeStart = 0
let recordSplashImg = null
const RECORD_FADE_DURATION = 1500

// 音声出力を録画用にキャプチャするための MediaStreamDestination
const recordDest = audioCtx.createMediaStreamDestination()

// マスターゲイン: スピーカーと録画の両方に音声を分岐
const masterGain = audioCtx.createGain()
masterGain.connect(audioCtx.destination)
masterGain.connect(recordDest)

// 録画用: 無音トーン（A/Vズレ防止 — オーディオストリームを常時維持）
const silentOsc = audioCtx.createOscillator()
const silentGain = audioCtx.createGain()
silentOsc.frequency.value = 0
silentGain.gain.value = 0.0001 // ほぼ無音
silentOsc.connect(silentGain)
silentGain.connect(recordDest)
silentOsc.start()

let capturedStream = null  // stopRecording用に保持

let compositeCanvas = null
let compositeCtx = null
let compositeAnimFrame = null

function startCompositeRender() {
  const srcCanvas = document.getElementById('canvas')
  if (!compositeCanvas) {
    compositeCanvas = document.createElement('canvas')
    compositeCtx = compositeCanvas.getContext('2d')
  }
  compositeCanvas.width = srcCanvas.width || 1920
  compositeCanvas.height = srcCanvas.height || 1080

  const bgLayer = document.getElementById('bg-layer')
  const jingleOverlay = document.getElementById('jingle-overlay')
  const jingleImage = document.getElementById('jingle-image')
  const floatOverlay = document.getElementById('float-overlay')
  const floatImage = document.getElementById('float-image')
  const subtitleBox = document.getElementById('subtitle-box')
  const subtitleTitle = document.getElementById('subtitle-title')
  const subtitleText = document.getElementById('subtitle-text')
  const pngtuberLayer = document.getElementById('pngtuber-layer')

  // 背景画像をプリロード
  let bgImage = null
  let lastBgUrl = ''

  function updateBgImage() {
    const bgUrl = bgLayer.style.backgroundImage?.match(/url\(["']?(.+?)["']?\)/)?.[1]
      || getComputedStyle(bgLayer).backgroundImage?.match(/url\(["']?(.+?)["']?\)/)?.[1]
    if (bgUrl && bgUrl !== 'none' && bgUrl !== lastBgUrl) {
      lastBgUrl = bgUrl
      bgImage = new Image()
      bgImage.crossOrigin = 'anonymous'
      bgImage.src = bgUrl
    }
  }
  updateBgImage()

  function renderFrame() {
    if (!isRecording) {
      compositeAnimFrame = null
      return
    }
    const W = compositeCanvas.width
    const H = compositeCanvas.height
    const ctx = compositeCtx

    // 背景画像の更新チェック
    updateBgImage()

    // 1. 背景
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, W, H)
    if (bgImage && bgImage.complete && bgImage.naturalWidth) {
      // cover 描画
      const imgRatio = bgImage.naturalWidth / bgImage.naturalHeight
      const canvasRatio = W / H
      let drawW, drawH, drawX, drawY
      if (imgRatio > canvasRatio) {
        drawH = H; drawW = H * imgRatio
        drawX = (W - drawW) / 2; drawY = 0
      } else {
        drawW = W; drawH = W / imgRatio
        drawX = 0; drawY = (H - drawH) / 2
      }
      ctx.drawImage(bgImage, drawX, drawY, drawW, drawH)
    }
    // グラデーションオーバーレイ
    const grad = ctx.createLinearGradient(0, 0, 0, H)
    grad.addColorStop(0, 'rgba(0,0,0,0.15)')
    grad.addColorStop(0.4, 'rgba(0,0,0,0.05)')
    grad.addColorStop(0.8, 'rgba(0,0,0,0.3)')
    grad.addColorStop(1, 'rgba(0,0,0,0.7)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, W, H)

    // 2. PNGTuber レイヤー
    if (pngtuberLayer && pngtuberLayer.style.display !== 'none') {
      const imgs = [
        document.getElementById('pngtuber-talk'),
        document.getElementById('pngtuber-blink'),
        document.getElementById('pngtuber-idle')
      ]
      for (const img of imgs) {
        if (img && img.style.display !== 'none' && img.complete && img.naturalWidth) {
          const imgRatio = img.naturalWidth / img.naturalHeight
          const maxH = H * 0.9
          const maxW = W * 0.9
          let drawH = maxH
          let drawW = drawH * imgRatio
          if (drawW > maxW) { drawW = maxW; drawH = drawW / imgRatio }
          const drawX = (W - drawW) / 2
          const drawY = H - drawH
          ctx.drawImage(img, drawX, drawY, drawW, drawH)
          break  // 最初に表示されている画像のみ
        }
      }
    }

    // 3. VRM Canvas (WebGL)
    if (!pngtuberLayer || pngtuberLayer.style.display === 'none') {
      try {
        ctx.drawImage(srcCanvas, 0, 0, W, H)
      } catch (e) { /* WebGL context lost */ }
    }
    // 4. フロート画像（図表・スライド — 字幕の下、キャラの上）
    if (floatOverlay && floatOverlay.classList.contains('visible') && floatImage && floatImage.complete && floatImage.naturalWidth) {
      try {
        const opacity = parseFloat(getComputedStyle(floatOverlay).opacity) || 1
        ctx.save()
        ctx.globalAlpha = opacity
        const imgRatio = floatImage.naturalWidth / floatImage.naturalHeight
        const maxW = W * 0.75
        const maxH = H * 0.7
        let drawW = maxW
        let drawH = drawW / imgRatio
        if (drawH > maxH) { drawH = maxH; drawW = drawH * imgRatio }
        const drawX = (W - drawW) / 2
        const drawY = (H - drawH) / 2
        const pad = 16
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
        ctx.shadowColor = 'rgba(0, 0, 0, 0.6)'
        ctx.shadowBlur = 32
        const cr = 12
        ctx.beginPath()
        ctx.moveTo(drawX - pad + cr, drawY - pad)
        ctx.lineTo(drawX + drawW + pad - cr, drawY - pad)
        ctx.quadraticCurveTo(drawX + drawW + pad, drawY - pad, drawX + drawW + pad, drawY - pad + cr)
        ctx.lineTo(drawX + drawW + pad, drawY + drawH + pad - cr)
        ctx.quadraticCurveTo(drawX + drawW + pad, drawY + drawH + pad, drawX + drawW + pad - cr, drawY + drawH + pad)
        ctx.lineTo(drawX - pad + cr, drawY + drawH + pad)
        ctx.quadraticCurveTo(drawX - pad, drawY + drawH + pad, drawX - pad, drawY + drawH + pad - cr)
        ctx.lineTo(drawX - pad, drawY - pad + cr)
        ctx.quadraticCurveTo(drawX - pad, drawY - pad, drawX - pad + cr, drawY - pad)
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.drawImage(floatImage, drawX, drawY, drawW, drawH)
        ctx.restore()
      } catch (e) {
        // CORS等で描画失敗しても他レイヤーに影響しない
      }
    }

    // 5. ジングルオーバーレイ
    if (jingleOverlay && jingleOverlay.classList.contains('visible')) {
      const opacity = parseFloat(getComputedStyle(jingleOverlay).opacity) || 1
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, W, H)
      if (jingleImage && jingleImage.complete && jingleImage.naturalWidth && jingleImage.src) {
        const imgRatio = jingleImage.naturalWidth / jingleImage.naturalHeight
        const canvasRatio = W / H
        let drawW, drawH
        if (imgRatio > canvasRatio) {
          drawW = W; drawH = W / imgRatio
        } else {
          drawH = H; drawW = H * imgRatio
        }
        ctx.drawImage(jingleImage, (W - drawW) / 2, (H - drawH) / 2, drawW, drawH)
      }
      ctx.restore()
    }

    // 5. 字幕
    if (subtitleBox && subtitleBox.classList.contains('visible')) {
      const isVertical = document.body.classList.contains('vertical-mode')
      const boxW = W * (isVertical ? 0.9 : 0.85)
      const boxH = isVertical ? H * 0.2 : H * 0.12
      const boxX = (W - boxW) / 2
      const boxY = isVertical ? H * 0.45 : H - boxH - 30

      // 字幕背景
      ctx.save()
      ctx.globalAlpha = 0.88
      ctx.fillStyle = '#0a0a1a'
      ctx.beginPath()
      const r = 12
      ctx.moveTo(boxX + r, boxY)
      ctx.lineTo(boxX + boxW - r, boxY)
      ctx.quadraticCurveTo(boxX + boxW, boxY, boxX + boxW, boxY + r)
      ctx.lineTo(boxX + boxW, boxY + boxH - r)
      ctx.quadraticCurveTo(boxX + boxW, boxY + boxH, boxX + boxW - r, boxY + boxH)
      ctx.lineTo(boxX + r, boxY + boxH)
      ctx.quadraticCurveTo(boxX, boxY + boxH, boxX, boxY + boxH - r)
      ctx.lineTo(boxX, boxY + r)
      ctx.quadraticCurveTo(boxX, boxY, boxX + r, boxY)
      ctx.fill()
      // ボーダー
      ctx.globalAlpha = 0.3
      ctx.strokeStyle = '#e94560'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()

      // 字幕タイトル
      const titleText = subtitleTitle?.textContent || ''
      const mainText = subtitleText?.textContent || ''
      const fontSize = isVertical ? Math.round(W / 30) : Math.round(W / 68)
      const titleFontSize = Math.round(fontSize * 0.78)
      let textY = boxY + 30

      if (titleText) {
        ctx.font = `bold ${titleFontSize}px "Noto Sans JP", sans-serif`
        ctx.fillStyle = '#e94560'
        ctx.fillText(titleText, boxX + 32, textY + titleFontSize)
        textY += titleFontSize + 8
      }

      // 本文（折り返し）
      ctx.font = `${fontSize}px "Noto Sans JP", sans-serif`
      ctx.fillStyle = '#e8e8e8'
      const maxTextW = boxW - 64
      const words = mainText.split('')
      let line = ''
      for (const char of words) {
        const testLine = line + char
        if (ctx.measureText(testLine).width > maxTextW) {
          ctx.fillText(line, boxX + 32, textY + fontSize)
          textY += fontSize * 1.5
          line = char
        } else {
          line = testLine
        }
      }
      if (line) ctx.fillText(line, boxX + 32, textY + fontSize)
    }

    compositeAnimFrame = requestAnimationFrame(renderFrame)
  }

  renderFrame()
}

async function startRecording(silent = false) {
  if (isRecording) return

  try {
    // isRecording を先に設定（合成レンダリングループで参照するため）
    isRecording = true

    // 合成Canvas録画開始
    startCompositeRender()

    const compStream = compositeCanvas.captureStream(30)

    // 音声トラック（TTS+BGM+ジングル）をマージ
    const audioTracks = recordDest.stream.getAudioTracks()
    const combinedStream = new MediaStream([
      ...compStream.getVideoTracks(),
      ...audioTracks
    ])

    capturedStream = compStream

    recordedChunks = []
    mediaRecorder = new MediaRecorder(combinedStream, {
      mimeType: 'video/webm;codecs=vp9,opus',
      videoBitsPerSecond: 4000000
    })

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunks.push(e.data)
    }

    mediaRecorder.onstop = () => {
      if (compositeAnimFrame) {
        cancelAnimationFrame(compositeAnimFrame)
        compositeAnimFrame = null
      }
      if (capturedStream) {
        capturedStream.getTracks().forEach(t => t.stop())
        capturedStream = null
      }
      const blob = new Blob(recordedChunks, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      const now = new Date()
      const ts = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,'0')}${now.getDate().toString().padStart(2,'0')}_${now.getHours().toString().padStart(2,'0')}${now.getMinutes().toString().padStart(2,'0')}`
      a.href = url
      a.download = `radio_${ts}.webm`
      a.click()
      URL.revokeObjectURL(url)
      console.log('Recording saved:', a.download, `${(blob.size / 1024 / 1024).toFixed(1)} MB`)
    }

    mediaRecorder.start(1000)
    recordingStartTime = Date.now()
    updateRecordButton()
    console.log(`📹 合成Canvas録画開始（権限不要・${silent ? 'auto' : 'manual'}）`)
  } catch (e) {
    isRecording = false
    console.error('Recording failed:', e)
  }
}

function stopRecording() {
  if (!isRecording || !mediaRecorder) return
  mediaRecorder.stop()
  isRecording = false
  updateRecordButton()
  console.log('Recording stopped')
}

function updateRecordButton() {
  const btn = document.getElementById('recordBtn')
  const statusEl = document.getElementById('status')
  const hint = document.getElementById('controls-hint')
  if (!btn) return
  if (isRecording) {
    btn.textContent = '⏹ 録画停止'
    btn.style.background = '#c62828'

    // 2秒後にボタンをフェードアウト
    setTimeout(() => {
      if (isRecording) btn.style.opacity = '0'
    }, 2000)
    // ホバーで再表示
    btn.onmouseenter = () => { btn.style.opacity = '1' }
    btn.onmouseleave = () => { if (isRecording) btn.style.opacity = '0' }

    // ステータスバー・ヒントを非表示
    if (statusEl) statusEl.style.display = 'none'
    if (hint) hint.style.display = 'none'

    // カーソル非表示
    document.body.style.cursor = 'none'

    // 録画時間の更新（ボタンホバー時にのみ見える）
    const updateTimer = () => {
      if (!isRecording) return
      const elapsed = Math.floor((Date.now() - recordingStartTime) / 1000)
      const m = Math.floor(elapsed / 60).toString().padStart(2, '0')
      const s = (elapsed % 60).toString().padStart(2, '0')
      btn.textContent = `⏹ ${m}:${s} 録画中`
      requestAnimationFrame(updateTimer)
    }
    updateTimer()
  } else {
    btn.textContent = '📹 録画'
    btn.style.background = ''
    btn.style.opacity = '1'
    btn.onmouseenter = null
    btn.onmouseleave = null

    // UI復帰
    if (statusEl) statusEl.style.display = ''
    if (hint) hint.style.display = ''
    document.body.style.cursor = ''
  }
}

// ============================================
// Media Library（IndexedDB でメディアファイル管理）
// ============================================
const MEDIA_DB_NAME = 'kaidan-radio-media'
const MEDIA_DB_VERSION = 1
const MEDIA_STORE = 'files'

function openMediaDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(MEDIA_DB_NAME, MEDIA_DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(MEDIA_STORE)) {
        db.createObjectStore(MEDIA_STORE, { keyPath: 'name' })
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function saveMedia(name, blob, type) {
  const db = await openMediaDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE, 'readwrite')
    tx.objectStore(MEDIA_STORE).put({ name, blob, type, updatedAt: Date.now() })
    tx.oncomplete = () => { console.log('Media saved:', name); resolve() }
    tx.onerror = () => reject(tx.error)
  })
}

async function getMedia(name) {
  const db = await openMediaDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE, 'readonly')
    const req = tx.objectStore(MEDIA_STORE).get(name)
    req.onsuccess = () => resolve(req.result || null)
    req.onerror = () => reject(req.error)
  })
}

async function listMedia() {
  const db = await openMediaDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE, 'readonly')
    const req = tx.objectStore(MEDIA_STORE).getAll()
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function deleteMedia(name) {
  const db = await openMediaDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE, 'readwrite')
    tx.objectStore(MEDIA_STORE).delete(name)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

/**
 * ローカルフォルダから読み込んだファイルのメモリMap
 * key: 相対パス (例: 'readings/雪女.md', 'media/bgm.mp3')
 * value: blob URL
 */
const localFiles = new Map()

/**
 * ファイル名からURLを解決
 * 優先順位: メモリMap → Extension内蔵 → IndexedDB
 */
async function resolveMediaURL(filename) {
  if (!filename) return null

  // 0. 外部 URL（http / https） → そのまま返す
  if (filename.startsWith('http://') || filename.startsWith('https://')) {
    return filename
  }

  // 1. メモリMap（フォルダ読み込み済みファイル）— 最優先
  if (localFiles.has(filename)) {
    return localFiles.get(filename)
  }

  // 2. Extension 内から探す（viewer/ 配下）— 内蔵ファイル
  const extUrl = chrome.runtime.getURL(`viewer/${filename}`)
  try {
    const res = await fetch(extUrl, { method: 'HEAD' })
    if (res.ok) return extUrl
  } catch {}

  // 3. ローカルサーバー（CLI --local モード）からの読み込み
  const params = new URLSearchParams(location.search)
  const setlistUrl = params.get('setlist')
  if (setlistUrl) {
    try {
      const baseUrl = setlistUrl.substring(0, setlistUrl.lastIndexOf('/') + 1)
      // セットリストと同じディレクトリから
      const sameDir = baseUrl + filename
      const res1 = await fetch(sameDir, { method: 'HEAD' })
      if (res1.ok) return sameDir
    } catch {}
    try {
      // サーバールートから
      const origin = new URL(setlistUrl).origin
      const rootUrl = origin + '/' + filename
      const res2 = await fetch(rootUrl, { method: 'HEAD' })
      if (res2.ok) return rootUrl
    } catch {}
  }

  console.warn(`📁 [Not found] ${filename}`)
  return null
}

async function loadVRM(url) {
  status.textContent = 'VRM 読み込み中...'

  if (currentVRM) {
    VRMUtils.deepDispose(currentVRM.scene)
    scene.remove(currentVRM.scene)
  }

  const loader = new GLTFLoader()
  loader.register((parser) => new VRMLoaderPlugin(parser))

  try {
    const gltf = await loader.loadAsync(url)
    const vrm = gltf.userData.vrm
    VRMUtils.rotateVRM0(vrm)

    scene.add(vrm.scene)
    currentVRM = vrm
    mixer = new THREE.AnimationMixer(vrm.scene)

    applyIdlePose(vrm)

    // カメラ & OrbitControls ターゲットを顔付近に合わせる
    const head = vrm.humanoid?.getNormalizedBoneNode('head')
    if (head) {
      const headPos = new THREE.Vector3()
      head.getWorldPosition(headPos)
      controls.target.set(0, headPos.y - 0.05, 0)
      camera.position.set(0, headPos.y, 2.0)
      controls.update()
    }

    status.textContent = `✅ VRM 読み込み完了`
    console.log('VRM loaded:', vrm)
  } catch (e) {
    status.textContent = `❌ VRM 読み込み失敗: ${e.message}`
    console.error(e)
  }
}

// キャラスロットにVRMを読み込む（複数キャラ対応）
async function loadCharacterVRM(url, slotIndex = 0) {
  if (slotIndex < 0 || slotIndex >= characters.length) return

  const slot = characters[slotIndex]

  // レガシー loadVRM() で読み込まれたVRMを片付ける（characters[]に含まれない単体VRM）
  if (currentVRM && !characters.some(c => c.vrm === currentVRM)) {
    VRMUtils.deepDispose(currentVRM.scene)
    scene.remove(currentVRM.scene)
    currentVRM = null
    mixer = null
  }

  // 既存スロットのVRMを破棄
  if (slot.vrm) {
    VRMUtils.deepDispose(slot.vrm.scene)
    scene.remove(slot.vrm.scene)
    slot.vrm = null
    slot.mixer = null
  }

  const loader = new GLTFLoader()
  loader.register((parser) => new VRMLoaderPlugin(parser))

  try {
    const gltf = await loader.loadAsync(url)
    const vrm = gltf.userData.vrm
    VRMUtils.rotateVRM0(vrm)
    scene.add(vrm.scene)
    slot.vrm = vrm
    slot.mixer = new THREE.AnimationMixer(vrm.scene)
    applyIdlePose(vrm, slotIndex)

    // スロット0 は後方互換で currentVRM を更新
    if (slotIndex === 0) {
      currentVRM = vrm
      mixer = slot.mixer
    }

    // 2体いる場合は位置を調整
    repositionCharacters()

    console.log(`🎭 Character ${slotIndex} loaded:`, slot.name || `slot${slotIndex}`)
    return vrm
  } catch (e) {
    console.error(`❌ Character ${slotIndex} load failed:`, e)
    return null
  }
}

// キャラクターの位置を再配置
let charSpacing = 0.5   // キャラ間の距離
let charInwardAngle = 20  // 向き合い角度（度数）

function repositionCharacters(skipCamera = false) {
  const loaded = characters.filter(c => c.vrm)
  const count = loaded.length

  if (count === 1) {
    // 1体: 中央配置
    loaded[0].vrm.scene.position.set(0, 0, 0)
    loaded[0].vrm.scene.rotation.set(0, 0, 0)

    if (!skipCamera) {
      const head = loaded[0].vrm.humanoid?.getNormalizedBoneNode('head')
      if (head) {
        const headPos = new THREE.Vector3()
        head.getWorldPosition(headPos)
        controls.target.set(0, headPos.y - 0.05, 0)
        camera.position.set(0, headPos.y, 2.0)
        controls.update()
      }
    }
  } else if (count === 2) {
    // 2体: 左右に配置、少し内向き
    const inwardRad = charInwardAngle * Math.PI / 180

    if (characters[0].vrm) {
      characters[0].vrm.scene.position.set(-charSpacing, 0, 0)
      characters[0].vrm.scene.rotation.set(0, inwardRad, 0)
    }
    if (characters[1].vrm) {
      characters[1].vrm.scene.position.set(charSpacing, 0, 0)
      characters[1].vrm.scene.rotation.set(0, -inwardRad, 0)
    }

    if (!skipCamera) {
      const head0 = characters[0].vrm?.humanoid?.getNormalizedBoneNode('head')
      if (head0) {
        const headPos = new THREE.Vector3()
        head0.getWorldPosition(headPos)
        controls.target.set(0, headPos.y - 0.05, 0)
        camera.position.set(0, headPos.y, 2.8)
        controls.update()
      }
    }
  }
}

// アクティブキャラを切り替え（lip sync対象）
function setActiveCharacter(index) {
  if (index >= 0 && index < characters.length && characters[index].vrm) {
    // 前のキャラの口を閉じる
    if (currentVRM && currentVRM !== characters[index].vrm) {
      currentVRM.expressionManager?.setValue('aa', 0)
    }
    activeCharIndex = index
    currentVRM = characters[index].vrm
    mixer = characters[index].mixer
    console.log(`🎭 Active: ${characters[index].name || index} (speaker:${characters[index].speakerId})`)
  }
}

// キャラ名からスロットを検索（部分一致対応）
function findCharacterByName(name) {
  if (!name) return -1
  // 完全一致
  const exact = characters.findIndex(c => c.name === name)
  if (exact >= 0) return exact
  // 部分一致（名前が含まれている、または含んでいる）
  return characters.findIndex(c => c.name && (c.name.includes(name) || name.includes(c.name)))
}

// ============================================
// Pose
// ============================================
function applyIdlePose(vrm, variant = 0) {
  const humanoid = vrm.humanoid
  if (!humanoid) return

  const leftUpperArm = humanoid.getNormalizedBoneNode('leftUpperArm')
  const rightUpperArm = humanoid.getNormalizedBoneNode('rightUpperArm')
  const leftLowerArm = humanoid.getNormalizedBoneNode('leftLowerArm')
  const rightLowerArm = humanoid.getNormalizedBoneNode('rightLowerArm')

  if (variant === 0) {
    // デフォルト: 両手を軽く下ろす
    if (leftUpperArm) leftUpperArm.rotation.z = -Math.PI * 0.43
    if (rightUpperArm) rightUpperArm.rotation.z = Math.PI * 0.43
    if (leftLowerArm) leftLowerArm.rotation.z = -Math.PI * 0.05
    if (rightLowerArm) rightLowerArm.rotation.z = Math.PI * 0.05
  } else {
    // バリエーション: 少し腕を開く + 軽い首かしげ + 手を軽く握る
    if (leftUpperArm) leftUpperArm.rotation.z = -Math.PI * 0.38
    if (rightUpperArm) rightUpperArm.rotation.z = Math.PI * 0.38
    if (leftLowerArm) leftLowerArm.rotation.z = -Math.PI * 0.03
    if (rightLowerArm) rightLowerArm.rotation.z = Math.PI * 0.03
    const head = humanoid.getNormalizedBoneNode('head')
    if (head) head.rotation.z = 0.04

    // 指を軽く握る
    const fingerBones = [
      'leftThumbProximal', 'leftThumbIntermediate', 'leftThumbDistal',
      'leftIndexProximal', 'leftIndexIntermediate', 'leftIndexDistal',
      'leftMiddleProximal', 'leftMiddleIntermediate', 'leftMiddleDistal',
      'leftRingProximal', 'leftRingIntermediate', 'leftRingDistal',
      'leftLittleProximal', 'leftLittleIntermediate', 'leftLittleDistal',
      'rightThumbProximal', 'rightThumbIntermediate', 'rightThumbDistal',
      'rightIndexProximal', 'rightIndexIntermediate', 'rightIndexDistal',
      'rightMiddleProximal', 'rightMiddleIntermediate', 'rightMiddleDistal',
      'rightRingProximal', 'rightRingIntermediate', 'rightRingDistal',
      'rightLittleProximal', 'rightLittleIntermediate', 'rightLittleDistal',
    ]
    for (const boneName of fingerBones) {
      const bone = humanoid.getNormalizedBoneNode(boneName)
      if (bone) {
        const curl = boneName.includes('Thumb') ? 0.2 : 0.4  // 親指は軽め
        bone.rotation.z = boneName.startsWith('left') ? -curl : curl
      }
    }
  }

  vrm.scene.updateMatrixWorld(true)
}

// ============================================
// PNGTuber
// ============================================
let pngtuberMode = false
let pngtuberHasBlink = false
const pngtuberLayer = document.getElementById('pngtuber-layer')
const pngtuberIdle = document.getElementById('pngtuber-idle')
const pngtuberTalk = document.getElementById('pngtuber-talk')
const pngtuberBlink = document.getElementById('pngtuber-blink')

// 瞬きタイマー
let pngBlinkTimeout = null
let pngIsBlinking = false

function schedulePNGBlink() {
  if (!pngtuberMode || !pngtuberHasBlink) return
  const interval = 3000 + Math.random() * 3000  // 3〜6秒おき
  pngBlinkTimeout = setTimeout(() => {
    if (!pngtuberMode) return
    pngIsBlinking = true
    // 瞬き表示
    pngtuberBlink.style.display = 'block'
    pngtuberIdle.style.display = 'none'
    setTimeout(() => {
      pngIsBlinking = false
      pngtuberBlink.style.display = 'none'
      if (!pngTalkState) pngtuberIdle.style.display = 'block'
      schedulePNGBlink()
    }, 150)  // 150ms だけ目を閉じる
  }, interval)
}

function setPNGTuber(idleUrl, talkUrl, blinkUrl) {
  // クロマキー処理してから設定
  const loadWithChroma = (url) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const c = document.createElement('canvas')
        c.width = img.naturalWidth
        c.height = img.naturalHeight
        const ctx2 = c.getContext('2d')
        ctx2.drawImage(img, 0, 0)
        const imageData = ctx2.getImageData(0, 0, c.width, c.height)
        const d = imageData.data
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i+1], b = d[i+2]
          // 緑背景を透過（緑が支配的で明るい部分）
          if (g > 100 && g > r * 1.4 && g > b * 1.4) {
            d[i+3] = 0  // アルファを0に
          }
          // エッジのグリーンスピル軽減
          else if (g > 80 && g > r * 1.1 && g > b * 1.1) {
            d[i+3] = Math.max(0, d[i+3] - 128)
          }
        }
        ctx2.putImageData(imageData, 0, 0)
        resolve(c.toDataURL('image/png'))
      }
      img.onerror = () => resolve(url)  // 失敗時はそのまま
      img.src = url
    })
  }

  Promise.all([
    loadWithChroma(idleUrl),
    talkUrl ? loadWithChroma(talkUrl) : Promise.resolve(null),
    blinkUrl ? loadWithChroma(blinkUrl) : Promise.resolve(null)
  ]).then(([idleData, talkData, blinkData]) => {
    pngtuberIdle.src = idleData
    pngtuberTalk.src = talkData || idleData
    if (blinkData) {
      pngtuberBlink.src = blinkData
      pngtuberHasBlink = true
    } else {
      pngtuberHasBlink = false
    }
    pngtuberMode = true
    pngtuberLayer.style.display = 'block'
    canvas.style.display = 'none'
    status.textContent = '🖼️ PNGTuber モード'
    console.log('PNGTuber mode (chroma keyed)')
    schedulePNGBlink()
  })
}

function disablePNGTuber() {
  pngtuberMode = false
  pngtuberHasBlink = false
  pngtuberLayer.style.display = 'none'
  canvas.style.display = 'block'
  if (pngBlinkTimeout) clearTimeout(pngBlinkTimeout)
}

// 音量取得（LipSync と PNGTuber で共有）
function getAudioVolume() {
  // ブラウザTTS使用中: analyserに信号が来ないのでシミュレート
  if (browserTTSSpeaking) {
    return 0.3 + Math.random() * 0.4 // 0.3〜0.7でランダム口パク
  }
  analyser.getFloatTimeDomainData(timeDomainData)
  let volume = 0
  for (let i = 0; i < timeDomainData.length; i++) {
    volume = Math.max(volume, Math.abs(timeDomainData[i]))
  }
  return volume
}

// ============================================
// LipSync
// ============================================
let pngTalkState = false
let pngToggleCooldown = 0

function updateLipSync() {
  const rawVolume = getAudioVolume()
  const volume = 1 / (1 + Math.exp(-45 * rawVolume + 5))
  const isTalking = volume > 0.1

  if (pngtuberMode) {
    // PNGTuber: idle/talk 画像切り替え（パタパタ感を出すためクールダウン付き）
    const now = Date.now()
    if (isTalking !== pngTalkState && now > pngToggleCooldown) {
      pngTalkState = isTalking
      pngToggleCooldown = now + 80  // 80msクールダウンでパタパタ
      pngtuberIdle.style.display = isTalking ? 'none' : 'block'
      pngtuberTalk.style.display = isTalking ? 'block' : 'none'
    }
  } else if (currentVRM) {
    // VRM: 口の開き具合を設定
    const mouthValue = volume < 0.1 ? 0 : volume
    currentVRM.expressionManager?.setValue('aa', mouthValue)
  }
}

// ============================================
// Credit Display（クレジット表示）
// ============================================
const creditOverlay = document.getElementById('credit-overlay')
let creditTimer = null

// VOICEVOX speakerId → キャラ名マッピング（主要キャラ）
// ❗ popup.js にも同様の VOICEVOX_SPEAKERS があります。片方を更新したら両方更新してください。
const VOICEVOX_SPEAKERS = {
  0: 'VOICEVOX 四国めたん（ノーマル）', 1: 'VOICEVOX ずんだもん（ノーマル）',
  2: 'VOICEVOX 四国めたん（あまあま）', 3: 'VOICEVOX ずんだもん（あまあま）',
  4: 'VOICEVOX 四国めたん（ツンツン）', 5: 'VOICEVOX ずんだもん（ツンツン）',
  6: 'VOICEVOX 四国めたん（セクシー）', 7: 'VOICEVOX ずんだもん（セクシー）',
  8: 'VOICEVOX 春日部つむぎ', 9: 'VOICEVOX 雨晴はう',
  10: 'VOICEVOX 波音リツ', 11: 'VOICEVOX 玄野武宏（ノーマル）',
  12: 'VOICEVOX 白上虎太郎（ふつう）', 13: 'VOICEVOX 青山龍星',
  14: 'VOICEVOX 冥鳴ひまり', 20: 'VOICEVOX もち子さん',
  21: 'VOICEVOX 剣崎雌雄', 23: 'VOICEVOX WhiteCUL',
  27: 'VOICEVOX 後鬼', 29: 'VOICEVOX No.7（ノーマル）',
  38: 'VOICEVOX ずんだもん（ヒソヒソ）', 42: 'VOICEVOX ずんだもん（ヘロヘロ）',
  43: 'VOICEVOX ずんだもん（なみだめ）', 46: 'VOICEVOX 中国うさぎ',
  47: 'VOICEVOX 栗田まろん', 48: 'VOICEVOX あいえるたん',
  51: 'VOICEVOX 満別花丸', 52: 'VOICEVOX 琴詠ニア',
}

function getVoicevoxCreditName(speakerId) {
  return VOICEVOX_SPEAKERS[speakerId] || `VOICEVOX (Speaker ${speakerId})`
}

/**
 * クレジットを自動生成して表示
 * @param {number} durationMs 表示時間（ミリ秒）。0なら手動で非表示にするまで表示。
 * @param {string} customCredit カスタムクレジットテキスト（指定すると自動生成を上書き）
 */
function showCredits(durationMs = 8000, customCredit = '') {
  if (!creditOverlay) return

  let creditText = customCredit
  if (!creditText) {
    // 自動生成
    const lines = ['AITuber Radio']
    const usedSpeakers = new Set()
    for (const ch of characters) {
      if (ch.vrm && ch.name && ch.speakerId !== undefined) {
        const voiceName = ttsEngine === 'voicevox'
          ? getVoicevoxCreditName(ch.speakerId)
          : ttsEngine === 'sbv2' ? `Style-Bert-VITS2` : 'ブラウザTTS'
        if (!usedSpeakers.has(ch.speakerId)) {
          lines.push(voiceName)
          usedSpeakers.add(ch.speakerId)
        }
      }
    }
    creditText = lines.join('\n')
  }

  creditOverlay.textContent = ''
  creditText.split('\n').forEach((line, i) => {
    if (i > 0) creditOverlay.appendChild(document.createElement('br'))
    creditOverlay.appendChild(document.createTextNode(line))
  })
  creditOverlay.classList.add('visible')

  if (creditTimer) clearTimeout(creditTimer)
  if (durationMs > 0) {
    creditTimer = setTimeout(() => {
      creditOverlay.classList.remove('visible')
      creditTimer = null
    }, durationMs)
  }
}

function hideCredits() {
  if (creditOverlay) creditOverlay.classList.remove('visible')
  if (creditTimer) { clearTimeout(creditTimer); creditTimer = null }
}

// ============================================
// Subtitle
// ============================================
function showSubtitle(text, title = '') {
  if (title) {
    subtitleTitle.textContent = `📖 ${title}`
    subtitleTitle.style.display = 'block'
  } else {
    subtitleTitle.style.display = 'none'
  }
  subtitleText.textContent = text
  subtitleBox.classList.add('visible')
}

function hideSubtitle() {
  subtitleBox.classList.remove('visible')
}

// ============================================
// Speech (TTS) — VOICEVOX / Style-Bert-VITS2 / カスタム
// ============================================
let ttsAvailable = true
let voicevoxAvailable = true  // 後方互換
let currentSpeedScale = 0.95
let ttsEngine = 'voicevox'
let ttsPort = 50021
let ttsModelId = 0

// 起動時にTTS設定を復元
chrome.storage.local.get(['ttsEngine', 'ttsPort', 'ttsModelId'], (data) => {
  if (data.ttsEngine) ttsEngine = data.ttsEngine
  if (data.ttsPort) ttsPort = data.ttsPort
  if (data.ttsModelId !== undefined) ttsModelId = data.ttsModelId
  console.log(`TTS engine: ${ttsEngine} port:${ttsPort}`)
})

async function checkTTS() {
  if (ttsEngine === 'browser') {
    ttsAvailable = true
    voicevoxAvailable = true
    return true
  }
  try {
    if (ttsEngine === 'sbv2') {
      await fetch(`http://localhost:${ttsPort}/status`)
    } else {
      await fetch(`http://localhost:${ttsPort}/version`)
    }
    ttsAvailable = true
    voicevoxAvailable = true
    return true
  } catch {
    ttsAvailable = false
    voicevoxAvailable = false
    const name = ttsEngine === 'sbv2' ? 'Style-Bert-VITS2' : 'VOICEVOX'
    status.textContent = `❌ ${name}が起動していません (port:${ttsPort})`
    return false
  }
}

// 後方互換
async function checkVoicevox() { return checkTTS() }

/**
 * テキストから音声データを合成（再生はしない）
 * @returns {AudioBuffer|null}
 */
async function synthesize(text, speakerId = 38) {
  if (!ttsAvailable) return null

  let wavBuffer

  if (ttsEngine === 'sbv2') {
    // Style-Bert-VITS2: GET /voice で直接WAV取得
    const params = new URLSearchParams({
      text: text,
      model_id: String(ttsModelId),
      speaker_id: String(speakerId),
      length: String(1.0 / currentSpeedScale),  // VOICEVOXのspeedScaleの逆数
      language: 'JP',
      auto_split: 'true',
      split_interval: '0.5'
    })
    const res = await fetch(`http://localhost:${ttsPort}/voice?${params}`)
    if (!res.ok) throw new Error(`SBV2 音声合成失敗 (${res.status})`)
    wavBuffer = await res.arrayBuffer()
  } else {
    // VOICEVOX: audio_query → synthesis
    const qRes = await fetch(
      `http://localhost:${ttsPort}/audio_query?text=${encodeURIComponent(text)}&speaker=${speakerId}`,
      { method: 'POST' }
    )
    if (!qRes.ok) throw new Error(`音声クエリ失敗 (${qRes.status})`)
    const query = await qRes.json()
    query.speedScale = currentSpeedScale

    const sRes = await fetch(
      `http://localhost:${ttsPort}/synthesis?speaker=${speakerId}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(query) }
    )
    if (!sRes.ok) throw new Error(`音声合成失敗 (${sRes.status})`)
    wavBuffer = await sRes.arrayBuffer()
  }

  return await audioCtx.decodeAudioData(wavBuffer)
}

/**
 * AudioBuffer を再生（リップシンク・ダッキング付き）
 */
function playAudio(audioBuffer) {
  const source = audioCtx.createBufferSource()
  source.buffer = audioBuffer
  source.connect(masterGain)
  source.connect(analyser)

  duckBGM()

  return new Promise((resolve) => {
    source.onended = () => {
      unduckBGM()
      status.textContent = ''
      resolve()
    }
    source.start()
  })
}

/**
 * ブラウザ内蔵TTSで再生（Web Speech API）
 */
let browserTTSSpeaking = false
function speakWithBrowser(text) {
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ja-JP'
    u.rate = currentSpeedScale

    // 日本語ボイスを選択
    const voices = speechSynthesis.getVoices()
    const jaVoice = voices.find(v => v.lang.startsWith('ja'))
    if (jaVoice) u.voice = jaVoice

    duckBGM()
    browserTTSSpeaking = true

    u.onend = () => {
      browserTTSSpeaking = false
      unduckBGM()
      status.textContent = ''
      resolve()
    }
    u.onerror = () => {
      browserTTSSpeaking = false
      unduckBGM()
      resolve()
    }
    speechSynthesis.speak(u)
  })
}

// ============================================
// AI 読み変換（TTS読み間違い防止）
// ============================================
const readingCache = new Map()
let readingConversionDisabled = false

/**
 * 複数行のテキストをAIで読み変換（バッチ処理）
 * TTSが読み間違えやすい漢字をひらがなに変換する
 * AIが利用不可の場合は原文をそのまま返す
 */
async function convertReadingsForTTS(lines) {
  try {
    // 無効化済み or AIなし → 原文のまま
    if (readingConversionDisabled) return lines.map(l => l.text)
    const settings = await chrome.storage.local.get(['llmApiKey', 'llmProvider'])
    if (!settings.llmApiKey && settings.llmProvider !== 'ollama') {
      return lines.map(l => l.text)
    }

    // キャッシュヒットチェック
    const results = new Array(lines.length)
    const uncachedIndices = []
    const uncachedTexts = []

    for (let i = 0; i < lines.length; i++) {
      const cached = readingCache.get(lines[i].text)
      if (cached) {
        results[i] = cached
      } else {
        uncachedIndices.push(i)
        uncachedTexts.push(lines[i].text)
      }
    }

    if (uncachedTexts.length === 0) return results

    // バッチでAI変換（最大20行ずつ）
    const batchSize = 20
    for (let b = 0; b < uncachedTexts.length; b += batchSize) {
      const batch = uncachedTexts.slice(b, b + batchSize)
      const batchIndices = uncachedIndices.slice(b, b + batchSize)

      try {
        const numberedLines = batch.map((t, i) => `${i + 1}. ${t}`).join('\n')
        const response = await callLLM([
          {
            role: 'system',
            content: `あなたはTTS（音声合成）用のテキスト前処理アシスタントです。
入力された日本語テキストの中で、TTSが読み間違えやすい漢字だけをひらがなに変換してください。

【ルール】
- 読み間違えやすい漢字のみ変換。それ以外はそのまま残す
- 文脈から正しい読みを判断する
- 例: "辛い料理" → "からい料理"（つらい ではなく からい）
- 例: "今日は一日中" → "きょうはいちにちじゅう"
- 例: "明日の朝" → "あしたの朝"（あす ではなく あした、口語的に）
- 例: "生ビール" → "なまビール"（せい ではなく なま）
- 例: "何人" → "なんにん"（なにじん ではない場合）
- 例: "大人気" → "だいにんき"（おとなげ ではなく）
- 例: "亡くなった方" → "亡くなったかた"（ほう ではなく かた、人を指す場合）
- 例: "こちらの方が" → "こちらのほうが"（比較の場合は ほう）
- 例: "皆さんの方" → "皆さんのかた"（人を指す場合は かた）
- 例: "お昼時" → "おひるどき"（じ ではなく どき）
- 例: "食事時" → "しょくじどき"（〜時 は どき と読む場合が多い）
- 例: "笑う門には福来る" → "わらうかどにはふくきたる"（ことわざの正しい読み）
- 例: "辛いことがあっても" → "つらいことがあっても"（からい ではなく つらい）
- 例: "未病" → "みびょう"（みやまい ではなく みびょう）
- 例: "車" → "くるま"（しゃ ではなく くるま、単独や一般文脈では）
- 例: "山道" → "やまみち"（さんどう ではなく やまみち）
- 例: "河原" → "かわら"（かわはら ではなく）
- 例: "風呂" → "ふろ"（ふうろ ではなく）
- 例: "一人" → "ひとり"（いちにん ではなく一般的に ひとり）
- 例: "二人" → "ふたり"（ににん ではなく）
- 例: "今朝" → "けさ"（こんちょう ではなく）
- 例: "昨日" → "きのう"（さくじつ ではなく口語で きのう）
- 例: "何処" → "どこ"（なんしょ ではなく）
- 例: "上手" → "じょうず"（うわて ではなく一般的に）
- 例: "下手" → "へた"（しもて ではなく一般的に）
- 例: "家系ラーメン" → "いえけいラーメン"（かけい ではなく いえけい）
- 例: "家系" → "いえけい"（ラーメンの文脈では いえけい）

【特に注意: VOICEVOXが間違えやすい漢字】
- 単独の「車」「山」「川」「道」等の一字漢字は訓読みに変換する
- 「〜の方」は文脈で「かた」（人）か「ほう」（方向・比較）を判断
- 口語体のテキストでは、漢語読みではなく和語読みを優先する
- 問題ない漢字はそのまま残す（例: "食べる" はそのまま）
- 番号付きで、入力と同じ行数で返す
- 変換のみ出力し、説明は不要`
          },
          {
            role: 'user',
            content: numberedLines
          }
        ], { maxTokens: 1500, temperature: 0.1 })

        if (response) {
          const converted = response.split('\n')
            .filter(l => l.trim())
            .map(l => l.replace(/^\d+\.\s*/, '').trim())

          for (let i = 0; i < batchIndices.length; i++) {
            const idx = batchIndices[i]
            const text = (i < converted.length && converted[i]) ? converted[i] : lines[idx].text
            results[idx] = text
            readingCache.set(lines[idx].text, text)
          }
          console.log(`📝 読み変換: ${batchIndices.length}行`)
        } else {
          for (const idx of batchIndices) {
            results[idx] = lines[idx].text
          }
        }
      } catch {
        readingConversionDisabled = true
        for (const idx of batchIndices) {
          results[idx] = lines[idx].text
        }
      }
    }

    return results
  } catch {
    // どんなエラーでも原文を返す
    readingConversionDisabled = true
    return lines.map(l => l.text)
  }
}

/**
 * テキストを合成して再生（従来の speak — 互換用）
 */
async function speak(text, speakerId = 38) {
  if (audioCtx.state === 'suspended') await audioCtx.resume()

  try {
    if (!await checkVoicevox()) return

    // 字幕は原文で表示
    status.textContent = `🎙️ ${text.slice(0, 25)}…`

    // AI読み変換（1行）
    const converted = await convertReadingsForTTS([{ text }])
    const ttsText = converted[0] || text
    if (ttsText !== text) {
      console.log(`📝 読み変換: "${text}" → "${ttsText}"`)
    }

    if (ttsEngine === 'browser') {
      await speakWithBrowser(ttsText)
    } else {
      const audioBuffer = await synthesize(ttsText, speakerId)
      if (audioBuffer) await playAudio(audioBuffer)
    }
  } catch (e) {
    const msg = e.message?.includes('Failed to fetch')
      ? 'TTSとの通信に失敗しました'
      : e.message
    status.textContent = `❌ ${msg}`
    console.error('speak error:', e)
  }
}

/**
 * 複数行を先読み合成しながら再生するパイプライン
 * @param {Array<{text, emotion?, intensity?, speaker?}>} lines
 * @param {number} defaultSpeaker
 * @param {Function} onLine - (line, index) 各行再生前のコールバック
 * @returns {boolean} stopRequested で中断されたか
 */
async function speakPipeline(lines, defaultSpeaker = 38, onLine = null) {
  console.log(`🔧 speakPipeline: ${lines.length}行, speaker=${defaultSpeaker}, engine=${ttsEngine}`)
  if (audioCtx.state === 'suspended') await audioCtx.resume()
  const ttsOk = await checkVoicevox()
  console.log(`🔧 speakPipeline: TTS check = ${ttsOk}`)
  if (!ttsOk) return false

  // 読み変換: speechText が明示指定されていればそれを使い、なければAI変換
  const ttsTexts = lines.map(l => l.speechText && l.speechText !== l.text ? l.speechText : null)
  const needsAI = ttsTexts.some(t => t === null)
  if (needsAI) {
    const aiTexts = await convertReadingsForTTS(lines)
    for (let i = 0; i < ttsTexts.length; i++) {
      if (ttsTexts[i] === null) ttsTexts[i] = aiTexts[i]
    }
  }

  // ブラウザTTS: 先読み不要、順次再生
  if (ttsEngine === 'browser') {
    for (let i = 0; i < lines.length; i++) {
      if (stopRequested) return true
      const line = lines[i]
      const ttsText = ttsTexts[i] || line.text

      // キャラクター切替
      if (line.character) {
        const charIdx = findCharacterByName(line.character)
        if (charIdx >= 0) setActiveCharacter(charIdx)
      }

      if (onLine) onLine(line, i)
      if (ttsText !== line.text) {
        console.log(`📝 [${i}] 表示: "${line.text}" → TTS: "${ttsText}"`)
      }
      await speakWithBrowser(ttsText)
      if (stopRequested) return true
      const pause = line.text.endsWith('？') ? 400
        : line.text.endsWith('！') ? 250
        : line.text.endsWith('…') || line.text.endsWith('……') ? 500
        : 200
      await sleep(pause)
    }
    return false
  }

  // VOICEVOX/SBV2: 先読み合成パイプライン
  let prefetchedBuffer = null
  let prefetchPromise = null
  let prefetchSpeaker = null

  let firstSpeaker = lines[0]?.speaker || defaultSpeaker
  if (lines[0]?.character) {
    const charIdx = findCharacterByName(lines[0].character)
    if (charIdx >= 0) firstSpeaker = characters[charIdx].speakerId || firstSpeaker
  }
  prefetchSpeaker = firstSpeaker
  prefetchPromise = synthesize(ttsTexts[0], firstSpeaker).catch(() => null)

  for (let i = 0; i < lines.length; i++) {
    if (stopRequested) return true

    const line = lines[i]
    let speaker = line.speaker || defaultSpeaker
    const ttsText = ttsTexts[i] || line.text

    // キャラクター切替: line.character があればアクティブキャラを切り替え
    if (line.character) {
      const charIdx = findCharacterByName(line.character)
      console.log(`🎭 [${i}] char:"${line.character}" → idx:${charIdx}, speaker:${charIdx >= 0 ? characters[charIdx].speakerId : 'N/A'}`)
      if (charIdx >= 0) {
        setActiveCharacter(charIdx)
        speaker = characters[charIdx].speakerId || speaker
      }
    }


    if (onLine) onLine(line, i)

    if (ttsText !== line.text) {
      console.log(`📝 [${i}] 表示: "${line.text}" → TTS: "${ttsText}"`)
    }

    try {
      let audioBuffer
      const t0 = performance.now()

      if (prefetchPromise && prefetchSpeaker === speaker) {
        audioBuffer = await prefetchPromise
        prefetchPromise = null
        console.log(`🔊 [${i}] prefetch hit (speaker:${speaker}): ${(performance.now() - t0).toFixed(0)}ms`)
      } else {
        prefetchPromise = null  // speaker不一致のprefetchは破棄
        audioBuffer = await synthesize(ttsText, speaker)
        console.log(`🔊 [${i}] sync synth (speaker:${speaker}): ${(performance.now() - t0).toFixed(0)}ms`)
      }

      if (i + 1 < lines.length && !stopRequested) {
        const nextLine = lines[i + 1]
        let nextSpeaker = nextLine.speaker || defaultSpeaker
        // 次の行にキャラ指定があればそのspeakerIdを使う
        if (nextLine.character) {
          const nextCharIdx = findCharacterByName(nextLine.character)
          if (nextCharIdx >= 0) nextSpeaker = characters[nextCharIdx].speakerId || nextSpeaker
        }
        const nextTtsText = ttsTexts[i + 1] || nextLine.text
        prefetchSpeaker = nextSpeaker
        prefetchPromise = synthesize(nextTtsText, nextSpeaker).catch(() => null)
      }

      const t1 = performance.now()
      if (audioBuffer) await playAudio(audioBuffer)
      console.log(`🔊 [${i}] playback: ${(performance.now() - t1).toFixed(0)}ms`)
      if (stopRequested) return true

      const pause = line.text.endsWith('？') ? 400
        : line.text.endsWith('！') ? 250
        : line.text.endsWith('…') || line.text.endsWith('……') ? 500
        : 200
      await sleep(pause)

    } catch (e) {
      console.error('Pipeline speak error:', e)
    }
  }

  return false
}

// ============================================
// Expression Control
// ============================================
const EMOTIONS = ['happy', 'angry', 'sad', 'surprised', 'relaxed', 'neutral']
let emotionIndex = 0

function setEmotion(emotion, intensity = 1) {
  if (!currentVRM) return
  for (const name of EMOTIONS) {
    currentVRM.expressionManager?.setValue(name, 0)
  }
  if (emotion !== 'neutral') {
    currentVRM.expressionManager?.setValue(emotion, intensity)
  }

  // ボディリアクションをトリガー（アクティブキャラ）
  const activeChar = characters[activeCharIndex]
  if (activeChar && emotion !== 'neutral') {
    if (!activeChar._reaction) activeChar._reaction = { type: 'none', timer: 0, intensity: 0 }
    activeChar._reaction.type = emotion
    activeChar._reaction.intensity = intensity
    activeChar._reaction.duration = emotion === 'happy' ? 1.5 : 0.8
    activeChar._reaction.timer = activeChar._reaction.duration
  }
}

function cycleEmotion() {
  const emotion = EMOTIONS[emotionIndex % EMOTIONS.length]
  setEmotion(emotion, 1)
  status.textContent = `表情: ${emotion}`
  emotionIndex++
}

// ============================================
// Script Parser & Auto-Play
// ============================================
let isPlaying = false
let stopRequested = false

// テキストを読み上げ用に変換するヘルパー
function cleanTextForSpeech(text) {
  return text
    // 完全な感情タグ [表情,強度] を除去
    .replace(/\[[\w\u3040-\u9faf]+[,，]\s*[\d.]+\]\s*/g, '')
    // 不完全な感情タグ（途中で切れたもの）を除去
    .replace(/\[[\w\u3040-\u9faf]+[,，][\d.]*\s*$/g, '')
    .replace(/^\s*\[[\w\u3040-\u9faf]+[,，]\s*[\d.]*\]?\s*/g, '')
    // マークダウンリンク [text](url) → text
    .replace(/\[([^\]]*)\]\(https?:\/\/[^)]+\)/g, '$1')
    // 生URL → 「ユーアールエル」
    .replace(/https?:\/\/\S+/g, 'ユーアールエル')
    // 文末の w/ｗ（笑い）→「わら」
    // 日本語文字・句読点・記号の後の w を笑いと判断
    .replace(/([ぁ-んァ-ヶー一-龥、。！？）」』】〕〉》♪])[wWｗ]+(?=[。、！？\s]|$)/g, '$1、わら')
    // www 単体（3つ以上）→ 草
    .replace(/(?:^|(?<=\s))[wWｗ]{3,}(?=\s|$)/g, '、くさ')
    // マークダウン強調を除去
    .replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1')
    // 余分な空白を整理
    .replace(/\s+/g, ' ')
    .trim()
}

// 後方互換エイリアス
const stripURLs = cleanTextForSpeech

/**
 * テキストから表示用と発話用を分離する
 * 書式: "表示テキスト {読みテキスト}" → { display: "表示テキスト", speech: "読みテキスト" }
 * {読み} がなければ display = speech = cleanTextForSpeech(text)
 */
function splitDisplaySpeech(text) {
  const match = text.match(/^(.+?)\s*\{([^}]+)\}\s*$/)
  if (match) {
    const display = match[1].trim()
    const speech = match[2].trim()
    return { display, speech }
  }
  const cleaned = cleanTextForSpeech(text)
  return { display: cleaned, speech: cleaned }
}

function parseScript(mdText) {
  const lines = mdText.split('\n')
  const meta = {}
  const dialogues = []
  let inFrontmatter = false
  let frontmatterDone = false
  let inMultilineValue = false
  let multilineKey = ''
  let currentEmotion = 'neutral'
  let currentIntensity = 1.0
  let currentCharacter = null  // [char: xxx] で指定されたキャラ名

  for (const line of lines) {
    const trimmed = line.trim()

    if (trimmed === '---') {
      if (!inFrontmatter && !frontmatterDone) {
        inFrontmatter = true
        inMultilineValue = false
        continue
      } else if (inFrontmatter) {
        inFrontmatter = false
        frontmatterDone = true
        inMultilineValue = false
        continue
      }
    }

    if (inFrontmatter) {
      if (inMultilineValue) {
        if (/^\w+:/.test(trimmed)) {
          inMultilineValue = false
        } else {
          meta[multilineKey] = ((meta[multilineKey] || '') + ' ' + trimmed).trim()
          continue
        }
      }
      const match = trimmed.match(/^(\w+):\s*\|?\s*$/)
      if (match) {
        multilineKey = match[1]
        inMultilineValue = true
        meta[multilineKey] = ''
        continue
      }
      const singleMatch = trimmed.match(/^(\w+):\s*(.+)$/)
      if (singleMatch) {
        meta[singleMatch[1]] = singleMatch[2]
      }
      continue
    }

    if (!trimmed) continue
    if (trimmed.startsWith('#')) continue
    if (trimmed.startsWith('//')) continue
    if (trimmed.startsWith('<!--')) continue
    // URL行 → 「URL」と読み上げ
    if (/^https?:\/\/\S+$/.test(trimmed)) {
      dialogues.push({ emotion: 'neutral', intensity: 0.75, text: 'ユーアールエル' })
      continue
    }
    // マークダウンリンクのみの行 → リンクテキストを読む
    const mdLinkOnly = trimmed.match(/^\[([^\]]+)\]\(https?:\/\/[^)]+\)$/)
    if (mdLinkOnly) {
      dialogues.push({ emotion: 'neutral', intensity: 0.75, text: mdLinkOnly[1] })
      continue
    }

    const dialogueMatch = trimmed.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/)
    if (dialogueMatch) {
      const cleanText = stripURLs(dialogueMatch[3])
      if (cleanText) {
        dialogues.push({
          emotion: dialogueMatch[1],
          intensity: parseFloat(dialogueMatch[2]),
          text: cleanText
        })
      }
      continue
    }

    // [key: value] 形式のメタデータ行（感情・タイプ・BGM等）
    const tagLine = trimmed.match(/^\[(\w+):\s*(.+?)\]$/)
    if (tagLine) {
      const key = tagLine[1].toLowerCase()
      const val = tagLine[2]
      if (key === 'emotion') currentEmotion = val
      else if (key === 'intensity') currentIntensity = parseFloat(val)
      else if (key === 'char') currentCharacter = val.trim()
      // type, bgm, speaker 等はスキップ
      continue
    }

    // タグなしのプレーンテキスト行 → AI前処理の対象
    const cleanText = stripURLs(trimmed)
    if (cleanText) {
      dialogues.push({
        emotion: currentEmotion || 'neutral',
        intensity: currentIntensity || 1.0,
        text: cleanText,
        character: currentCharacter,
        _untagged: true
      })
    }
  }

  console.log('parseScript result:', { meta, dialogueCount: dialogues.length })
  return { meta, dialogues }
}

// ============================================
// AI Preprocessing (Chrome Built-in AI / Gemini Nano)
// ============================================
let aiSession = null

async function getAISession() {
  if (aiSession) return aiSession

  try {
    if (!self.ai?.languageModel) {
      console.log('AI: Prompt API not available')
      return null
    }

    // タイムアウト付きでチェック（日本など未対応地域でハングを防ぐ）
    const capPromise = ai.languageModel.capabilities()
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('AI capabilities check timeout')), 3000)
    )

    const capabilities = await Promise.race([capPromise, timeoutPromise])
    if (capabilities.available !== 'readily') {
      console.log('AI: Gemini Nano not ready, status:', capabilities.available)
      return null
    }

    aiSession = await ai.languageModel.create({
      systemPrompt: `あなたは怪談朗読の演出家です。テキストを処理して以下のフォーマットで出力してください。

ルール:
1. 長い文を自然な区切りで短い文（50文字以内）に分割する
2. 各文の先頭に [表情,強度] タグを付ける
3. 表情は neutral, sad, angry, surprised, relaxed, happy のいずれか
4. 強度は 0.0〜1.0
5. 出力はタグ付き行のみ。説明や余計な文は不要

例:
入力: ある夜のこと、一人の商人が用事を済ませ、この坂を急いで通りかかりました。すると、お堀端の土手のそばに、一人の女がうずくまっているのが見えました。
出力:
[neutral,0.75] ある夜のこと、一人の商人が用事を済ませ、
[neutral,0.70] この坂を急いで通りかかりました。
[sad,0.60] すると、お堀端の土手のそばに、
[sad,0.65] 一人の女がうずくまっているのが見えました。`
    })

    console.log('AI: Session created successfully')
    return aiSession
  } catch (e) {
    console.log('AI: Not available -', e.message)
    return null
  }
}

async function preprocessWithAI(dialogues) {
  try {
    // タグなし行（AI処理が必要な行）を特定
    const needsProcessing = dialogues.some(d => d._untagged)
    if (!needsProcessing) return dialogues

    const session = await getAISession()

  if (!session) {
    // フォールバック: 句読点で分割
    console.log('AI: Using fallback splitting')
    return fallbackSplit(dialogues)
  }

  status.textContent = '🤖 AI で台本を前処理中...'

  const processed = []
  // バッチ処理: 連続する未タグ行をまとめてAIに送る
  let batch = []

  for (const d of dialogues) {
    if (d._untagged) {
      batch.push(d.text)
    } else {
      if (batch.length > 0) {
        const aiLines = await processAIBatch(session, batch)
        processed.push(...aiLines)
        batch = []
      }
      processed.push(d)
    }
  }
  if (batch.length > 0) {
    const aiLines = await processAIBatch(session, batch)
    processed.push(...aiLines)
  }

  console.log(`AI: Processed ${dialogues.length} → ${processed.length} lines`)
  return processed

  } catch (e) {
    console.error('AI preprocessing error:', e)
    return fallbackSplit(dialogues)
  }
}

async function processAIBatch(session, texts) {
  const input = texts.join('\n')
  try {
    const result = await session.prompt(
      `以下のテキストを短い文に分割して感情タグを付けてください:\n\n${input}`
    )

    const lines = result.split('\n').filter(l => l.trim())
    const parsed = []

    for (const line of lines) {
      const match = line.trim().match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/)
      if (match) {
        parsed.push({
          emotion: match[1],
          intensity: parseFloat(match[2]),
          text: match[3]
        })
      }
    }

    if (parsed.length > 0) return parsed

    // AIの出力がパースできなかった場合フォールバック
    return fallbackSplitTexts(texts)
  } catch (e) {
    console.error('AI batch error:', e)
    return fallbackSplitTexts(texts)
  }
}

function fallbackSplit(dialogues) {
  const result = []
  for (const d of dialogues) {
    if (d._untagged) {
      result.push(...fallbackSplitTexts([d.text]))
    } else {
      result.push(d)
    }
  }
  return result
}

function fallbackSplitTexts(texts) {
  const result = []
  for (const text of texts) {
    // 句読点で分割（。！？で切る）
    const chunks = text.split(/(?<=[。！？])\s*/).filter(c => c.trim())
    if (chunks.length <= 1) {
      // 分割できない場合は読点で試す
      const subChunks = text.split(/(?<=[、])\s*/).filter(c => c.trim())
      if (subChunks.length > 1 && text.length > 30) {
        // 読点で分割して短めにまとめる
        let buffer = ''
        for (const sc of subChunks) {
          buffer += sc
          if (buffer.length >= 25) {
            result.push({ emotion: 'neutral', intensity: 0.75, text: buffer })
            buffer = ''
          }
        }
        if (buffer) result.push({ emotion: 'neutral', intensity: 0.75, text: buffer })
      } else {
        result.push({ emotion: 'neutral', intensity: 0.75, text })
      }
    } else {
      for (const chunk of chunks) {
        result.push({ emotion: 'neutral', intensity: 0.75, text: chunk })
      }
    }
  }
  return result
}

async function playScript(script) {
  if (isPlaying) {
    stopRequested = true
    return
  }

  isPlaying = true
  stopRequested = false
  const { meta, dialogues: rawDialogues } = script
  const title = meta.title || '台本'

  // ウィンドウサイズ変更（frontmatter: size: 1080x1920）
  if (meta.size) {
    const sizeMatch = meta.size.match(/(\d+)\s*[x×]\s*(\d+)/i)
    if (sizeMatch) {
      const w = parseInt(sizeMatch[1])
      const h = parseInt(sizeMatch[2])
      chrome.runtime.sendMessage({ action: 'resize-window', width: w, height: h })
      if (h > w) document.body.classList.add('vertical-mode')
      console.log(`📐 ウィンドウリサイズ: ${w}×${h}${h > w ? ' (縦動画モード)' : ''}`)
    }
  }

  // AI 前処理
  console.log(`▶️ playScript: 前処理開始 (${rawDialogues.length}行, ttsEngine=${ttsEngine})`)
  const dialogues = await preprocessWithAI(rawDialogues)
  console.log(`▶️ playScript: 前処理完了 (${dialogues.length}行)`)

  status.textContent = `📖 「${title}」再生中...`

  // タイトル読み上げ
  if (meta.intro) {
    showSubtitle(meta.intro, title)
    await speak(meta.intro)
    if (stopRequested) { cleanup(); return }
    await sleep(800)
  } else if (title && title !== '台本') {
    console.log(`▶️ playScript: タイトル読み上げ "${title}"`)
    showSubtitle(title, '📖 朗読')
    await speak(title)
    if (stopRequested) { cleanup(); return }
    await sleep(800)
  }

  // パイプラインで先読み再生
  console.log(`▶️ playScript: speakPipeline開始 (${dialogues.length}行, speaker=${meta.speaker || 38})`)
  const stopped = await speakPipeline(dialogues, meta.speaker || 38, (line, i) => {
    setEmotion(line.emotion, line.intensity)
    showSubtitle(line.text, `${title}（${i + 1}/${dialogues.length}）`)
  })

  if (stopped) { cleanup(); return }

  hideSubtitle()
  setEmotion('neutral')
  status.textContent = `✅ 「${title}」再生完了`
  isPlaying = false

  function cleanup() {
    hideSubtitle()
    setEmotion('neutral')
    document.body.classList.remove('vertical-mode')
    status.textContent = '⏹️ 再生停止'
    isPlaying = false
    stopRequested = false
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * ジングル付き台本再生（自動生成番組用）
 * dialoguesの中で _sectionStart フラグが立っている行の前にジングルを再生
 */
async function playScriptWithJingles(script) {
  const { meta, dialogues: rawDialogues } = script
  const title = meta.title || '台本'
  const jingles = meta._jingles || []

  if (isPlaying) { stopRequested = true; return }
  isPlaying = true
  stopRequested = false

  // セクション境界を検出: _sectionStart フラグでカウント
  let sectionCount = 0
  for (const d of rawDialogues) {
    if (d._sectionStart) {
      d._sectionIdx = sectionCount++
    }
  }

  // AI 前処理
  const dialogues = await preprocessWithAI(rawDialogues)

  status.textContent = `📖 「${title}」再生中...`

  // タイトル読み上げ
  if (title && title !== '台本') {
    showSubtitle(title, '📖 朗読')
    await speak(title)
    if (stopRequested) { cleanup(); return }
    await sleep(800)
  }

  // パイプラインで再生（ジングル挿入付き）
  if (audioCtx.state === 'suspended') await audioCtx.resume()
  if (!await checkVoicevox()) { cleanup(); return }

  const ttsTexts = await convertReadingsForTTS(dialogues)
  const speaker = meta.speaker || 38

  // ブラウザTTSの場合
  if (ttsEngine === 'browser') {
    for (let i = 0; i < dialogues.length; i++) {
      if (stopRequested) break
      const line = dialogues[i]

      // ジングル再生チェック
      if (line._sectionIdx !== undefined && line._sectionIdx > 0 && jingles.length > 0) {
        const jIdx = Math.min(line._sectionIdx - 1, jingles.length - 1)
        const jUrl = await resolveMediaURL(jingles[jIdx])
        if (jUrl) {
          console.log(`🎵 ジングル再生: ${jingles[jIdx]}`)
          await playJingle({ audio: jUrl, fadeOut: 1.5, duckTo: 0.15 })
        }
      }

      setEmotion(line.emotion, line.intensity)
      showSubtitle(line.text, `${title}（${i + 1}/${dialogues.length}）`)
      await speakWithBrowser(ttsTexts[i] || line.text)
    }
  } else {
    // VOICEVOX/SBV2
    let prefetchedBuffer = null
    for (let i = 0; i < dialogues.length; i++) {
      if (stopRequested) break
      const line = dialogues[i]

      // ジングル再生チェック
      if (line._sectionIdx !== undefined && line._sectionIdx > 0 && jingles.length > 0) {
        const jIdx = Math.min(line._sectionIdx - 1, jingles.length - 1)
        const jUrl = await resolveMediaURL(jingles[jIdx])
        if (jUrl) {
          console.log(`🎵 ジングル再生: ${jingles[jIdx]}`)
          await playJingle({ audio: jUrl, fadeOut: 1.5, duckTo: 0.15 })
        }
      }

      setEmotion(line.emotion, line.intensity)
      showSubtitle(line.text, `${title}（${i + 1}/${dialogues.length}）`)

      const ttsText = ttsTexts[i] || line.text
      let buffer = prefetchedBuffer
      if (!buffer) {
        buffer = await synthesize(ttsText, speaker)
      }
      prefetchedBuffer = null

      if (buffer) {
        // 次の行を先読み
        if (i + 1 < dialogues.length) {
          const nextText = ttsTexts[i + 1] || dialogues[i + 1].text
          const prefetchPromise = synthesize(nextText, speaker)
            .then(b => { prefetchedBuffer = b })
            .catch(() => {})
          await playAudio(buffer)
          await prefetchPromise
        } else {
          await playAudio(buffer)
        }
      }
    }
  }

  hideSubtitle()
  setEmotion('neutral')
  await stopBGM()
  showCredits(8000)  // 8秒間クレジット表示
  status.textContent = `✅ 「${title}」再生完了`
  isPlaying = false

  function cleanup() {
    hideSubtitle()
    setEmotion('neutral')
    stopBGM()
    document.body.classList.remove('vertical-mode')
    status.textContent = '⏹️ 再生停止'
    isPlaying = false
    stopRequested = false
  }
}

/**
 * シンプルなジングル再生（SE音のみ、オーバーレイなし）
 */
async function playJingleSimple(url) {
  try {
    const res = await fetch(url)
    const arrayBuf = await res.arrayBuffer()
    const audioBuf = await audioCtx.decodeAudioData(arrayBuf)
    const source = audioCtx.createBufferSource()
    const gain = audioCtx.createGain()
    source.buffer = audioBuf
    source.connect(gain)
    gain.connect(masterGain)

    const maxDuration = Math.min(audioBuf.duration, 5) // 最大5秒
    const fadeStart = maxDuration - 1 // 最後1秒でフェードアウト

    gain.gain.setValueAtTime(1, audioCtx.currentTime)
    if (fadeStart > 0) {
      gain.gain.setValueAtTime(1, audioCtx.currentTime + fadeStart)
      gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + maxDuration)
    }

    source.start(0, 0, maxDuration)
    await new Promise(resolve => setTimeout(resolve, maxDuration * 1000 + 200))
    source.stop()
  } catch (e) {
    console.warn('🎵 ジングル再生失敗:', e.message)
  }
}

// ============================================
// Free Talk System（AI雑談 — AITuber Radio フリートーク）
// ============================================

const FREE_TALK_TOPICS = [
  // 怪談・オカルト系
  { category: 'kaidan', weight: 3, topics: [
    { theme: '深夜のコンビニ', hook: '深夜にコンビニ行ったら変な客がいた話', season: null, time: 'night' },
    { theme: '心霊スポット', hook: '友達に連れて行かれた心霊スポットの話', season: null },
    { theme: '配信中の怪奇現象', hook: '配信してたら変な音が入った話', season: null },
    { theme: '引っ越し先の変な部屋', hook: '安い物件には理由がある話', season: null },
    { theme: '夢の話', hook: '最近見た妙にリアルな夢の話', season: null },
    { theme: 'ネットで見つけた怖い話', hook: 'ネットサーフィンしてて見つけた背筋が凍る話', season: null },
    { theme: '学校の怪談あるある', hook: '学生時代に流行った怪談の思い出', season: null },
  ]},
  // 日常・体験系
  { category: 'daily', weight: 2, topics: [
    { theme: '散歩で見つけたもの', hook: 'この前散歩してたら不思議なお店を見つけた話', season: null },
    { theme: 'ネットショッピングの失敗', hook: '深夜のテンションで変な物ポチった話', season: null, time: 'night' },
    { theme: '料理の大失敗', hook: '久しぶりに自炊したら大惨事になった話', season: null },
    { theme: '推しのコンテンツ', hook: '最近ハマってるアニメ・漫画の話', season: null },
    { theme: '深夜ラジオあるある', hook: '深夜ラジオのリスナーとして共感する話', season: null, time: 'night' },
    { theme: 'SNSのトレンド', hook: '最近SNSで話題になってたこと', season: null },
  ]},
  // 食べ物系（飯テロ）
  { category: 'food', weight: 2, topics: [
    { theme: '深夜の飯テロ', hook: 'こんな時間だけど食べたいものの話', season: null, time: 'night' },
    { theme: 'コンビニスイーツ', hook: '最近食べたコンビニスイーツが最高だった話', season: null },
    { theme: 'ご当地グルメ', hook: '旅行先で食べた忘れられない味の話', season: null },
    { theme: 'カップ麺ランキング', hook: '本気で選ぶカップ麺ベスト3の話', season: null },
  ]},
  // 季節系
  { category: 'seasonal', weight: 1, topics: [
    { theme: '花見', hook: '花見に行った話', season: [3, 4] },
    { theme: '夏の怖い話', hook: '夏といえば怖い話', season: [7, 8] },
    { theme: '花火大会', hook: '花火大会の思い出', season: [7, 8] },
    { theme: '紅葉', hook: '紅葉を見に行った話', season: [10, 11] },
    { theme: 'クリスマス', hook: 'クリスマスの過ごし方', season: [12] },
    { theme: 'お正月', hook: '年末年始の話', season: [1, 12] },
    { theme: '梅雨', hook: '雨の日の不思議体験', season: [6, 7] },
  ]},
  // ネット・テック系
  { category: 'tech', weight: 1, topics: [
    { theme: 'AI VTuberの苦悩', hook: 'AI VTuberとしての自分について語る', season: null },
    { theme: 'ゲーム実況', hook: '最近やったゲームの話', season: null },
    { theme: 'ネットミーム', hook: '最近面白かったネタの話', season: null },
    { theme: 'スマホの中身', hook: 'スマホに入れてるアプリの話', season: null },
  ]},
]

// ============================================
// キャラクタープロンプト（ユーザーカスタマイズ可能）
// ============================================
const DEFAULT_CHARACTER = `あなたはラジオパーソナリティです。

【キャラクター】
- 語尾: 「〜っす」「〜っすよ」を自然に使う（毎文ではなく、3-4文に1回程度）
- 一人称: あたし、ウチ
- リスナーの呼び方: 先輩、先輩方
- 性格: 明るくてちょっとおっちょこちょい、でも怪談の時は真面目
- テンション: ラジオっぽく、語りかける感じ

【話し方のルール】
1. 必ず自分の体験として語る（「こないだ」「この前」等で始める）
2. 具体的な場所・人物・時間を入れてリアリティを出す
3. リスナーへの問いかけを2-3回入れる
4. 笑いや驚きのリアクションを入れる
5. ★絶対禁止★ 「配信終わり」「今日はここまで」等の締め・終了宣言`

let cachedCharacterPrompt = null

async function getCharacterPrompt() {
  if (cachedCharacterPrompt) return cachedCharacterPrompt
  const data = await chrome.storage.local.get(['characterPrompt'])
  cachedCharacterPrompt = data.characterPrompt || DEFAULT_CHARACTER
  return cachedCharacterPrompt
}

// storage 変更時にキャッシュクリア
chrome.storage.onChanged.addListener((changes) => {
  if (changes.characterPrompt) cachedCharacterPrompt = null
})

// タスク固有のルールをキャラクター設定に追加する
const FREETALK_RULES = `

【フリートークのルール】
1. 話の途中で脱線してもOK、自然な雑談感を出す
2. 話のオチまたは教訓で締める
3. あなたはトークの一部を担当するだけで、番組の進行は別のシステムが管理している

【出力形式】★厳守★
各段落の先頭に感情タグ [表情,強度] を付ける。
表情: neutral, happy, sad, surprised, relaxed, angry
強度: 0.0〜1.0
1段落は20〜40文字で短めに区切る。全体で20〜30段落（約800〜1200文字）。
段落は改行で区切る。それ以外の説明やメタ情報は一切不要。

例:
[happy,0.8] こないだね、久しぶりに夜の散歩に出たんすよ。
[neutral,0.7] 近所のコンビニまでなんだけど、なんか空気が変でさ。
[surprised,0.9] そしたらね、駐車場の隅に誰かいるんすよ。いやマジで。`

const REACTION_RULES = `

【感想のルール】★重要★
1. 直前に朗読した内容について感想を述べる
2. 怖かったポイント、印象的だった場面に具体的に触れる
3. 自分なりの解釈や考察を入れてもOK
4. リスナーへの問いかけを1-2回入れる
5. 3〜8段落程度の短めのトーク（30秒〜1分程度）

【出力形式】★厳守★
各段落の先頭に感情タグ [表情,強度] を付ける。
表情: neutral, happy, sad, surprised, relaxed, angry
強度: 0.0〜1.0
1段落は20〜40文字で短めに区切る。
段落は改行で区切る。それ以外の説明やメタ情報は一切不要。`

const COMMENT_REPLY_RULES = `
リスナーのコメントに返事をします。
- 1〜3文で返事する
- 返事の先頭に感情タグ [表情,強度] を付ける
- 表情: neutral, happy, sad, surprised, relaxed
例: [happy,0.8] ありがとう先輩！めっちゃ嬉しいっす！`

// 話題の重み付きランダム選択（季節・時間フィルタ付き）
function pickFreeTalkTopic() {
  const now = new Date()
  const month = now.getMonth() + 1
  const hour = now.getHours()
  const isNight = hour >= 21 || hour < 5

  // 季節と時間帯でフィルタリング
  const available = []
  for (const cat of FREE_TALK_TOPICS) {
    for (const topic of cat.topics) {
      if (topic.season && !topic.season.includes(month)) continue
      if (topic.time === 'night' && !isNight) continue
      for (let w = 0; w < cat.weight; w++) {
        available.push(topic)
      }
    }
  }

  return available[Math.floor(Math.random() * available.length)]
}

// 話題履歴（chrome.storage.local で永続化）
let freeTalkHistory = []  // { theme: string, usedAt: number, count: number }[]
const HISTORY_MAX = 30
const HISTORY_COOLDOWN_MS = 24 * 60 * 60 * 1000  // 24時間クールダウン

// 起動時に履歴を復元
chrome.storage.local.get(['freeTalkHistory'], (data) => {
  if (Array.isArray(data.freeTalkHistory)) {
    freeTalkHistory = data.freeTalkHistory
    console.log('📝 話題履歴を復元:', freeTalkHistory.length, '件')
  }
})

function saveFreeTalkHistory() {
  chrome.storage.local.set({ freeTalkHistory })
}

function recordTopicUsage(theme) {
  const now = Date.now()
  const idx = freeTalkHistory.findIndex(h => h.theme === theme)
  if (idx >= 0) {
    freeTalkHistory[idx].usedAt = now
    freeTalkHistory[idx].count = (freeTalkHistory[idx].count || 0) + 1
  } else {
    freeTalkHistory.push({ theme, usedAt: now, count: 1 })
  }
  // 古いものから削除して上限に収める
  if (freeTalkHistory.length > HISTORY_MAX) {
    freeTalkHistory.sort((a, b) => a.usedAt - b.usedAt)
    freeTalkHistory = freeTalkHistory.slice(-HISTORY_MAX)
  }
  saveFreeTalkHistory()
}

function pickUniqueFreeTalkTopic() {
  const now = Date.now()
  const maxRetries = 15
  for (let i = 0; i < maxRetries; i++) {
    const topic = pickFreeTalkTopic()
    const recent = freeTalkHistory.find(h => h.theme === topic.theme)
    // クールダウン期間外、または未使用なら採用
    if (!recent || (now - recent.usedAt) > HISTORY_COOLDOWN_MS) {
      recordTopicUsage(topic.theme)
      return topic
    }
  }
  // 全話題がクールダウン中 → 最も古く使ったものを採用
  console.log('📝 全話題がクールダウン中、最古の話題を再利用')
  freeTalkHistory.sort((a, b) => a.usedAt - b.usedAt)
  const oldestTheme = freeTalkHistory.length > 0 ? freeTalkHistory[0].theme : null
  // oldestTheme に対応する話題を探す、なければランダム
  const allTopics = FREE_TALK_TOPICS.flatMap(c => c.topics)
  const topic = allTopics.find(t => t.theme === oldestTheme) || pickFreeTalkTopic()
  recordTopicUsage(topic.theme)
  return topic
}

// ============================================
// LLM API ヘルパー（プロバイダー対応）
// ============================================
async function callLLM(messages, { maxTokens = 2000, temperature = 0.9 } = {}) {
  const settings = await chrome.storage.local.get(['llmApiUrl', 'llmApiKey', 'llmModel', 'llmProvider'])
  const provider = settings.llmProvider || 'gemini'
  const apiUrl = settings.llmApiUrl || 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions'
  const apiKey = settings.llmApiKey
  const model = settings.llmModel || 'gemini-3.1-flash-lite-preview'

  if (!apiKey && provider !== 'ollama') {
    return null // APIキーなし
  }

  // Claude (Anthropic) は独自フォーマット
  if (provider === 'claude') {
    return await callAnthropicAPI(apiUrl, apiKey, model, messages, maxTokens, temperature)
  }

  // OpenAI互換 (Gemini, OpenAI, Cerebras, Ollama, カスタム)
  const headers = { 'Content-Type': 'application/json' }
  if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({ model, messages, max_tokens: maxTokens, temperature })
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('LLM API error:', res.status, err)
    return null
  }

  const data = await res.json()
  return data.choices?.[0]?.message?.content || null
}

async function callAnthropicAPI(apiUrl, apiKey, model, messages, maxTokens, temperature) {
  // system メッセージを分離（Anthropic API は system をトップレベルパラメータで指定）
  const systemMsg = messages.find(m => m.role === 'system')
  const otherMsgs = messages.filter(m => m.role !== 'system')

  const body = {
    model,
    max_tokens: maxTokens,
    temperature,
    messages: otherMsgs,
  }
  if (systemMsg) body.system = systemMsg.content

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Anthropic API error:', res.status, err)
    return null
  }

  const data = await res.json()
  return data.content?.[0]?.text || null
}

/**
 * LLM API でフリートークテキストを生成
 */
async function generateFreeTalkText(topic) {
  const settings = await chrome.storage.local.get(['llmApiKey', 'llmProvider'])
  const apiKey = settings.llmApiKey
  const provider = settings.llmProvider || 'gemini'

  if (!apiKey && provider !== 'ollama') {
    console.log('FreeTalk: No API key, using template fallback')
    return generateFallbackFreeTalk(topic)
  }

  const now = new Date()
  const timeContext = now.getHours() >= 21 || now.getHours() < 5
    ? '深夜の配信中'
    : now.getHours() < 12 ? '朝の配信中' : '昼の配信中'

  // 最近の話題履歴をLLMに伝えて内容の重複も回避
  const recentTopics = freeTalkHistory
    .filter(h => (Date.now() - h.usedAt) < HISTORY_COOLDOWN_MS)
    .map(h => h.theme)
    .slice(-5)
  const historyHint = recentTopics.length > 0
    ? `\n※最近話した話題: ${recentTopics.join('、')}。これらと違う切り口で話してください。`
    : ''

  // 2キャラ判定
  const activeChars = characters.filter(c => c.vrm && c.name)
  const isMultiChar = activeChars.length >= 2

  let userPrompt
  if (isMultiChar) {
    const charNames = activeChars.map(c => c.name).join('と')
    userPrompt = `${timeContext}です。
${charNames}の2人で「${topic.theme}」について「${topic.hook}」をきっかけに掛け合いトークをしてください。
各セリフの前に [char: キャラ名] を付けてください。2人が交互に話してください。${historyHint}`
  } else {
    userPrompt = `${timeContext}です。
「${topic.theme}」について、「${topic.hook}」をきっかけに5分程度のフリートークをしてください。
自分の実体験のように具体的に語ってください。${historyHint}`
  }

  try {
    status.textContent = '🤔 話題を考え中...'

    let systemPrompt
    if (isMultiChar) {
      // 2キャラ: 各キャラの設定をシステムプロンプトに含める
      const charDescriptions = activeChars.map(c => {
        const desc = c.prompt || ''
        return `【${c.name}】${desc || '（設定なし）'}`
      }).join('\n')
      systemPrompt = `あなたは2人のキャラクターの掛け合いトーク台本を書きます。\n\n${charDescriptions}\n` + FREETALK_RULES + `\n\n追加ルール: 各セリフの前に [char: キャラ名] を付けて話者を明示してください。`
    } else {
      const characterPrompt = await getCharacterPrompt()
      systemPrompt = characterPrompt + FREETALK_RULES
    }

    const content = await callLLM([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ], { maxTokens: 2000, temperature: 0.9 })

    if (!content) return generateFallbackFreeTalk(topic)

    console.log('FreeTalk generated:', content.length, 'chars')
    return content
  } catch (e) {
    console.error('FreeTalk generation error:', e)
    return generateFallbackFreeTalk(topic)
  }
}

/**
 * API なしのフォールバック（テンプレートベース）
 */
function generateFallbackFreeTalk(topic) {
  const activeChars = characters.filter(c => c.vrm && c.name)
  const isMultiChar = activeChars.length >= 2

  if (isMultiChar) {
    const c1 = activeChars[0].name
    const c2 = activeChars[1].name
    return `[char: ${c1}]\n[happy,0.8] ねえねえ、${topic.theme}の話しようよ！\n[char: ${c2}]\n[neutral,0.7] えー、${topic.theme}？いいよ、なになに？\n[char: ${c1}]\n[happy,0.7] ${topic.hook}があったんすよ！\n[char: ${c2}]\n[surprised,0.8] マジで！？それすごいね！\n[char: ${c1}]\n[neutral,0.7] いやーでも${topic.theme}って面白いっすよね。\n[char: ${c2}]\n[happy,0.7] うんうん、わかるわかる！`
  }

  const intros = [
    `[happy,0.8] あ、そうだ。${topic.hook}をしたいんすけど。`,
    `[neutral,0.7] ねえ先輩、聞いてくださいよ。${topic.hook}があってさ。`,
    `[happy,0.7] 今日はね、ちょっと${topic.theme}の話をしようかなって。`,
  ]
  const outros = [
    `[relaxed,0.7] まあそんな感じっす。先輩方も気をつけてっすよ。`,
    `[happy,0.8] あはは、なんか変な話しちゃったっすね。まあいいか。`,
    `[neutral,0.7] ……って思ったんすけど、先輩方はどう思います？`,
  ]
  const mid = `[neutral,0.7] いやーでもマジで${topic.theme}って面白いっすよね。\n[surprised,0.6] 先輩方もそういう経験ないっすか？あたし結構あるんすけど。`

  return `${intros[Math.floor(Math.random() * intros.length)]}\n${mid}\n${outros[Math.floor(Math.random() * outros.length)]}`
}

/**
 * 生成テキストをダイアログ配列にパース
 */
function parseFreeTalkOutput(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0)
  const dialogues = []
  let currentChar = null

  for (let line of lines) {
    // [char: xxx] or [cha: xxx] タグ（行頭、インライン両対応）
    const charMatch = line.match(/^\[cha(?:r)?:\s*(.+?)\]\s*(.*)$/)
    if (charMatch) {
      currentChar = charMatch[1].trim()
      line = charMatch[2].trim()  // タグの後ろのテキストを処理
      if (!line) continue  // タグのみの行はスキップ
    }

    // テキスト内に残った [char: xxx] も除去
    line = line.replace(/\[cha(?:r)?:\s*.+?\]\s*/g, '').trim()
    if (!line) continue

    const tagMatch = line.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/)
    if (tagMatch) {
      dialogues.push({
        emotion: tagMatch[1],
        intensity: parseFloat(tagMatch[2]),
        text: cleanTextForSpeech(tagMatch[3]),
        character: currentChar
      })
    } else if (line.length > 5 && !line.startsWith('#') && !line.startsWith('---')) {
      dialogues.push({
        emotion: 'neutral',
        intensity: 0.7,
        text: cleanTextForSpeech(line),
        character: currentChar,
        _untagged: true
      })
    }
  }

  return dialogues
}

/**
 * character未設定のダイアログに交互にキャラを割り当て（2キャラ対応）
 */
function assignCharactersToDialogues(dialogues) {
  const activeChars = characters.filter(c => c.vrm && c.name)
  if (activeChars.length < 2) return dialogues

  // すでに全行にcharacterが設定されていればそのまま
  if (dialogues.every(d => d.character)) return dialogues

  // 交互割り当て
  let charIndex = 0
  for (const d of dialogues) {
    if (!d.character) {
      d.character = activeChars[charIndex].name
      charIndex = (charIndex + 1) % activeChars.length
    }
  }
  console.log('🎭 Auto-assigned characters:', dialogues.map(d => `${d.character}:"${d.text.slice(0,15)}"`))
  return dialogues
}

/**
 * フリートーク実行
 */
// プリフェッチキュー
const PREFETCH_QUEUE_SIZE = 2
let freeTalkQueue = []  // { topic, dialogues }[]
let prefetchEnabled = false
let prefetchRunning = false

async function prefetchFreeTalk() {
  if (!prefetchEnabled || prefetchRunning) return
  if (freeTalkQueue.length >= PREFETCH_QUEUE_SIZE) return

  prefetchRunning = true
  try {
    while (freeTalkQueue.length < PREFETCH_QUEUE_SIZE) {
      const topic = pickUniqueFreeTalkTopic()
      console.log('Prefetch generating:', topic.theme)
      const text = await generateFreeTalkText(topic)
      if (!text) break

      let dialogues = parseFreeTalkOutput(text)
      if (dialogues.some(d => d._untagged)) {
        dialogues = fallbackSplit(dialogues)
      }
      dialogues = assignCharactersToDialogues(dialogues)

      freeTalkQueue.push({ topic, dialogues })
      console.log(`Prefetch queue: ${freeTalkQueue.length}/${PREFETCH_QUEUE_SIZE}`)
    }
  } catch (e) {
    console.error('Prefetch error:', e)
  }
  prefetchRunning = false
}

// プリフェッチ設定の読み込み
chrome.storage.local.get(['prefetchEnabled'], (data) => {
  prefetchEnabled = !!data.prefetchEnabled
  if (prefetchEnabled) prefetchFreeTalk()
})

async function playFreeTalk() {
  if (isPlaying) {
    stopRequested = true
    await sleep(500)
  }

  isPlaying = true
  stopRequested = false

  let topic, dialogues

  // プリフェッチキューから取得 or その場で生成
  if (prefetchEnabled && freeTalkQueue.length > 0) {
    const cached = freeTalkQueue.shift()
    topic = cached.topic
    dialogues = cached.dialogues
    console.log('FreeTalk from cache:', topic.theme, `(remaining: ${freeTalkQueue.length})`)
    // バックグラウンドで補充
    prefetchFreeTalk()
  } else {
    topic = pickUniqueFreeTalkTopic()
    status.textContent = `🤔 「${topic.theme}」について考え中...`
    console.log('FreeTalk generating live:', topic.theme)

    const text = await generateFreeTalkText(topic)
    if (!text) {
      status.textContent = '❌ フリートーク生成に失敗'
      isPlaying = false
      return
    }

    dialogues = parseFreeTalkOutput(text)
    if (dialogues.some(d => d._untagged)) {
      dialogues = fallbackSplit(dialogues)
    }
    dialogues = assignCharactersToDialogues(dialogues)
  }

  status.textContent = `🗣️ フリートーク「${topic.theme}」`

  // 自動録画チェック
  let autoRecording = false
  {
    const arData = await chrome.storage.local.get(['autoRecordMorning'])
    if (arData.autoRecordMorning && !isRecording) {
      await startRecording(true)
      autoRecording = true
    }
  }

  const defaultSpeaker = characters[0]?.speakerId || 38
  await speakPipeline(dialogues, defaultSpeaker, (line, i) => {
    setEmotion(line.emotion, line.intensity)
    const charLabel = line.character ? `${line.character}: ` : ''
    showSubtitle(line.text, `🗣️ ${charLabel}${topic.theme}（${i + 1}/${dialogues.length}）`)
  })

  hideSubtitle()
  setEmotion('neutral')
  showCredits(8000)  // 8秒間クレジット表示
  if (autoRecording) {
    // クレジットが録画に映るよう少し待ってから停止
    await sleep(8500)
    stopRecording()
  }
  status.textContent = `✅ フリートーク「${topic.theme}」完了`
  isPlaying = false
}

// ============================================
// コメント読み上げ（わんコメ HTTP API ポーリング）
// ============================================
const ONECOMME_API_URL = 'http://localhost:11180/api/comments'
const COMMENT_POLL_INTERVAL = 5000  // 5秒間隔
let commentQueue = []
let commentPolling = false
let commentPollTimer = null
const MAX_COMMENT_QUEUE = 30
const COMMENTS_PER_CHECK = 2
const processedCommentIds = new Set()

const COMMENT_INTRO_LINES = [
  'あ、コメント来てるっすね！ありがとうございます！',
  'おっ、コメントいただいてる！見てみましょう。',
  'コメントチェックしましょうか。えーと……',
  'お、先輩方からコメント来てる！嬉しいっす！',
]

const COMMENT_OUTRO_LINES = [
  'コメントありがとうございました！どんどん送ってね！',
  'はい、コメントありがとう！引き続きよろしくっす！',
  'みんなコメントありがとね〜！',
]

async function pollOneCommeComments() {
  try {
    const res = await fetch(ONECOMME_API_URL)
    if (!res.ok) return

    const allComments = await res.json()
    if (!Array.isArray(allComments)) return

    // 初回はIDだけ記録（既存コメントは拾わない）
    if (!commentPolling) {
      commentPolling = true
      for (const item of allComments) {
        const id = item.data?.id || item.id
        if (id) processedCommentIds.add(id)
      }
      console.log('💬 わんコメ接続成功: 既存コメント', allComments.length, '件をスキップ')
      return
    }

    // 新着コメントを検出
    for (const item of allComments) {
      const cd = item.data || item
      const id = cd.id || item.id
      if (!id || processedCommentIds.has(id)) continue

      processedCommentIds.add(id)

      const name = cd.displayName || cd.name || cd.nickname || '名無し'
      const text = cd.comment || cd.message || ''

      if (text && text.length > 0 && !text.startsWith('!') && !text.startsWith('#')) {
        commentQueue.push({
          author: name,
          text: text,
          timestamp: Date.now(),
          id: id,
        })
        if (commentQueue.length > MAX_COMMENT_QUEUE) {
          commentQueue = commentQueue.slice(-MAX_COMMENT_QUEUE)
        }
        console.log('💬 コメント受信:', name + ':', text)
      }
    }

    // 古いID掃除（メモリ対策）
    if (processedCommentIds.size > 500) {
      const arr = [...processedCommentIds]
      processedCommentIds.clear()
      for (const id of arr.slice(-300)) processedCommentIds.add(id)
    }
  } catch (e) {
    // わんコメ未起動時はサイレントに失敗
    commentPollFailCount++
    if (commentPollFailCount === 1) {
      console.log('💬 わんコメ未検出（ポーリング間隔を30秒に変更）')
    }
    if (commentPollFailCount >= 3 && commentPollTimer) {
      clearInterval(commentPollTimer)
      commentPollTimer = setInterval(pollOneCommeComments, 30000)
    }
    return
  }
  // 成功したらカウンタリセット＆間隔を戻す
  if (commentPollFailCount > 0) {
    commentPollFailCount = 0
    if (commentPollTimer) {
      clearInterval(commentPollTimer)
      commentPollTimer = setInterval(pollOneCommeComments, COMMENT_POLL_INTERVAL)
      console.log('💬 わんコメ再接続（ポーリング間隔を' + COMMENT_POLL_INTERVAL / 1000 + '秒に復帰）')
    }
  }
}

let commentPollFailCount = 0

function startCommentPolling() {
  if (commentPollTimer) return
  // 初回即実行
  pollOneCommeComments()
  commentPollTimer = setInterval(() => {
    pollOneCommeComments()
  }, COMMENT_POLL_INTERVAL)
  console.log('💬 コメントポーリング開始（' + COMMENT_POLL_INTERVAL / 1000 + '秒間隔）')
}

function stopCommentPolling() {
  if (commentPollTimer) {
    clearInterval(commentPollTimer)
    commentPollTimer = null
  }
}

let oneCommeLoggedOnce = false
// 起動時にポーリング開始
startCommentPolling()

async function processComments(speaker) {
  if (commentQueue.length === 0) return false

  const comments = commentQueue.splice(0, COMMENTS_PER_CHECK)

  const intro = COMMENT_INTRO_LINES[Math.floor(Math.random() * COMMENT_INTRO_LINES.length)]
  setEmotion('happy', 0.8)
  showSubtitle(intro, '💬 コメント')
  await speak(intro, speaker)
  await sleep(500)

  for (const comment of comments) {
    if (stopRequested) return true

    // コメントにキャラ名が含まれていればそのキャラが応答
    let commentSpeaker = speaker
    const charIdx = findCharacterByName(comment.text)
    if (charIdx >= 0 && characters[charIdx].vrm) {
      setActiveCharacter(charIdx)
      commentSpeaker = characters[charIdx].speakerId || speaker
      console.log(`💬 Comment routed to char ${charIdx}: ${characters[charIdx].name}`)
    } else {
      // デフォルトキャラ（キャラ1）
      setActiveCharacter(0)
    }

    const readText = comment.author + 'さんから。' + comment.text
    setEmotion('neutral', 0.7)
    showSubtitle(readText, '💬 ' + comment.author)
    await speak(readText, commentSpeaker)
    await sleep(300)

    const reply = await generateCommentReply(comment)
    if (reply && !stopRequested) {
      // 感情タグをパース（最初に見つかったものを使う）
      const tagMatch = reply.match(/\[(\w+),\s*([\d.]+)\]/)
      if (tagMatch) {
        setEmotion(tagMatch[1], parseFloat(tagMatch[2]))
      } else {
        setEmotion('happy', 0.7)
      }
      // タグを除去してテキストだけ読み上げ
      const cleanReply = cleanTextForSpeech(reply)
      if (cleanReply) {
        showSubtitle(cleanReply, '💬 返事')
        await speak(cleanReply, commentSpeaker)
      }
      await sleep(500)
    }
  }

  if (comments.length >= 2) {
    const outro = COMMENT_OUTRO_LINES[Math.floor(Math.random() * COMMENT_OUTRO_LINES.length)]
    setEmotion('happy', 0.7)
    showSubtitle(outro, '💬 コメント')
    await speak(outro, speaker)
    await sleep(300)
  }

  hideSubtitle()
  setEmotion('neutral')
  return true
}

async function generateCommentReply(comment) {
  const settings = await chrome.storage.local.get(['llmApiKey', 'llmProvider'])
  const apiKey = settings.llmApiKey
  const provider = settings.llmProvider || 'gemini'
  if (!apiKey && provider !== 'ollama') return generateFallbackReply(comment)

  try {
    const characterPrompt = await getCharacterPrompt()
    const content = await callLLM([
      { role: 'system', content: characterPrompt + '\n' + COMMENT_REPLY_RULES },
      { role: 'user', content: comment.author + 'さんのコメント「' + comment.text + '」に返事してください。' }
    ], { maxTokens: 200, temperature: 0.8 })

    return content || generateFallbackReply(comment)
  } catch (e) {
    return generateFallbackReply(comment)
  }
}

function generateFallbackReply(comment) {
  const replies = [
    '[happy,0.8] ' + comment.author + '先輩、ありがとうっす！',
    '[happy,0.7] おお、' + comment.author + 'さん！コメント嬉しいっす！',
    '[surprised,0.6] ' + comment.author + '先輩、聴いてくれてるんすね！ありがとう！',
    '[relaxed,0.7] ' + comment.author + 'さん、ありがとうございます〜。',
  ]
  return replies[Math.floor(Math.random() * replies.length)]
}

// ============================================
// Setlist Parser & Player
// ============================================
function isSetlist(text) {
  // [type: talk] や [type: script] などがあればセットリスト
  return /\[type:\s*(talk|script|jingle|freetalk|audio|auto-news|auto-weather|auto-today)\]/i.test(text)
}

function parseSetlist(mdText) {
  const lines = mdText.split('\n')
  const meta = {}
  const segments = []
  let inFrontmatter = false
  let frontmatterDone = false
  let currentSegment = null

  for (const line of lines) {
    const trimmed = line.trim()

    // YAML frontmatter
    if (trimmed === '---') {
      if (!inFrontmatter && !frontmatterDone) {
        inFrontmatter = true
        continue
      } else if (inFrontmatter) {
        inFrontmatter = false
        frontmatterDone = true
        continue
      }
    }

    if (inFrontmatter) {
      const match = trimmed.match(/^(\w+):\s*(.+)$/)
      if (match) meta[match[1]] = match[2]
      continue
    }

    // セグメント見出し
    if (trimmed.startsWith('# ')) {
      if (currentSegment) segments.push(currentSegment)
      currentSegment = {
        name: trimmed.slice(2).trim(),
        type: 'talk',
        props: {},
        lines: []
      }
      continue
    }

    if (!currentSegment) continue
    if (!trimmed) continue
    // HTMLコメントをスキップ
    if (trimmed.startsWith('<!--')) continue

    // [key: value] 形式のプロパティ
    const propMatch = trimmed.match(/^\[(\w+):\s*(.+)\]$/)
    if (propMatch) {
      const key = propMatch[1].toLowerCase()
      let value = propMatch[2].trim()
      // 数値変換
      if (/^[\d.]+$/.test(value)) value = parseFloat(value)
      // boolean変換
      if (value === 'true') value = true
      if (value === 'false') value = false
      if (key === 'type') {
        currentSegment.type = value
      } else {
        currentSegment.props[key] = value
      }
      continue
    }

    // ### サブセクション見出し → タイプとして解釈
    if (trimmed.startsWith('### ')) {
      const subType = trimmed.slice(4).trim().toLowerCase()
      if (['talk', 'script', 'freetalk', 'reaction', 'comments'].includes(subType)) {
        // 前のサブセクションを保存して新セグメントを開始
        if (currentSegment.lines.length > 0 || Object.keys(currentSegment.props).length > 0) {
          segments.push(currentSegment)
        }
        currentSegment = {
          name: currentSegment.name || subType,
          type: subType,
          props: { ...currentSegment.props },  // 親セグメントのpropsを継承
          lines: []
        }
      }
      continue
    }

    // テキスト行（talk用）
    currentSegment.lines.push(trimmed)
  }
  if (currentSegment) segments.push(currentSegment)

  console.log('parseSetlist:', { meta, segmentCount: segments.length, segments: segments.map(s => `${s.name} (${s.type})`) })
  return { meta, segments }
}

let lastReadScript = { title: '', text: '' }

async function generateReaction(title, text) {
  // テキストが長い場合は先頭部分のみ送信（トークン節約）
  const truncated = text.length > 2000 ? text.slice(0, 2000) + '……（以下略）' : text

  const userPrompt = `今、「${title}」という怪談を朗読しました。以下がその内容です：

---
${truncated}
---

この怪談についての感想を怪談ちゃんとして語ってください。`

  try {
    const characterPrompt = await getCharacterPrompt()
    const content = await callLLM([
      { role: 'system', content: characterPrompt + REACTION_RULES },
      { role: 'user', content: userPrompt }
    ], { maxTokens: 800, temperature: 0.85 })
    return content
  } catch (e) {
    console.error('Reaction generation error:', e)
    return null
  }
}

function generateFallbackReaction(title) {
  const reactions = [
    `[sad,0.7] はい、ちょっと怖かったっすね……。
[neutral,0.6] 「${title}」、なかなか来るものがあったっす。
[surprised,0.5] 先輩方は大丈夫っすか？背中、気をつけてっすよ。`,
    `[surprised,0.8] いやー「${title}」、マジで怖かったっす。
[sad,0.6] あたしも色々体験してる方だと思うんすけど、こういうのはキツいっす。
[neutral,0.7] 先輩方はどう思いました？`,
    `[neutral,0.7] 「${title}」……独特の雰囲気がありましたね。
[sad,0.5] こういう話を読むと、やっぱり夜は怖くなるっすよね。
[relaxed,0.6] ……気分を変えていきましょうか。`,
  ]
  return reactions[Math.floor(Math.random() * reactions.length)]
}

async function playSetlist(setlist) {
  if (isPlaying) {
    stopRequested = true
    return
  }

  isPlaying = true
  stopRequested = false
  const { meta, segments } = setlist
  const title = meta.title || 'セットリスト'
  const globalSpeaker = meta.speaker ? parseInt(meta.speaker) : 38
  const globalSpeed = meta.speed ? parseFloat(meta.speed) : 0.95
  currentSpeedScale = globalSpeed
  const pauseBetween = meta.pause_between ? parseInt(meta.pause_between) : 1000

  // ウィンドウサイズ変更（frontmatter: size: 1080x1920）
  if (meta.size) {
    const sizeMatch = meta.size.match(/(\d+)\s*[x×]\s*(\d+)/i)
    if (sizeMatch) {
      const w = parseInt(sizeMatch[1])
      const h = parseInt(sizeMatch[2])
      chrome.runtime.sendMessage({ action: 'resize-window', width: w, height: h })
      if (h > w) document.body.classList.add('vertical-mode')
      console.log(`📐 ウィンドウリサイズ: ${w}×${h}${h > w ? ' (縦動画モード)' : ''}`)
    }
  }

  // 開始ディレイ（OBS切替用）
  const delayData = await chrome.storage.local.get(['startDelay'])
  const startDelay = delayData.startDelay || 0
  if (startDelay > 0) {
    for (let i = startDelay; i > 0; i--) {
      if (stopRequested) { isPlaying = false; return }
      status.textContent = `⏱️ 「${title}」${i}秒後に開始…`
      await sleep(1000)
    }
  }

  // 自動録画チェック
  let autoRecording = false
  try {
    const arData = await chrome.storage.local.get(['autoRecordMorning'])
    if (arData.autoRecordMorning && !isRecording) {
      status.textContent = '📹 自動録画開始...'
      await startRecording(true)
      await sleep(1000)
      autoRecording = true
    }
  } catch {}

  // 録画中であればフェードイン開始 + スプラッシュ画像
  if (isRecording && recordFadeAlpha > 0) {
    if (meta.splash) {
      recordSplashImg = new Image()
      recordSplashImg.crossOrigin = 'anonymous'
      recordSplashImg.src = meta.splash
      await new Promise(r => {
        recordSplashImg.onload = r
        recordSplashImg.onerror = r
        setTimeout(r, 1000)
      })
    } else {
      recordSplashImg = null
    }
    recordFadeStart = Date.now()
  }

  status.textContent = `📻 「${title}」放送開始`

  for (let si = 0; si < segments.length; si++) {
    if (stopRequested) { cleanup(); return }

    const seg = segments[si]
    const speaker = seg.props.speaker || globalSpeaker
    status.textContent = `📻 ${title}（${si + 1}/${segments.length}）${seg.name}`

    // セグメント共通: BGM制御
    if (seg.props.bgm) {
      if (seg.props.bgm === 'none' || seg.props.bgm === 'off' || seg.props.bgm === 'stop') {
        await stopBGM()
      } else {
        const bgmUrl = await resolveMediaURL(seg.props.bgm)
        if (bgmUrl) {
          await startBGM(bgmUrl, seg.props.bgmvolume || seg.props.bgmVolume || seg.props.volume || 0.25)
        }
      }
    } else if (seg.props.bgmstop || seg.props.bgmStop) {
      await stopBGM()
    }

    switch (seg.type) {
      case 'talk': {
        // 表情設定
        if (seg.props.emotion) setEmotion(seg.props.emotion, seg.props.intensity || 0.8)
        // 背景変更
        if (seg.props.bg) {
          const bgUrl = await resolveMediaURL(seg.props.bg)
          if (bgUrl) changeBackground(bgUrl)
        }
        // フロート画像（図表・スライド）
        if (seg.props.float) {
          if (seg.props.float === 'none' || seg.props.float === 'off') {
            hideFloat()
          } else {
            const floatUrl = await resolveMediaURL(seg.props.float)
            if (floatUrl) showFloat(floatUrl)
          }
        }

        // テキスト再生
        const talkScript = { meta: { title: seg.name }, dialogues: [] }
        for (const line of seg.lines) {
          const tagMatch = line.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/)
          if (tagMatch) {
            const { display, speech } = splitDisplaySpeech(tagMatch[3])
            talkScript.dialogues.push({
              emotion: tagMatch[1],
              intensity: parseFloat(tagMatch[2]),
              text: display,
              speechText: speech
            })
          } else {
            const { display, speech } = splitDisplaySpeech(line)
            if (display) {
              const hasExplicitReading = (speech !== display)
              talkScript.dialogues.push({
                emotion: seg.props.emotion || 'neutral',
                intensity: seg.props.intensity || 0.75,
                text: display,
                speechText: speech,
                _untagged: !hasExplicitReading
              })
            }
          }
        }

        // AI前処理 + 再生
        const processedDialogues = await preprocessWithAI(talkScript.dialogues)
        const talkStopped = await speakPipeline(processedDialogues, speaker, (line, i) => {
          setEmotion(line.emotion, line.intensity)
          showSubtitle(line.text, `${seg.name}（${i + 1}/${processedDialogues.length}）`)
        })
        if (talkStopped) { cleanup(); return }
        hideSubtitle()
        break
      }

      case 'script': {
        // 外部台本ファイルを読み込み
        let filePath = seg.props.file
        if (!filePath) break

        try {
          // 拡張子がない → フォルダ指定 → 中からランダム選択
          if (!filePath.match(/\.\w+$/)) {
            const folder = filePath.replace(/\/$/, '')
            let fileList = []

            // 1. メモリ Map から folder/ プレフィックスのファイルを検索
            for (const key of localFiles.keys()) {
              if (key.startsWith(folder + '/') && key.endsWith('.md')) {
                const basename = key.slice(folder.length + 1)
                if (!fileList.includes(basename)) fileList.push(basename)
              }
            }

            // 2. Extension 内 index.json から取得（あれば）
            try {
              const indexUrl = chrome.runtime.getURL(`viewer/${folder}/index.json`)
              const indexRes = await fetch(indexUrl)
              if (indexRes.ok) {
                const staticList = await indexRes.json()
                if (Array.isArray(staticList)) {
                  for (const f of staticList) {
                    if (!fileList.includes(f)) fileList.push(f)
                  }
                }
              }
            } catch {}

            console.log(`📖 ${folder}: fileList =`, fileList, 'localFiles keys:', [...localFiles.keys()])

            if (fileList.length === 0) throw new Error(`${folder} に朗読ファイルがありません`)

            // 既読トラッキング
            const storageKey = 'readScripts_' + folder
            const stored = await chrome.storage.local.get([storageKey, 'readOrder'])
            let readFiles = stored[storageKey] || []
            const readOrder = stored.readOrder || 'random'

            // ファイル名順にソート
            fileList.sort()

            let chosen
            if (readOrder === 'sequential') {
              // ファイル名順: 既読数 = 次のインデックス
              let nextIndex = readFiles.length % fileList.length
              if (readFiles.length >= fileList.length) {
                readFiles = []
                nextIndex = 0
                console.log(`📖 ${folder}: 全${fileList.length}話読了 → リセット`)
              }
              chosen = fileList[nextIndex]
              console.log(`📖 順番読み: ${chosen}（${nextIndex + 1}/${fileList.length}）`)
            } else {
              // ランダム: 未読から選ぶ
              let unread = fileList.filter(f => !readFiles.includes(f))
              if (unread.length === 0) {
                readFiles = []
                unread = fileList
                console.log(`📖 ${folder}: 全${fileList.length}話読了 → リセット`)
              }
              chosen = unread[Math.floor(Math.random() * unread.length)]
              console.log(`📖 ランダム選択: ${chosen}（残り${unread.length - 1}話）`)
            }

            filePath = folder + '/' + chosen

            // 既読に追加
            readFiles.push(chosen)
            chrome.storage.local.set({ [storageKey]: readFiles })
          }

          const url = await resolveMediaURL(filePath)
          if (!url) throw new Error(`${filePath} が見つかりません`)
          const res = await fetch(url)
          const text = await res.text()
          const script = parseScript(text)

          // タイトル決定: 台本のメタ → セグメント名 → ファイル名
          const rawName = filePath.split('/').pop().replace(/\.\w+$/, '')
          const cleanName = rawName.replace(/^\d+[_\-]/, '')
          const title = script.meta.title || seg.name || cleanName
          script.meta.title = title

          // タイトル読み上げ
          if (stopRequested) { cleanup(); return }
          setEmotion('neutral', 0.7)
          showSubtitle(title, '📖 朗読')
          await speak(title, speaker)
          await sleep(800)

          // [ai: true] 指定時のみAI前処理（要約・感情タグ付与）
          const dialogues = seg.props.ai
            ? await preprocessWithAI(script.dialogues)
            : script.dialogues
          const scriptStopped = await speakPipeline(dialogues, speaker, (line, i) => {
            setEmotion(line.emotion, line.intensity)
            showSubtitle(line.text, `${script.meta.title}（${i + 1}/${dialogues.length}）`)
          })
          if (scriptStopped) { cleanup(); return }
          hideSubtitle()

          // 朗読内容を保存（reaction セグメントで参照）
          lastReadScript = {
            title: script.meta.title || '',
            text: script.dialogues.map(d => d.text).join('\n')
          }
        } catch (e) {
          console.error(`Script load error: ${filePath}`, e)
          status.textContent = `⚠️ ${filePath} 読み込み失敗`
          await sleep(2000)
        }
        break
      }

      case 'jingle': {
        const audioFile = seg.props.file
        if (!audioFile) break
        // keepBgm指定がなければBGM停止（フェード完了まで待つ）
        if (bgmSource && !seg.props.keepbgm && !seg.props.keepBgm) {
          await stopBGM()
        }

        const jingleOpts = {
          audio: await resolveMediaURL(audioFile),
          overlay: seg.props.overlay ? await resolveMediaURL(seg.props.overlay) : null,
          duration: seg.props.duration,
          fadeOut: seg.props.fadeout || seg.props.fadeOut || 1.5,
          speakAt: seg.props.speakat || seg.props.speakAt,
          speakText: seg.props.speaktext || seg.props.speakText,
          speakSpeaker: seg.props.speakspeaker || seg.props.speakSpeaker || speaker,
          duckTo: seg.props.duckto || seg.props.duckTo || 0.15
        }

        await playJingle(jingleOpts)
        break
      }

      case 'freetalk': {
        // AI雑談セグメント
        const topic = seg.props.topic
          ? { theme: seg.props.topic, hook: seg.props.hook || seg.props.topic }
          : pickUniqueFreeTalkTopic()

        status.textContent = `🤔 「${topic.theme}」について考え中...`
        const ftText = await generateFreeTalkText(topic)
        if (!ftText || stopRequested) break

        let ftDialogues = parseFreeTalkOutput(ftText)
        if (ftDialogues.some(d => d._untagged)) {
          ftDialogues = fallbackSplit(ftDialogues)
        }

        const ftStopped = await speakPipeline(ftDialogues, speaker, (line, i) => {
          setEmotion(line.emotion, line.intensity)
          showSubtitle(line.text, `🗣️ ${topic.theme}（${i + 1}/${ftDialogues.length}）`)
        })
        if (ftStopped) { cleanup(); return }
        hideSubtitle()
        break;
      }

      case 'reaction': {
        // 直前の朗読に対するAI感想
        if (!lastReadScript.title) {
          console.log('Reaction: No previous script to react to')
          break
        }

        if (seg.props.emotion) setEmotion(seg.props.emotion, seg.props.intensity || 0.7)

        status.textContent = `💭 「${lastReadScript.title}」の感想を考え中...`
        const reactionText = await generateReaction(lastReadScript.title, lastReadScript.text)
        const rawText = reactionText || generateFallbackReaction(lastReadScript.title)
        if (stopRequested) break

        let reactionDialogues = parseFreeTalkOutput(rawText)
        if (reactionDialogues.some(d => d._untagged)) {
          reactionDialogues = fallbackSplit(reactionDialogues)
        }

        status.textContent = `💭 「${lastReadScript.title}」の感想`
        const reactionStopped = await speakPipeline(reactionDialogues, speaker, (line, i) => {
          setEmotion(line.emotion, line.intensity)
          showSubtitle(line.text, `💭 感想（${i + 1}/${reactionDialogues.length}）`)
        })
        if (reactionStopped) { cleanup(); return }
        hideSubtitle()
        break;
      }

      case 'comments': {
        // 明示的なコメント読み上げセグメント
        status.textContent = '💬 コメントチェック中...'
        // 最新をポーリング
        await pollOneCommeComments()

        if (commentQueue.length > 0 && !stopRequested) {
          await processComments(speaker)
        } else {
          // コメントなし → 短いメッセージで飛ばす
          if (!stopRequested) {
            setEmotion('neutral', 0.6)
            showSubtitle('コメントはまだ来てないっすね。どんどん送ってね！', '💬')
            await speak('コメントはまだ来てないっすね。どんどん送ってね！', speaker)
            await sleep(500)
            hideSubtitle()
          }
        }
        break;
      }

      // === 動的コンテンツセグメント ===
      case 'auto-news': {
        status.textContent = '📰 ニュース取得中...'
        const news = await fetchNewsForShow()
        if (stopRequested) break
        if (news.length === 0) {
          showSubtitle('ニュースの取得に失敗しました', '📰')
          await speak('ニュースの取得に失敗しました', speaker)
          break
        }
        const newsPrompt = `あなたはラジオパーソナリティ。以下のニュースを自然な口語体で紹介して。各ニュースに感想も付けて。1行1文で。\n\n${news.map((n, i) => `${i + 1}. ${n}`).join('\n')}`
        const newsScript = await callLLM([{ role: 'user', content: newsPrompt }], { maxTokens: 3000, temperature: 0.8 })
        if (stopRequested) break
        const newsDialogues = newsScript ? parseScript(`---\n---\n${newsScript}`).dialogues : []
        if (newsDialogues.length > 0) {
          status.textContent = `📰 ニュース（${newsDialogues.length}行）`
          const newsStopped = await speakPipeline(newsDialogues, speaker, (line, i) => {
            setEmotion(line.emotion, line.intensity)
            showSubtitle(line.text, `📰 ニュース（${i + 1}/${newsDialogues.length}）`)
          })
          if (newsStopped) { cleanup(); return }
        }
        hideSubtitle()
        break
      }

      case 'auto-weather': {
        status.textContent = '🌤️ 天気取得中...'
        const weather = await fetchWeatherForShow()
        if (stopRequested) break
        if (weather.length === 0) {
          showSubtitle('天気情報の取得に失敗しました', '🌤️')
          await speak('天気情報の取得に失敗しました', speaker)
          break
        }
        const weatherData = weather.map(w => `${w.area}（${w.city}）: ${w.telop} 最高${w.maxTemp}°C/最低${w.minTemp}°C${w.rainChance ? ' 降水確率' + w.rainChance : ''}`).join('\n')
        const weatherPrompt = `あなたはラジオの天気予報担当。以下の天気を自然な口語体で紹介して。各地域に傘や服装のアドバイスも付けて。1行1文で。\n\n${weatherData}`
        const weatherScript = await callLLM([{ role: 'user', content: weatherPrompt }], { maxTokens: 3000, temperature: 0.8 })
        if (stopRequested) break
        const weatherDialogues = weatherScript ? parseScript(`---\n---\n${weatherScript}`).dialogues : []
        if (weatherDialogues.length > 0) {
          status.textContent = `🌤️ 天気予報（${weatherDialogues.length}行）`
          const weatherStopped = await speakPipeline(weatherDialogues, speaker, (line, i) => {
            setEmotion(line.emotion, line.intensity)
            showSubtitle(line.text, `🌤️ 天気予報（${i + 1}/${weatherDialogues.length}）`)
          })
          if (weatherStopped) { cleanup(); return }
        }
        hideSubtitle()
        break
      }

      case 'auto-today': {
        status.textContent = '📅 今日は何の日を取得中...'
        const history = await fetchTodayInHistoryForShow()
        if (stopRequested) break
        if (history.length === 0) {
          showSubtitle('今日は何の日の情報が取得できませんでした', '📅')
          await speak('今日は何の日の情報が取得できませんでした', speaker)
          break
        }
        const todayPrompt = `あなたはラジオパーソナリティ。以下の「今日は何の日」情報を自然な口語体で楽しく紹介して。1行1文で。\n\n${history.join('\n')}`
        const todayScript = await callLLM([{ role: 'user', content: todayPrompt }], { maxTokens: 2000, temperature: 0.8 })
        if (stopRequested) break
        const todayDialogues = todayScript ? parseScript(`---\n---\n${todayScript}`).dialogues : []
        if (todayDialogues.length > 0) {
          status.textContent = `📅 今日は何の日（${todayDialogues.length}行）`
          const todayStopped = await speakPipeline(todayDialogues, speaker, (line, i) => {
            setEmotion(line.emotion, line.intensity)
            showSubtitle(line.text, `📅 今日は何の日（${i + 1}/${todayDialogues.length}）`)
          })
          if (todayStopped) { cleanup(); return }
        }
        hideSubtitle()
        break
      }
    }

    // セグメント終了: BGM停止は次のセグメント開始時に行うのでここでは何もしない

    // セグメント間の間 + コメントチェック
    if (si < segments.length - 1 && !stopRequested) {
      setEmotion('neutral')
      await sleep(pauseBetween)

      // commentsセグメントが無いセットリストでのみ自動チェック
      const hasCommentsSegment = segments.some(s => s.type === 'comments')
      if (!hasCommentsSegment && commentQueue.length > 0 && !stopRequested) {
        await processComments(globalSpeaker)
        await sleep(500)
      }
    }
  }

  // 録画中なら1周で自動停止（ループ再生は録画停止後に続行）
  if (isRecording) {
    await sleep(2000) // エンディングの余韻
    stopRecording()
  }

  // ループ対応 — loop: true [waitMs]
  const loopMatch = String(meta.loop || '').match(/true\s*(\d+)?/i)
  if (loopMatch || meta.loop === true) {
    if (!stopRequested) {
      const loopWait = loopMatch?.[1] ? parseInt(loopMatch[1]) : 1000
      console.log(`Setlist: loop restart in ${loopWait}ms`)
      await sleep(loopWait)
      isPlaying = false
      return playSetlist(setlist)
    }
  }

  hideSubtitle()
  setEmotion('neutral')
  status.textContent = `✅ 「${title}」放送終了`
  isPlaying = false

  function cleanup() {
    hideSubtitle()
    hideFloat()
    setEmotion('neutral')
    stopBGM()
    document.body.classList.remove('vertical-mode')
    status.textContent = '⏹️ 放送停止'
    isPlaying = false
    stopRequested = false
  }
}

// ============================================
// Background
// ============================================
function changeBackground(imageUrl) {
  document.getElementById('bg-layer').style.backgroundImage = `url('${imageUrl}')`
}

// ============================================
// フロート画像（図表・スライド表示）
// ============================================
function showFloat(imageUrl) {
  const overlay = document.getElementById('float-overlay')
  const img = document.getElementById('float-image')
  if (!overlay || !img) return
  img.crossOrigin = 'anonymous'
  img.src = imageUrl
  img.onload = () => {
    overlay.classList.add('visible')
    console.log('🖼️ Float shown:', imageUrl)
  }
  img.onerror = () => {
    console.warn('⚠️ Float image load failed:', imageUrl)
  }
}

function hideFloat() {
  const overlay = document.getElementById('float-overlay')
  if (overlay) {
    overlay.classList.remove('visible')
    console.log('🖼️ Float hidden')
  }
}

// ============================================
// BGM Loop Player
// ============================================
let cachedReadingsList = null
let bgmSource = null
let bgmGain = null
let bgmBaseVolume = 0.3  // 通常時の音量
const BGM_DUCK_VOLUME = 0.08  // 発話中の音量
const BGM_FADE_MS = 500  // フェード時間

async function startBGM(audioUrl, volume = 0.3) {
  await stopBGM()  // フェード完了を待ってから新規開始

  if (audioCtx.state === 'suspended') await audioCtx.resume()

  try {
    const res = await fetch(audioUrl)
    if (!res.ok) {
      console.error('BGM fetch failed:', res.status, audioUrl)
      return
    }
    const arrayBuffer = await res.arrayBuffer()
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)

    bgmGain = audioCtx.createGain()
    bgmGain.gain.value = 0  // フェードインするため0から開始
    bgmGain.connect(masterGain)

    bgmSource = audioCtx.createBufferSource()
    bgmSource.buffer = audioBuffer
    bgmSource.loop = true
    bgmSource.connect(bgmGain)
    bgmSource.start()

    // フェードイン
    bgmBaseVolume = volume
    bgmGain.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + BGM_FADE_MS / 1000)

    console.log('BGM started:', audioUrl, 'volume:', volume)
  } catch (e) {
    console.error('BGM start error:', e, 'url:', audioUrl)
    status.textContent = `❌ BGM読み込み失敗: ${e.message}`
  }
}

async function stopBGM() {
  if (!bgmSource) return

  const src = bgmSource
  const gain = bgmGain
  bgmSource = null
  bgmGain = null

  try {
    if (gain) {
      const now = audioCtx.currentTime
      gain.gain.setValueAtTime(gain.gain.value, now)
      gain.gain.linearRampToValueAtTime(0, now + BGM_FADE_MS / 1000)
    }
    await new Promise(resolve => {
      setTimeout(() => {
        try { src.stop() } catch {}
        resolve()
      }, BGM_FADE_MS)
    })
  } catch {
    try { src.stop() } catch {}
  }
  console.log('BGM stopped')
}

function setBGMVolume(volume) {
  bgmBaseVolume = volume
  if (bgmGain) {
    const now = audioCtx.currentTime
    bgmGain.gain.setValueAtTime(bgmGain.gain.value, now)
    bgmGain.gain.linearRampToValueAtTime(volume, now + 0.3)
  }
}

// 発話中のBGMダッキング
function duckBGM() {
  if (!bgmGain) return
  const now = audioCtx.currentTime
  bgmGain.gain.setValueAtTime(bgmGain.gain.value, now)
  bgmGain.gain.linearRampToValueAtTime(BGM_DUCK_VOLUME, now + 0.3)
}

function unduckBGM() {
  if (!bgmGain) return
  const now = audioCtx.currentTime
  bgmGain.gain.setValueAtTime(bgmGain.gain.value, now)
  bgmGain.gain.linearRampToValueAtTime(bgmBaseVolume, now + 0.5)
}

// ============================================
// Jingle（ジングル再生 + オーバーレイ）
// ============================================
const jingleOverlay = document.getElementById('jingle-overlay')
const jingleImage = document.getElementById('jingle-image')
let dismissOverlayTimer = null

/**
 * ジングル再生
 * @param {Object} opts
 * @param {string} opts.audio      - 音声ファイルURL
 * @param {string} opts.overlay    - オーバーレイ画像URL（省略可）
 * @param {number} opts.duration   - 再生秒数（省略=最後まで再生）
 * @param {number} opts.fadeOut    - フェードアウト秒数（デフォルト: 1.5）
 * @param {number} opts.speakAt   - 発話開始タイミング秒（省略=発話なし）
 * @param {string} opts.speakText  - 発話テキスト
 * @param {number} opts.speakSpeaker - VOICEVOX 話者ID（デフォルト: 38）
 * @param {number} opts.duckTo    - 発話中のBGM音量 0.0-1.0（デフォルト: 0.15）
 */
async function playJingle(opts) {
  // 後方互換: playJingle(audioUrl, overlayImageUrl)
  if (typeof opts === 'string') {
    opts = { audio: arguments[0], overlay: arguments[1] }
  }

  const {
    audio: audioUrl,
    overlay: overlayImageUrl,
    duration,
    fadeOut = 1.5,
    speakAt,
    speakText,
    speakSpeaker = 38,
    duckTo = 0.15
  } = opts

  if (!audioUrl) return

  if (audioCtx.state === 'suspended') await audioCtx.resume()

  status.textContent = '🎵 ジングル再生中...'

  // オーバーレイ画像を表示
  if (overlayImageUrl) {
    // 前回の dismissOverlay タイマーをキャンセル
    if (dismissOverlayTimer) {
      clearTimeout(dismissOverlayTimer)
      dismissOverlayTimer = null
    }
    // 完全リセット → 画像ロード後に表示
    jingleOverlay.style.transition = 'none'
    jingleOverlay.style.opacity = '0'
    jingleOverlay.style.display = 'flex'
    jingleImage.src = ''

    await new Promise((resolve) => {
      jingleImage.onload = resolve
      jingleImage.onerror = resolve
      jingleImage.src = overlayImageUrl
      // キャッシュ済みの場合 onload が発火しないことがある
      if (jingleImage.complete) resolve()
    })

    // フェードイン
    jingleOverlay.style.transition = 'opacity 0.5s ease'
    void jingleOverlay.offsetHeight
    jingleOverlay.style.opacity = '1'
  }

  try {
    let audioBuffer
    try {
      const res = await fetch(audioUrl)
      const arrayBuffer = await res.arrayBuffer()
      audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)
    } catch (fetchErr) {
      // blob URL の fetch 失敗時: Audio 要素でフォールバック再生
      console.warn('🎵 fetch失敗、Audio要素で再生:', fetchErr.message)
      const audio = new Audio(audioUrl)
      audio.volume = 1.0
      await new Promise((resolve) => {
        audio.onended = resolve
        audio.onerror = () => { console.warn('🎵 ジングル再生失敗'); resolve() }
        audio.play().catch(() => resolve())
      })
      return
    }

    // GainNode でボリューム制御（フェードアウト・ダッキング用）
    const gainNode = audioCtx.createGain()
    gainNode.gain.value = 1.0

    const source = audioCtx.createBufferSource()
    source.buffer = audioBuffer
    source.connect(gainNode)
    gainNode.connect(masterGain)

    const startTime = audioCtx.currentTime

    return new Promise((resolve) => {
      // オーバーレイを閉じる共通処理
      function dismissOverlay() {
        jingleOverlay.style.opacity = '0'
        dismissOverlayTimer = setTimeout(() => {
          jingleOverlay.style.display = 'none'
          jingleImage.src = ''
          status.textContent = ''
          dismissOverlayTimer = null
        }, 600)
      }

      // 再生終了時
      source.onended = () => {
        dismissOverlay()
        resolve()
      }

      source.start()

      // 指定秒数でフェードアウト停止
      if (duration && duration > 0) {
        const fadeStartAt = Math.max(0, duration - fadeOut)
        setTimeout(() => {
          // 音量をフェードアウト
          const now = audioCtx.currentTime
          gainNode.gain.setValueAtTime(gainNode.gain.value, now)
          gainNode.gain.linearRampToValueAtTime(0, now + fadeOut)
          // フェード完了後に停止
          setTimeout(() => {
            try { source.stop() } catch {}
          }, fadeOut * 1000)
        }, fadeStartAt * 1000)
      }

      // ジングル中の発話（BGMダッキング付き）
      if (speakAt !== undefined && speakText) {
        setTimeout(async () => {
          // BGM音量を下げる（ダッキング）
          const now = audioCtx.currentTime
          gainNode.gain.setValueAtTime(gainNode.gain.value, now)
          gainNode.gain.linearRampToValueAtTime(duckTo, now + 0.3)

          // 字幕表示 + 発話
          showSubtitle(speakText, '🎙️')
          await speak(speakText, speakSpeaker)
          hideSubtitle()

          // BGM音量を戻す
          const now2 = audioCtx.currentTime
          gainNode.gain.setValueAtTime(duckTo, now2)
          gainNode.gain.linearRampToValueAtTime(1.0, now2 + 0.5)
        }, speakAt * 1000)
      }
    })

  } catch (e) {
    console.error('Jingle playback error:', e)
    jingleOverlay.style.display = 'none'
    jingleOverlay.classList.remove('visible', 'fade-out')
    status.textContent = `❌ ジングル再生失敗: ${e.message}`
  }
}

// ============================================
// Idle Animation（揺れ + 瞬き）
// ============================================
let elapsedTime = 0

// 瞬き: キャラごとの状態を初期化するヘルパー
function ensureBlinkState(ch) {
  if (ch._blink) return ch._blink
  ch._blink = {
    timer: Math.random() * 3,  // 初期タイミングをランダム化
    nextAt: 2 + Math.random() * 4,
    phase: 0,
    value: 0
  }
  return ch._blink
}

const BLINK_CLOSE_SPEED = 12
const BLINK_OPEN_SPEED = 6

function updateBlinkForChar(ch, delta) {
  if (!ch.vrm) return
  const b = ensureBlinkState(ch)

  b.timer += delta
  if (b.phase === 0) {
    if (b.timer >= b.nextAt) {
      b.phase = 1
      b.timer = 0
    }
  } else if (b.phase === 1) {
    b.value = Math.min(1, b.value + delta * BLINK_CLOSE_SPEED)
    if (b.value >= 1) b.phase = 2
  } else if (b.phase === 2) {
    b.value = Math.max(0, b.value - delta * BLINK_OPEN_SPEED)
    if (b.value <= 0) {
      b.phase = 0
      b.timer = 0
      b.nextAt = 2 + Math.random() * 4
      if (Math.random() < 0.15) b.nextAt = 0.2  // 連続瞬き
    }
  }
  ch.vrm.expressionManager?.setValue('blink', b.value)
}

function updateIdleSway(delta) {
  if (!currentVRM) return

  elapsedTime += delta
  const humanoid = currentVRM.humanoid
  if (!humanoid) return

  // 体の緩やかな揺れ（呼吸感）
  const spine = humanoid.getNormalizedBoneNode('spine')
  if (spine) {
    spine.rotation.z = Math.sin(elapsedTime * 0.8) * 0.008
    spine.rotation.x = Math.sin(elapsedTime * 1.2) * 0.005
  }

  // 頭の微妙な動き
  const head = humanoid.getNormalizedBoneNode('head')
  if (head) {
    head.rotation.y = Math.sin(elapsedTime * 0.5) * 0.015
    head.rotation.z = Math.sin(elapsedTime * 0.7 + 1) * 0.008
  }
}

// ============================================
// Animation Loop
// ============================================
function animate() {
  requestAnimationFrame(animate)

  timer.update()
  const delta = timer.getDelta()

  controls.update()

  // PNGTuber or VRM のリップシンク
  if (pngtuberMode) {
    updateLipSync()
  } else if (currentVRM) {
    updateLipSync()
  }

  // 全キャラクターの更新
  for (let ci = 0; ci < characters.length; ci++) {
    const ch = characters[ci]
    if (!ch.vrm) continue
    const savedVRM = currentVRM
    currentVRM = ch.vrm

    // まばたき（キャラごと独立）
    updateBlinkForChar(ch, delta)

    if (ch.vrm === savedVRM) {
      // アクティブキャラ: idle揺れ
      updateIdleSway(delta)
    } else {
      // 非アクティブキャラ: 少しずれたidle揺れ
      const savedElapsed = elapsedTime
      elapsedTime += ci * 3.7
      updateIdleSway(delta)
      elapsedTime = savedElapsed
    }

    // ===== 再生中リアクション（全キャラ共通） =====
    if (isPlaying) {
      const humanoid = ch.vrm.humanoid
      if (!humanoid) { currentVRM = savedVRM; ch.vrm.update(delta); continue }
      const head = humanoid.getNormalizedBoneNode('head')
      const spine = humanoid.getNormalizedBoneNode('spine')
      const upperChest = humanoid.getNormalizedBoneNode('upperChest')

      // --- 初期化 ---
      if (!ch._reaction) ch._reaction = { type: 'none', timer: 0, intensity: 0, duration: 0 }
      if (ch._nodPhase === undefined) ch._nodPhase = 0
      if (ch._nodTimer === undefined) ch._nodTimer = 2 + Math.random() * 3

      // --- 頷きリアクション（非アクティブ or アクティブでもたまに） ---
      const isActive = ch.vrm === savedVRM
      const nodChance = isActive ? 0.15 : 1.0  // アクティブキャラは15%の確率で頷き
      ch._nodTimer -= delta
      if (ch._nodTimer <= 0 && ch._nodPhase === 0) {
        if (Math.random() < nodChance) {
          ch._nodPhase = 1
          ch._nodTimer = 0.25 + Math.random() * 0.15  // 0.25〜0.4秒
        } else {
          ch._nodTimer = 1.5 + Math.random() * 2
        }
      }
      if (ch._nodPhase === 1 && head) {
        const progress = 1 - ch._nodTimer / 0.3
        head.rotation.x = Math.sin(progress * Math.PI) * 0.08
        ch._nodTimer -= delta
        if (ch._nodTimer <= 0) {
          ch._nodPhase = 0
          ch._nodTimer = isActive ? (3 + Math.random() * 5) : (2 + Math.random() * 4)
        }
      }

      // --- 感情リアクション（setEmotionで設定されたemotionに連動） ---
      const r = ch._reaction
      if (r.timer > 0) {
        r.timer -= delta
        const t = Math.max(0, r.timer)
        const ease = Math.sin((1 - t / r.duration) * Math.PI)  // 0→1→0

        switch (r.type) {
          case 'surprised':
            // 仰け反り + 少し上を向く
            if (spine) spine.rotation.x = -ease * 0.06 * r.intensity
            if (head) head.rotation.x = -ease * 0.04 * r.intensity
            break
          case 'happy':
            // 体を左右に軽く揺らす
            if (spine) spine.rotation.z = Math.sin(t * 12) * 0.03 * ease * r.intensity
            if (upperChest) upperChest.rotation.z = Math.sin(t * 12 + 0.5) * 0.02 * ease * r.intensity
            break
          case 'sad':
            // 少しうつむく
            if (head) head.rotation.x = ease * 0.06 * r.intensity
            if (spine) spine.rotation.x = ease * 0.03 * r.intensity
            break
          case 'angry':
            // 前のめり + 小刻みな震え
            if (spine) spine.rotation.x = ease * 0.04 * r.intensity
            if (head) head.rotation.x = ease * 0.03 * r.intensity + Math.sin(t * 30) * 0.005
            break
        }

        if (r.timer <= 0) r.type = 'none'
      }
    }

    currentVRM = savedVRM
    ch.vrm.update(delta)
    if (ch.mixer) ch.mixer.update(delta)
  }

  // characters未使用時の後方互換（1体のみの旧動作）
  if (!characters[0].vrm && currentVRM) {
    updateBlink(delta)
    updateIdleSway(delta)
    currentVRM.update(delta)
    if (mixer) mixer.update(delta)
  }

  renderer.render(scene, camera)
}
animate()

// ============================================
// Message Handler (ポップアップからの指示を受け取る)
// ============================================
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.action) {
    case 'load-vrm':
      document.getElementById('fileInput').click()
      break
    case 'load-script':
      if (isPlaying) {
        stopRequested = true
      } else {
        document.getElementById('scriptInput').click()
      }
      break
    case 'change-bg':
      document.getElementById('bgInput').click()
      break
    case 'test-speak':
      showSubtitle('こんばんは、怪談ちゃんラジオの時間だよ。今日も怖い話、いきますよ。', 'AITuber Radio')
      speak('こんばんは、怪談ちゃんラジオの時間だよ。今日も怖い話、いきますよ。')
      break
    case 'cycle-emotion':
      cycleEmotion()
      break
    case 'update-tts-settings':
      ttsEngine = msg.ttsEngine || 'voicevox'
      ttsPort = msg.ttsPort || 50021
      ttsModelId = msg.ttsModelId || 0
      console.log(`TTS updated: ${ttsEngine} port:${ttsPort}`)
      checkTTS()
      break
    case 'stop-playback':
      if (isPlaying) stopRequested = true
      stopBGM()
      break
    case 'update-characters':
      // ポップアップからキャラ設定を受信
      if (msg.characters) {
        msg.characters.forEach((ch, i) => {
          if (i < characters.length) {
            characters[i].name = ch.name || ''
            characters[i].speakerId = ch.speakerId || (i === 0 ? 38 : 3)
            characters[i].prompt = ch.prompt || ''
          }
        })
        console.log('🎭 Characters updated:', characters.map(c => `${c.name}(${c.speakerId})`))
      }
      if (msg.spacing !== undefined) charSpacing = msg.spacing
      if (msg.angle !== undefined) charInwardAngle = msg.angle
      repositionCharacters(true)  // カメラは触らない
      break
    case 'load-character-vrm':
      // 指定スロットにVRMを読み込む（既存のhidden inputを使用）
      {
        const slot = msg.slot || 0
        const inputId = `charVRM${slot}Input`
        const input = document.getElementById(inputId)
        if (input) {
          // 一時的にスロット情報を保存
          input.dataset.charName = msg.name || ''
          input.dataset.charSpeakerId = msg.speakerId || (slot === 0 ? 38 : 3)
          input.click()
        }
      }
      break
    case 'get-characters':
      sendResponse({
        characters: characters.map(c => ({
          name: c.name,
          speakerId: c.speakerId,
          hasVRM: !!c.vrm,
          position: c.position
        }))
      })
      return true  // async response
    case 'play-default-setlist':
      loadAndPlayDefaultSetlist()
      break
    case 'generate-morning-show':
      generateMorningShow()
      break
    case 'play-script':
      // ポップアップから台本名を指定して再生
      (async () => {
        if (isPlaying) {
          stopRequested = true
          await sleep(500)
        }
        const data = await chrome.storage.local.get(['availableScripts'])
        const scripts = data.availableScripts || []
        const script = scripts.find(s => s.name === msg.scriptName)
        if (!script) {
          status.textContent = '⚠️ 台本が見つかりません'
          return
        }
        // lastScript に設定（次回のデフォルト再生用）
        await chrome.storage.local.set({ lastScript: script.content, lastScriptName: script.name })
        if (isSetlist(script.content)) {
          const setlist = parseSetlist(script.content)
          status.textContent = `📻 「${setlist.meta.title || script.name}」${setlist.segments.length}セグメント`
          playSetlist(setlist)
        } else {
          const parsed = parseScript(script.content)
          status.textContent = `📖 「${parsed.meta.title || script.name}」${parsed.dialogues.length}行`
          playScript(parsed)
        }
      })()
      break
    case 'save-camera':
      saveCameraPosition()
      break
    case 'reset-camera':
      resetCameraPosition()
      break
    case 'load-folder':
      document.getElementById('folderInput').click()
      break
    case 'load-readings-folder':
      document.getElementById('readingsFolderInput').click()
      break
    case 'load-media-folder':
      document.getElementById('mediaFolderInput').click()
      break
    case 'start-bgm':
      (async () => {
        let url = msg.url
        if (!url && msg.mediaName) {
          url = await resolveMediaURL(msg.mediaName)
        }
        if (url) startBGM(url, msg.volume || 0.3)
      })()
      break
    case 'stop-bgm':
      stopBGM()
      break
    case 'set-bgm-volume':
      setBGMVolume(msg.volume)
      break
    case 'free-talk':
      playFreeTalk()
      break
    case 'toggle-local-chat':
      toggleLocalCommentBox()
      break
    case 'start-prefetch':
      prefetchEnabled = true
      prefetchFreeTalk()
      break
    case 'save-media': {
      (async () => {
        let blob = msg.blob
        if (typeof blob === 'string' && blob.startsWith('data:')) {
          const r = await fetch(blob)
          blob = await r.blob()
        }
        await saveMedia(msg.name, blob, msg.type)
        sendResponse({ ok: true })
      })()
      return true
    }
    case 'list-media':
      listMedia().then(files => sendResponse({ files }))
      return true
    case 'delete-media':
      deleteMedia(msg.name).then(() => sendResponse({ ok: true }))
      return true
    case 'get-status':
      sendResponse({ isPlaying, hasVRM: !!currentVRM, hasBGM: !!bgmSource })
      return true
    case 'get-file-list': {
      const readings = []
      const media = []
      for (const key of localFiles.keys()) {
        if (key.startsWith('readings/')) readings.push(key.slice('readings/'.length))
        else if (key.startsWith('media/')) media.push(key.slice('media/'.length))
      }
      readings.sort()
      media.sort()
      sendResponse({ readings, media })
      return true
    }
    case 'refresh-readings':
      (async () => {
        try {
          const fileList = []

          // 1. Extension 内 index.json
          try {
            const indexUrl = chrome.runtime.getURL('viewer/readings/index.json')
            const indexRes = await fetch(indexUrl)
            if (indexRes.ok) {
              const staticList = await indexRes.json()
              if (Array.isArray(staticList)) fileList.push(...staticList)
            }
          } catch {}

          // 2. IndexedDB の readings/*
          try {
            const allMedia = await listMedia()
            for (const m of allMedia) {
              const name = m.name || ''
              if (name.startsWith('readings/') && name.endsWith('.md')) {
                const basename = name.slice('readings/'.length)
                if (!fileList.includes(basename)) fileList.push(basename)
              }
            }
          } catch {}

          // キャッシュに保存
          cachedReadingsList = fileList
          console.log('📖 朗読リスト更新:', fileList)
          sendResponse({ count: fileList.length, files: fileList })
        } catch (e) {
          console.error('refresh-readings error:', e)
          sendResponse({ count: 0, error: e.message })
        }
      })()
      return true
  }
})

// ============================================
// File Input Handlers
// ============================================
document.getElementById('fileInput').addEventListener('change', async (e) => {
  const file = e.target.files[0]
  if (!file) return
  // スロット0にも反映（後方互換 + マルチキャラ対応）
  await loadCharacterVRM(URL.createObjectURL(file), 0)
  e.target.value = ''
})

// キャラスロット用VRM読み込み
for (let slot = 0; slot < 2; slot++) {
  document.getElementById(`charVRM${slot}Input`).addEventListener('change', async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const input = e.target
    characters[slot].name = input.dataset.charName || ''
    characters[slot].speakerId = parseInt(input.dataset.charSpeakerId) || (slot === 0 ? 38 : 3)
    await loadCharacterVRM(URL.createObjectURL(file), slot)
    status.textContent = `✅ キャラ${slot + 1}「${characters[slot].name}」読み込み完了`
    e.target.value = ''
  })
}

document.getElementById('scriptInput').addEventListener('change', async (e) => {
  const file = e.target.files[0]
  if (!file) return
  const text = await file.text()

  // 最後に読み込んだ台本を記憶（デフォルト再生用）
  chrome.storage.local.set({ lastScript: text, lastScriptName: file.name })

  if (isSetlist(text)) {
    const setlist = parseSetlist(text)
    status.textContent = `📻 「${setlist.meta.title || file.name}」 ${setlist.segments.length}セグメント`
    playSetlist(setlist)
  } else {
    const script = parseScript(text)
    status.textContent = `📖 「${script.meta.title || file.name}」 ${script.dialogues.length}行`
    playScript(script)
  }
  e.target.value = ''
})

// readings フォルダ読み込み
document.getElementById('readingsFolderInput').addEventListener('change', (e) => {
  const files = e.target.files
  if (!files || files.length === 0) return

  // 既存の readings/ エントリをクリア
  for (const key of [...localFiles.keys()]) {
    if (key.startsWith('readings/')) localFiles.delete(key)
  }

  let count = 0
  for (const file of files) {
    const name = file.name
    if (!name.endsWith('.md') && !name.endsWith('.txt')) continue
    localFiles.set('readings/' + name, URL.createObjectURL(file))
    count++
  }

  // キャッシュ更新
  cachedReadingsList = []
  for (const k of localFiles.keys()) {
    if (k.startsWith('readings/') && k.endsWith('.md')) {
      cachedReadingsList.push(k.slice('readings/'.length))
    }
  }
  // Extension 内蔵分も追加
  ;(async () => {
    try {
      const indexUrl = chrome.runtime.getURL('viewer/readings/index.json')
      const res = await fetch(indexUrl)
      if (res.ok) {
        const list = await res.json()
        for (const f of list) {
          if (!cachedReadingsList.includes(f)) cachedReadingsList.push(f)
        }
      }
    } catch {}
    status.textContent = `📂 readings: ${cachedReadingsList.length}件`
    console.log('📂 readings:', cachedReadingsList)
  })()

  e.target.value = ''
})

// media フォルダ読み込み
document.getElementById('mediaFolderInput').addEventListener('change', (e) => {
  const files = e.target.files
  if (!files || files.length === 0) return

  // 既存の media/ エントリをクリア
  for (const key of [...localFiles.keys()]) {
    if (key.startsWith('media/')) localFiles.delete(key)
  }

  let count = 0
  for (const file of files) {
    localFiles.set('media/' + file.name, URL.createObjectURL(file))
    count++
  }

  status.textContent = `📂 media: ${count}件`
  console.log('📂 media:', [...localFiles.keys()].filter(k => k.startsWith('media/')))
  e.target.value = ''
})

document.getElementById('bgInput').addEventListener('change', (e) => {
  const file = e.target.files[0]
  if (!file) return
  changeBackground(URL.createObjectURL(file))
  e.target.value = ''
})

// フォルダ読み込み（readings + media をメモリに展開、台本リストを保存）
document.getElementById('folderInput').addEventListener('change', async (e) => {
  const files = e.target.files
  if (!files || files.length === 0) return

  let readingsCount = 0
  let mediaCount = 0
  const scriptFiles = []  // ルートの台本 .md

  for (const file of files) {
    const relPath = file.webkitRelativePath || ''
    const parts = relPath.split('/')

    // readings/ や media/ 配下のファイル → メモリ Map
    let key = null
    for (let i = 0; i < parts.length - 1; i++) {
      if (parts[i] === 'readings' || parts[i] === 'media') {
        key = parts.slice(i).join('/')
        break
      }
    }

    if (key) {
      localFiles.set(key, URL.createObjectURL(file))
      if (key.startsWith('readings/')) readingsCount++
      else if (key.startsWith('media/')) mediaCount++
      continue
    }

    // ルート直下の .md → 台本候補
    if (parts.length === 2 && file.name.endsWith('.md')) {
      scriptFiles.push(file)
    }
  }

  // readings リストのキャッシュ更新
  cachedReadingsList = []
  for (const k of localFiles.keys()) {
    if (k.startsWith('readings/') && k.endsWith('.md')) {
      cachedReadingsList.push(k.slice('readings/'.length))
    }
  }

  // Extension 内蔵の index.json からも追加
  try {
    const indexUrl = chrome.runtime.getURL('viewer/readings/index.json')
    const indexRes = await fetch(indexUrl)
    if (indexRes.ok) {
      const staticList = await indexRes.json()
      for (const f of staticList) {
        if (!cachedReadingsList.includes(f)) cachedReadingsList.push(f)
      }
    }
  } catch {}

  // ルート台本の内容を読んで chrome.storage に保存（ポップアップからプルダウン選択用）
  const availableScripts = []
  for (const file of scriptFiles) {
    const content = await file.text()
    const isSet = isSetlist(content)
    // タイトルを抽出
    const titleMatch = content.match(/^title:\s*(.+)$/m)
    const title = titleMatch ? titleMatch[1].trim() : file.name
    availableScripts.push({ name: file.name, title, content, isSetlist: isSet })
  }

  // セットリスト形式を先頭にソート
  availableScripts.sort((a, b) => (b.isSetlist ? 1 : 0) - (a.isSetlist ? 1 : 0))

  await chrome.storage.local.set({ availableScripts })

  // 台本が1つだけの場合は自動選択
  if (availableScripts.length === 1) {
    await chrome.storage.local.set({
      lastScript: availableScripts[0].content,
      lastScriptName: availableScripts[0].name
    })
  }

  status.textContent = `📂 朗読${readingsCount}件 / メディア${mediaCount}件 / 台本${availableScripts.length}件`
  console.log('📂 フォルダ読み込み:', { readingsCount, mediaCount, scripts: availableScripts.map(s => s.name), cachedReadingsList })

  e.target.value = ''
})

// ============================================
// Drag & Drop (VRM / 台本 / 背景)
// ============================================
const dropZone = document.getElementById('drop-zone')
// ブラウザのデフォルトドロップ動作を完全にブロック
window.addEventListener('dragover', (e) => e.preventDefault())
window.addEventListener('drop', (e) => e.preventDefault())

document.body.addEventListener('dragover', (e) => {
  e.preventDefault()
  dropZone.style.display = 'flex'
})
document.body.addEventListener('dragleave', () => {
  dropZone.style.display = 'none'
})
document.body.addEventListener('drop', (e) => {
  e.preventDefault()
  dropZone.style.display = 'none'
  const files = Array.from(e.dataTransfer.files)
  if (!files.length) return

  // VRM
  const vrmFile = files.find(f => f.name.endsWith('.vrm'))
  if (vrmFile) {
    disablePNGTuber()
    loadVRM(URL.createObjectURL(vrmFile))
    return
  }

  // 台本
  const scriptFile = files.find(f => f.name.endsWith('.md') || f.name.endsWith('.txt'))
  if (scriptFile) {
    scriptFile.text().then(text => {
      const script = parseScript(text)
      playScript(script)
    })
    return
  }

  // PNG 画像 → PNGTuber or 背景
  const imageFiles = files.filter(f => f.type.startsWith('image/'))
  if (imageFiles.length >= 2) {
    // 2〜3枚: ファイル名で自動判別
    const talkFile = imageFiles.find(f => /talk|口開|open|speak/i.test(f.name))
    const blinkFile = imageFiles.find(f => /blink|瞬き|close|目閉/i.test(f.name))
    const idleFile = imageFiles.find(f => f !== talkFile && f !== blinkFile) || imageFiles[0]
    const talk = talkFile || imageFiles.find(f => f !== idleFile && f !== blinkFile) || imageFiles[1]
    setPNGTuber(
      URL.createObjectURL(idleFile),
      URL.createObjectURL(talk),
      blinkFile ? URL.createObjectURL(blinkFile) : null
    )
  } else if (imageFiles.length === 1) {
    // 1枚: Shiftキー押しながらドロップ → PNGTuber、そうでなければ背景
    if (e.shiftKey) {
      setPNGTuber(URL.createObjectURL(imageFiles[0]))
    } else {
      changeBackground(URL.createObjectURL(imageFiles[0]))
    }
  }
})

// ============================================
// Resize
// ============================================
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// ============================================
// Default Setlist Loader
// ============================================
async function loadAndPlayDefaultSetlist() {
  if (isPlaying) {
    stopRequested = true
    await sleep(500)
  }

  try {
    // 1. 最後に読み込んだ台本を復元
    const stored = await chrome.storage.local.get(['lastScript', 'lastScriptName'])
    let text = stored.lastScript
    let name = stored.lastScriptName || 'デフォルト'

    // 2. なければ default_setlist.md を読み込み
    if (!text) {
      const url = chrome.runtime.getURL('viewer/default_setlist.md')
      const res = await fetch(url)
      if (res.ok) {
        text = await res.text()
        name = 'default_setlist.md'
      }
    }

    if (!text) {
      status.textContent = '⚠️ 台本がありません。先に台本を読み込んでください'
      return
    }

    if (isSetlist(text)) {
      const setlist = parseSetlist(text)
      status.textContent = `📻 「${setlist.meta.title || name}」${setlist.segments.length}セグメント`
      playSetlist(setlist)
    } else {
      const script = parseScript(text)
      playScript(script)
    }
  } catch (e) {
    console.error('Default setlist load error:', e)
    status.textContent = '❌ デフォルト台本読み込み失敗'
  }
}

// ============================================
// Auto-load default model
// ============================================
;(async () => {
  // 保存済みキャラ設定を復元
  try {
    const charData = await chrome.storage.local.get(['characterSlots', 'charSpacing', 'charAngle'])
    if (charData.characterSlots) {
      charData.characterSlots.forEach((ch, i) => {
        if (i < characters.length) {
          characters[i].name = ch.name || ''
          characters[i].speakerId = ch.speakerId || (i === 0 ? 38 : 3)
          characters[i].prompt = ch.prompt || ''
        }
      })
      console.log('🎭 Characters restored:', characters.map(c => `${c.name}(${c.speakerId})`))
    }
    if (charData.charSpacing !== undefined) charSpacing = charData.charSpacing
    if (charData.charAngle !== undefined) charInwardAngle = charData.charAngle
  } catch {}

  // 保存済みカメラ位置を復元
  const hasSavedCamera = await loadCameraPosition()

  try {
    const defaultVRM = chrome.runtime.getURL('viewer/default_model.vrm')
    const res = await fetch(defaultVRM, { method: 'HEAD' })
    if (res.ok) {
      characters[0].name = '怪談ちゃん'
      characters[0].speakerId = 38
      await loadCharacterVRM(defaultVRM, 0)
      // VRM読み込み後に保存済みカメラ位置を再適用（loadCharacterVRMがカメラを動かすため）
      if (hasSavedCamera) await loadCameraPosition()
    } else {
      status.textContent = '📂 VRMをドロップで読み込み'
    }
  } catch {
    status.textContent = '📂 VRMをドロップで読み込み'
    status.textContent = '📂 VRMをドロップで読み込み'
  }
})()

// ============================================
// ローカルコメントボックス
// ============================================
function toggleLocalCommentBox() {
  const box = document.getElementById('local-comment-box')
  if (box) box.classList.toggle('visible')
}

;(function initLocalChat() {
  const box = document.getElementById('local-comment-box')
  const input = document.getElementById('localCommentInput')
  const sendBtn = document.getElementById('localCommentSend')
  const closeBtn = document.getElementById('localCommentClose')
  const log = document.getElementById('local-comment-log')
  if (!box || !input) return

  function addToLog(author, text, isReply) {
    const div = document.createElement('div')
    div.className = 'local-msg' + (isReply ? ' reply' : '')
    const label = isReply ? '📻 AITuber' : '💬 ' + author
    const a = document.createElement('span')
    a.className = 'author'
    a.textContent = label
    const t = document.createElement('span')
    t.className = 'text'
    t.textContent = text
    div.appendChild(a)
    div.appendChild(document.createElement('br'))
    div.appendChild(t)
    log.appendChild(div)
    log.scrollTop = log.scrollHeight
    return div
  }

  async function sendLocalComment() {
    const text = input.value.trim()
    if (!text) return
    input.value = ''

    const comment = {
      author: 'ローカル',
      text: text,
      timestamp: Date.now(),
      id: 'local-' + Date.now()
    }

    addToLog(comment.author, text, false)

    if (isPlaying) {
      commentQueue.push(comment)
      addToLog('', '→ コメントキューに追加しました', true)
    } else {
      const replyDiv = addToLog('', '考え中...', true)
      try {
        // コメントにキャラ名が含まれていればそのキャラが応答
        let localSpeaker = undefined  // speak()のデフォルト
        const charIdx = findCharacterByName(text)
        if (charIdx >= 0 && characters[charIdx].vrm) {
          setActiveCharacter(charIdx)
          localSpeaker = characters[charIdx].speakerId
        } else {
          setActiveCharacter(0)
        }

        const reply = await generateCommentReply(comment)
        console.log('💬 Local chat raw reply:', JSON.stringify(reply))
        let cleanReply = reply ? cleanTextForSpeech(reply) : ''
        console.log('💬 Local chat clean reply:', JSON.stringify(cleanReply))
        if (!cleanReply || cleanReply.length === 0) cleanReply = 'ありがとうっす！'
        const textEl = replyDiv.querySelector('.text')
        if (textEl) textEl.textContent = cleanReply

        const tagMatch = reply && reply.match(/\[(\w+),\s*([\d.]+)\]/)
        if (tagMatch) setEmotion(tagMatch[1], parseFloat(tagMatch[2]))
        else setEmotion('happy', 0.7)

        showSubtitle(cleanReply, '💬 返事')
        await speak(cleanReply, localSpeaker)
        await sleep(500)
        hideSubtitle()
        setEmotion('neutral')
      } catch (e) {
        const textEl = replyDiv.querySelector('.text')
        if (textEl) textEl.textContent = 'ごめん、うまく返事できなかったっす...'
      }
    }
  }

  sendBtn.addEventListener('click', sendLocalComment)
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.isComposing) {
      e.preventDefault()
      sendLocalComment()
    }
  })
  closeBtn.addEventListener('click', function() { box.classList.remove('visible') })
})()

// ============================================


// ============================================
// おはようラジオ 自動生成 & 再生
// ============================================

async function fetchNewsForShow() {
  try {
    const res = await fetch('https://news.google.com/rss?hl=ja&gl=JP&ceid=JP:ja')
    const xml = await res.text()
    const items = []
    const regex = /<item>\s*<title>(.*?)<\/title>/g
    let match
    while ((match = regex.exec(xml)) !== null && items.length < 5) {
      // Google Newsの " - ソース名" を除去
      const title = match[1].replace(/ - [^-]+$/, '').trim()
      if (title) items.push(title)
    }
    console.log(`📰 ニュース: ${items.length}件`)
    return items
  } catch (e) {
    console.log('📰 ニュース取得失敗')
    return []
  }
}

async function fetchWeatherForShow() {
  const regions = [
    { code: '016010', name: '札幌', area: '北海道' },
    { code: '040010', name: '仙台', area: '東北' },
    { code: '130010', name: '東京', area: '関東' },
    { code: '150010', name: '新潟', area: '北陸' },
    { code: '230010', name: '名古屋', area: '中部' },
    { code: '270000', name: '大阪', area: '近畿' },
    { code: '340010', name: '広島', area: '中国' },
    { code: '380010', name: '松山', area: '四国' },
    { code: '400010', name: '福岡', area: '九州' },
    { code: '471010', name: '那覇', area: '沖縄' },
  ]
  try {
    const results = await Promise.all(regions.map(async (r) => {
      try {
        const res = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${r.code}`)
        const data = await res.json()
        const today = data.forecasts?.[0]
        if (!today) return null
        const rain = today.chanceOfRain || {}
        const rainStr = rain['T12_18'] || rain['T06_12'] || rain['T18_24'] || ''
        return {
          area: r.area,
          city: r.name,
          telop: today.telop || '',
          maxTemp: today.temperature?.max?.celsius || '?',
          minTemp: today.temperature?.min?.celsius || '?',
          rainChance: rainStr
        }
      } catch { return null }
    }))
    const valid = results.filter(Boolean)
    console.log(`🌤️ 全国天気: ${valid.length}地域`)
    return valid
  } catch {
    console.log('🌤️ 天気取得失敗')
    return []
  }
}

async function fetchTodayInHistoryForShow() {
  const now = new Date()
  const mmdd = `${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
  const results = []

  try {
    // 記念日
    const annivRes = await fetch(`https://api.whatistoday.cyou/index.cgi/v3/anniv/${mmdd}`)
    const anniv = await annivRes.json()
    const anniversaries = [anniv.anniv1, anniv.anniv2, anniv.anniv3, anniv.anniv4, anniv.anniv5].filter(Boolean)
    if (anniversaries.length > 0) results.push(`記念日: ${anniversaries.join('、')}`)
  } catch {}

  try {
    // 誕生花
    const flowerRes = await fetch(`https://api.whatistoday.cyou/index.cgi/v3/birthflower/${mmdd}`)
    const flower = await flowerRes.json()
    if (flower.flower) results.push(`誕生花: ${flower.flower}（花言葉: ${flower.lang}）`)
  } catch {}

  try {
    // 偉人誕生日
    const famousRes = await fetch(`https://api.whatistoday.cyou/index.cgi/v3/famousbirthday/${mmdd}`)
    const famous = await famousRes.json()
    if (famous.name) results.push(`今日生まれの偉人: ${famous.name}（${famous.profile}、${famous.lifespan}）`)
  } catch {}

  console.log(`📅 今日は何の日: ${results.length}件`)
  return results
}

async function generateMorningShow() {
  if (isPlaying) {
    stopRequested = true
    return
  }

  status.textContent = '🌅 おはようラジオ生成中...'

  const now = new Date()
  const weekdays = ['日', '月', '火', '水', '木', '金', '土']
  const displayDate = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日（${weekdays[now.getDay()]}）`
  const hour = now.getHours()
  const greeting = hour < 11 ? 'おはようございます' : hour < 17 ? 'こんにちは' : 'こんばんは'
  const showName = hour < 11 ? 'おはようラジオ' : hour < 17 ? 'ひるまちラジオ' : '夜ふかしラジオ'
  const closing = hour < 11 ? '今日も元気にいってらっしゃい！' : hour < 17 ? '午後も頑張ってね！' : '明日も良い一日になりますように。おやすみ！'

  // 並列でデータ取得
  status.textContent = '🌅 ニュース・天気を取得中...'
  const [news, weather, history] = await Promise.all([
    fetchNewsForShow(),
    fetchWeatherForShow(),
    fetchTodayInHistoryForShow()
  ])

  const newsText = news.length > 0
    ? `【ニュース（NHK）】\n${news.map((n, i) => `${i + 1}. ${n}`).join('\n')}`
    : '【ニュースなし】'
  const weatherText = weather.length > 0
    ? `【全国天気予報（気象庁）】\n${weather.map(w => `${w.area}（${w.city}）: ${w.telop} 最高${w.maxTemp}°C/最低${w.minTemp}°C${w.rainChance ? ' 降水確率' + w.rainChance : ''}`).join('\n')}`
    : '【天気情報なし】'
  const historyText = history.length > 0
    ? `【今日は何の日】\n${history.join('\n')}`
    : '【今日は何の日：なし】'

  status.textContent = '🌅 台本を生成中...'

  const prompt = `あなたはAIラジオパーソナリティ「怪談ちゃん」（元気で明るい女の子）。
「怪談ちゃんの${showName}」の台本を作って。

【日付】${displayDate}
${newsText}
${weatherText}
${historyText}

【出力形式】セットリストのセリフ部分のみ。1行1文。
- 感情指定行: [emotion: happy] [intensity: 0.8] のように独立した行で
- セグメント見出し: # コーナー名
- コメント: // で始まる行

【番組構成（100行以上のセリフ）】
1. 挨拶「${greeting}！怪談ちゃんの${showName}！」+ 日付紹介（5行）
2. 今日は何の日コーナー（記念日を紹介、誕生花と花言葉も必ず紹介、偉人の誕生日も必ず紹介）（15行）
3. ニュース（3本、各ニュースに3〜5行の感想・解説を付けて）（25行）
4. 全国天気予報（北海道から沖縄まで全10地域、各地域のアドバイス付き）（30行）
5. 今日の一言（ポジティブな名言や格言、解説付き）（10行）
6. 締め「${closing}」（5行）

【ルール】
- 口語体で自然に、ラジオDJのように話す
- 1行は短めの一文（30文字程度）
- ニュースは事実＋自分の感想を丁寧に
- 天気は実用的に（傘・服装アドバイス）
- 100行以上のセリフを生成すること（重要！）
- frontmatter不要、セリフだけ出力`

  try {
    const scriptText = await callLLM([
      { role: 'user', content: prompt }
    ], { maxTokens: 8000, temperature: 0.8 })

    if (!scriptText) {
      status.textContent = '❌ 台本生成失敗（API応答なし）'
      return
    }

    // メディアファイル検出（フォルダ読み込み済みの場合）
    const availableJingles = []
    for (let i = 1; i <= 4; i++) {
      if (localFiles.has(`media/jingle${i}.mp3`) || localFiles.has(`media/jingle${i}.wav`)) {
        const ext = localFiles.has(`media/jingle${i}.mp3`) ? 'mp3' : 'wav'
        availableJingles.push(`media/jingle${i}.${ext}`)
      }
    }
    const hasBGM = localFiles.has('media/bgm.mp3') || localFiles.has('media/bgm.wav')
    const bgmFile = hasBGM ? (localFiles.has('media/bgm.mp3') ? 'media/bgm.mp3' : 'media/bgm.wav') : null
    const hasOpening = localFiles.has('media/opening.jpg') || localFiles.has('media/opening.png')
    const openingFile = hasOpening ? (localFiles.has('media/opening.jpg') ? 'media/opening.jpg' : 'media/opening.png') : null
    // ending画像も検出
    const hasEnding = localFiles.has('media/ending.jpg') || localFiles.has('media/ending.png')
    const endingFile = hasEnding ? (localFiles.has('media/ending.jpg') ? 'media/ending.jpg' : 'media/ending.png') : null
    // コーナー用ジングル（jingle2があればそれ、なければjingle1）
    const cornerJingle = availableJingles.length >= 2 ? availableJingles[1] : (availableJingles[0] || null)

    console.log(`🎵 ジングル: ${availableJingles.length}個, BGM: ${hasBGM}, opening: ${hasOpening}, ending: ${hasEnding}`)

    // LLM出力をセットリスト形式に変換
    const sections = scriptText.split(/^(?=# )/m).filter(s => s.trim())
    let setlistMd = `---
title: 怪談ちゃんの${showName}（${now.getMonth() + 1}/${now.getDate()}）
speaker: 38
speed: 0.95
---

`
    // === オープニングジングル: jingle1 + opening.jpg + speakAt挨拶 ===
    const firstSection = sections[0] ? sections[0].trim() : ''
    const firstLines = firstSection.split('\n')
    const firstHeading = firstLines[0].replace(/^#+\s*/, '')
    const greetLine = firstLines.find(l => l.trim() && !l.startsWith('#') && !l.startsWith('[')) || `${greeting}！怪談ちゃんの${showName}！`

    if (availableJingles.length > 0) {
      setlistMd += `# オープニングジングル
[type: jingle]
[file: ${availableJingles[0]}]${openingFile ? `\n[overlay: ${openingFile}]` : ''}
[duration: 30]
[fadeOut: 3]
[speakAt: 3.5]
[speakText: ${greetLine.trim()}]
[speakSpeaker: 38]

`
    }

    // === オープニングトーク（残りの挨拶行）+ BGM開始 ===
    const restOfFirst = firstLines.slice(1).filter(l => l.trim() && !l.startsWith('[type')).join('\n')
    if (restOfFirst.trim()) {
      setlistMd += `# オープニング
[type: talk]${bgmFile ? `\n[bgm: ${bgmFile}]\n[bgmVolume: 0.15]` : ''}
${restOfFirst}

`
    }

    // === 各コーナー: コーナージングル(speakAt付き) → talk ===
    for (let i = 1; i < sections.length; i++) {
      const section = sections[i].trim()
      if (!section) continue

      const isLastSection = (i === sections.length - 1)

      // コーナー名を取得
      const sectionLines = section.split('\n')
      const sectionName = sectionLines[0].replace(/^#+\s*/, '') || `コーナー${i}`
      const sectionBody = sectionLines.slice(1).join('\n')

      // コーナー前にジングル（speakAtでコーナー名を読む）
      if (cornerJingle && !isLastSection) {
        setlistMd += `# コーナージングル
[type: jingle]
[file: ${cornerJingle}]
[duration: 10.5]
[fadeOut: 3.5]
[speakAt: 4]
[speakText: ${sectionName}]
[speakSpeaker: 38]

`
      }

      // コーナー本体
      setlistMd += `# ${sectionName}
[type: talk]
${sectionBody}

`
    }

    // === エンディングジングル: jingle1 + ending/opening.jpg + speakAt ===
    if (availableJingles.length > 0) {
      const edOverlay = endingFile || openingFile
      setlistMd += `# エンディングジングル
[type: jingle]
[file: ${availableJingles[0]}]${edOverlay ? `\n[overlay: ${edOverlay}]` : ''}
[duration: 20]
[fadeOut: 3]
[speakAt: 3.5]
[speakText: 怪談ちゃんの${showName}、また次回！]
[speakSpeaker: 38]

`
    }

    console.log('📝 セットリスト生成完了')

    // 通常の台本再生と同じパスで再生（録画もplaySetlist側で自動制御）
    if (isSetlist(setlistMd)) {
      const setlist = parseSetlist(setlistMd)
      console.log(`📝 自動生成台本: ${setlist.segments.length}セグメント`)
      status.textContent = `📻 「${setlist.meta.title}」${setlist.segments.length}セグメント`
      await playSetlist(setlist)
    } else {
      const parsed = parseScript(setlistMd)
      console.log(`📝 自動生成台本: ${parsed.dialogues.length}行`)
      status.textContent = `📖 「${parsed.meta.title}」${parsed.dialogues.length}行`
      await playScript(parsed)
    }

  } catch (e) {
    console.error('Morning show error:', e)
    status.textContent = `❌ 生成エラー: ${e.message}`
  }
}

// グローバルに公開
window.generateMorningShow = generateMorningShow

// ============================================
// CLI / URL パラメータ駆動
// ============================================
// ?card=news_morning  — Station のカードを自動再生
// ?record=true        — 自動録画（合成Canvas）
// ?setlist=URL        — 任意のセットリストURL
;(async () => {
  const params = new URLSearchParams(location.search)
  const cardId = params.get('card')
  const setlistUrl = params.get('setlist')
  const autoRecord = params.get('record') === 'true'

  if (!cardId && !setlistUrl) return

  // VRM/PNGTuber の初期化を待つ
  await sleep(3000)

  try {
    let setlistText = ''

    if (cardId) {
      // Station からカード情報取得
      const STATION_BASE = 'https://k3peta.github.io/aituber-radio-station'
      status.textContent = `📡 カード「${cardId}」を取得中...`

      // card.json を取得
      const cardRes = await fetch(`${STATION_BASE}/cards/${cardId}/card.json`)
      if (!cardRes.ok) throw new Error(`Card not found: ${cardId}`)
      const card = await cardRes.json()

      // メディアファイルをダウンロードして localFiles に登録
      if (card.media) {
        for (const [localPath, remotePath] of Object.entries(card.media)) {
          try {
            const mediaUrl = `${STATION_BASE}/${remotePath}`
            const mediaRes = await fetch(mediaUrl)
            if (mediaRes.ok) {
              const blob = await mediaRes.blob()
              localFiles.set(localPath, URL.createObjectURL(blob))
              console.log(`📥 ${localPath} → loaded`)
            }
          } catch (e) {
            console.warn(`📥 ${localPath} failed:`, e)
          }
        }
      }

      // セットリスト取得
      const setlistRes = await fetch(`${STATION_BASE}/cards/${cardId}/${card.setlist || 'setlist.md'}`)
      if (!setlistRes.ok) throw new Error(`Setlist not found for ${cardId}`)
      setlistText = await setlistRes.text()

    } else if (setlistUrl) {
      status.textContent = '📡 セットリスト取得中...'
      const res = await fetch(setlistUrl)
      if (!res.ok) throw new Error(`Setlist fetch failed: ${setlistUrl}`)
      setlistText = await res.text()

      // セットリスト内の media/ 参照を検出してダウンロード
      const baseUrl = setlistUrl.replace(/\/[^/]*$/, '')
      const mediaRefs = new Set()
      for (const match of setlistText.matchAll(/(?:file|bgm|overlay|bg):\s*(media\/[^\]]+)/g)) {
        mediaRefs.add(match[1].trim())
      }
      // readings/ も検出
      for (const match of setlistText.matchAll(/file:\s*(readings\/[^\]]+)/g)) {
        mediaRefs.add(match[1].trim())
      }
      for (const ref of mediaRefs) {
        try {
          const mediaUrl = `${baseUrl}/${ref}`
          const mediaRes = await fetch(mediaUrl)
          if (mediaRes.ok) {
            const blob = await mediaRes.blob()
            localFiles.set(ref, URL.createObjectURL(blob))
            console.log(`📥 ${ref} → loaded`)
          }
        } catch (e) {
          console.warn(`📥 ${ref} skipped`)
        }
      }
      // readings/ フォルダの index.json も試す
      try {
        const readingsIdx = await fetch(`${baseUrl}/readings/index.json`)
        if (readingsIdx.ok) {
          const list = await readingsIdx.json()
          for (const f of list) {
            if (!localFiles.has(`readings/${f}`)) {
              try {
                const r = await fetch(`${baseUrl}/readings/${f}`)
                if (r.ok) {
                  const blob = await r.blob()
                  localFiles.set(`readings/${f}`, URL.createObjectURL(blob))
                }
              } catch {}
            }
          }
          cachedReadingsList = list
          console.log(`📥 readings: ${list.length} files`)
        }
      } catch {}
    }

    if (!setlistText) throw new Error('Empty setlist')

    // 自動録画
    if (autoRecord) {
      await chrome.storage.local.set({ autoRecordMorning: true })
    }

    // 再生（playSetlist 内で autoRecord チェック）
    if (isSetlist(setlistText)) {
      const setlist = parseSetlist(setlistText)
      console.log(`🚀 CLI autoplay: ${setlist.meta.title} (${setlist.segments.length} segments)`)
      status.textContent = `📻 「${setlist.meta.title}」${setlist.segments.length}セグメント`
      await playSetlist(setlist)
    } else {
      const parsed = parseScript(setlistText)
      console.log(`🚀 CLI autoplay: ${parsed.meta.title} (${parsed.dialogues.length} lines)`)
      await playScript(parsed)
    }

    // 完了シグナル（CLIからタイトルで検知可能）
    document.title = 'DONE:' + (cardId || 'custom')
    console.log('✅ CLI autoplay complete')

  } catch (e) {
    console.error('CLI autoplay error:', e)
    status.textContent = `❌ ${e.message}`
    document.title = 'ERROR:' + e.message
  }
})()
