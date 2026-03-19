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
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
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
// VRM Loading
// ============================================
let currentVRM = null
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

// 音声出力を録画用にキャプチャするための MediaStreamDestination
const recordDest = audioCtx.createMediaStreamDestination()

// マスターゲイン: スピーカーと録画の両方に音声を分岐
const masterGain = audioCtx.createGain()
masterGain.connect(audioCtx.destination)
masterGain.connect(recordDest)

function startRecording() {
  if (isRecording) return

  // 合成用オフスクリーンキャンバス
  const compCanvas = document.createElement('canvas')
  compCanvas.width = 1920
  compCanvas.height = 1080
  const ctx = compCanvas.getContext('2d')

  // 背景画像を取得
  const bgLayer = document.getElementById('bg-layer')
  const bgStyle = getComputedStyle(bgLayer)
  const bgUrl = bgStyle.backgroundImage.replace(/url\(["']?(.+?)["']?\)/, '$1')
  const bgImg = new Image()
  bgImg.crossOrigin = 'anonymous'
  bgImg.src = bgUrl

  // 合成フレーム描画
  let compRAF = null
  function drawCompositeFrame() {
    const w = compCanvas.width
    const h = compCanvas.height

    // 1. 背景
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, w, h)
    if (bgImg.complete && bgImg.naturalWidth) {
      // cover fit
      const scale = Math.max(w / bgImg.naturalWidth, h / bgImg.naturalHeight)
      const sw = bgImg.naturalWidth * scale
      const sh = bgImg.naturalHeight * scale
      ctx.drawImage(bgImg, (w - sw) / 2, (h - sh) / 2, sw, sh)
      // グラデーションオーバーレイ
      const grad = ctx.createLinearGradient(0, 0, 0, h)
      grad.addColorStop(0, 'rgba(0,0,0,0.15)')
      grad.addColorStop(0.4, 'rgba(0,0,0,0.05)')
      grad.addColorStop(0.8, 'rgba(0,0,0,0.3)')
      grad.addColorStop(1, 'rgba(0,0,0,0.7)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)
    }

    // 2. ジングルオーバーレイ
    const overlay = document.getElementById('jingle-overlay')
    if (overlay && overlay.classList.contains('visible')) {
      const img = document.getElementById('jingle-image')
      if (img && img.complete && img.naturalWidth) {
        ctx.fillStyle = '#000'
        ctx.fillRect(0, 0, w, h)
        const s = Math.min(w / img.naturalWidth, h / img.naturalHeight)
        const iw = img.naturalWidth * s
        const ih = img.naturalHeight * s
        ctx.drawImage(img, (w - iw) / 2, (h - ih) / 2, iw, ih)
      }
    } else {
      // 3. キャラクター描画
      if (pngtuberMode) {
        // PNGTuber: 現在表示中の画像を描画
        const activeImg = pngTalkState ? pngtuberTalk : pngtuberIdle
        if (activeImg && activeImg.complete && activeImg.naturalWidth) {
          const s = Math.min(w * 0.9 / activeImg.naturalWidth, h * 0.9 / activeImg.naturalHeight)
          const iw = activeImg.naturalWidth * s
          const ih = activeImg.naturalHeight * s
          ctx.drawImage(activeImg, (w - iw) / 2, h - ih, iw, ih)
        }
      } else {
        // VRM: 3Dキャンバス
        ctx.drawImage(canvas, 0, 0, w, h)
      }
    }

    // 4. 字幕
    const subBox = document.getElementById('subtitle-box')
    if (subBox && subBox.classList.contains('visible')) {
      const title = document.getElementById('subtitle-title')?.textContent || ''
      const text = document.getElementById('subtitle-text')?.textContent || ''

      const boxW = w * 0.85
      const boxX = (w - boxW) / 2
      const boxY = h - 160
      const boxH = 120

      // 字幕背景
      ctx.fillStyle = 'rgba(10, 10, 26, 0.88)'
      ctx.beginPath()
      ctx.roundRect(boxX, boxY, boxW, boxH, 12)
      ctx.fill()
      ctx.strokeStyle = 'rgba(233, 69, 96, 0.3)'
      ctx.lineWidth = 1
      ctx.stroke()

      // タイトル
      if (title) {
        ctx.font = '700 22px "Noto Sans JP", sans-serif'
        ctx.fillStyle = '#e94560'
        ctx.fillText(title, boxX + 32, boxY + 32)
      }

      // テキスト
      if (text) {
        ctx.font = '400 26px "Noto Sans JP", sans-serif'
        ctx.fillStyle = '#e8e8e8'
        // 複数行に分割
        const maxLineWidth = boxW - 64
        const lines = []
        let currentLine = ''
        for (const char of text) {
          const testLine = currentLine + char
          if (ctx.measureText(testLine).width > maxLineWidth) {
            lines.push(currentLine)
            currentLine = char
          } else {
            currentLine = testLine
          }
        }
        if (currentLine) lines.push(currentLine)
        const lineY = title ? boxY + 62 : boxY + 42
        for (let i = 0; i < Math.min(lines.length, 2); i++) {
          ctx.fillText(lines[i], boxX + 32, lineY + i * 34)
        }
      }
    }

    compRAF = requestAnimationFrame(drawCompositeFrame)
  }

  drawCompositeFrame()

  // 合成キャンバスのストリーム
  const canvasStream = compCanvas.captureStream(30)
  const audioTracks = recordDest.stream.getAudioTracks()

  const combinedStream = new MediaStream([
    ...canvasStream.getVideoTracks(),
    ...audioTracks
  ])

  recordedChunks = []
  mediaRecorder = new MediaRecorder(combinedStream, {
    mimeType: 'video/webm;codecs=vp9,opus',
    videoBitsPerSecond: 4000000
  })

  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) recordedChunks.push(e.data)
  }

  mediaRecorder.onstop = () => {
    // 合成ループ停止
    if (compRAF) cancelAnimationFrame(compRAF)

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
  isRecording = true
  recordingStartTime = Date.now()
  updateRecordButton()
  console.log('Recording started (composite canvas)')
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
  if (!btn) return
  if (isRecording) {
    btn.textContent = '⏹ 録画停止'
    btn.style.background = '#c62828'
    // 録画時間の更新
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

// ============================================
// Pose
// ============================================
function applyIdlePose(vrm) {
  const humanoid = vrm.humanoid
  if (!humanoid) return

  const leftUpperArm = humanoid.getNormalizedBoneNode('leftUpperArm')
  const rightUpperArm = humanoid.getNormalizedBoneNode('rightUpperArm')

  if (leftUpperArm) leftUpperArm.rotation.z = -Math.PI * 0.43
  if (rightUpperArm) rightUpperArm.rotation.z = Math.PI * 0.43

  const leftLowerArm = humanoid.getNormalizedBoneNode('leftLowerArm')
  const rightLowerArm = humanoid.getNormalizedBoneNode('rightLowerArm')

  if (leftLowerArm) leftLowerArm.rotation.z = -Math.PI * 0.05
  if (rightLowerArm) rightLowerArm.rotation.z = Math.PI * 0.05

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
 * テキストを合成して再生（従来の speak — 互換用）
 */
async function speak(text, speakerId = 38) {
  if (audioCtx.state === 'suspended') await audioCtx.resume()

  try {
    if (!await checkVoicevox()) return

    status.textContent = `🎙️ ${text.slice(0, 25)}…`
    const audioBuffer = await synthesize(text, speakerId)
    if (audioBuffer) await playAudio(audioBuffer)
  } catch (e) {
    const msg = e.message.includes('Failed to fetch')
      ? 'VOICEVOXとの通信に失敗しました'
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
  if (audioCtx.state === 'suspended') await audioCtx.resume()
  if (!await checkVoicevox()) return false

  let prefetchedBuffer = null
  let prefetchPromise = null

  // 最初の行を即座に先読み開始
  const firstSpeaker = lines[0]?.speaker || defaultSpeaker
  prefetchPromise = synthesize(lines[0].text, firstSpeaker).catch(() => null)

  for (let i = 0; i < lines.length; i++) {
    if (stopRequested) return true

    const line = lines[i]
    const speaker = line.speaker || defaultSpeaker

    // コールバック（字幕・表情設定）— 合成待ち前に表示
    if (onLine) onLine(line, i)

    try {
      let audioBuffer
      const t0 = performance.now()

      // 先読み結果を待つ or 新規合成
      if (prefetchPromise) {
        audioBuffer = await prefetchPromise
        prefetchPromise = null
        console.log(`🔊 [${i}] prefetch hit: ${(performance.now() - t0).toFixed(0)}ms`)
      } else if (prefetchedBuffer) {
        audioBuffer = prefetchedBuffer
        prefetchedBuffer = null
        console.log(`🔊 [${i}] buffer hit: 0ms`)
      } else {
        audioBuffer = await synthesize(line.text, speaker)
        console.log(`🔊 [${i}] sync synth: ${(performance.now() - t0).toFixed(0)}ms`)
      }

      // 次の行を先読み合成開始（再生と並行）
      if (i + 1 < lines.length && !stopRequested) {
        const nextLine = lines[i + 1]
        const nextSpeaker = nextLine.speaker || defaultSpeaker
        prefetchPromise = synthesize(nextLine.text, nextSpeaker).catch(() => null)
      }

      // 現在の行を再生
      const t1 = performance.now()
      if (audioBuffer) await playAudio(audioBuffer)
      console.log(`🔊 [${i}] playback: ${(performance.now() - t1).toFixed(0)}ms`)
      if (stopRequested) return true

      // 文末に応じた間（ベース500ms + 文末調整）
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

function parseScript(mdText) {
  const lines = mdText.split('\n')
  const meta = {}
  const dialogues = []
  let inFrontmatter = false
  let frontmatterDone = false
  let inMultilineValue = false
  let multilineKey = ''

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

    // タグなしのプレーンテキスト行 → AI前処理の対象
    const cleanText = stripURLs(trimmed)
    if (cleanText) {
      dialogues.push({
        emotion: 'neutral',
        intensity: 1.0,
        text: cleanText,
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

  // AI 前処理
  const dialogues = await preprocessWithAI(rawDialogues)

  status.textContent = `📖 「${title}」再生中...`

  // タイトル読み上げ
  if (meta.intro) {
    showSubtitle(meta.intro, title)
    await speak(meta.intro)
    if (stopRequested) { cleanup(); return }
    await sleep(800)
  } else if (title && title !== '台本') {
    showSubtitle(title, '📖 朗読')
    await speak(title)
    if (stopRequested) { cleanup(); return }
    await sleep(800)
  }

  // パイプラインで先読み再生
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
    status.textContent = '⏹️ 再生停止'
    isPlaying = false
    stopRequested = false
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
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

  const userPrompt = `${timeContext}です。
「${topic.theme}」について、「${topic.hook}」をきっかけに5分程度のフリートークをしてください。
自分の実体験のように具体的に語ってください。${historyHint}`

  try {
    status.textContent = '🤔 話題を考え中...'

    const characterPrompt = await getCharacterPrompt()
    const content = await callLLM([
      { role: 'system', content: characterPrompt + FREETALK_RULES },
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

  for (const line of lines) {
    const tagMatch = line.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/)
    if (tagMatch) {
      dialogues.push({
        emotion: tagMatch[1],
        intensity: parseFloat(tagMatch[2]),
        text: cleanTextForSpeech(tagMatch[3])
      })
    } else if (line.length > 5 && !line.startsWith('#') && !line.startsWith('---')) {
      // タグなし行もフォールバックとして取り込む
      dialogues.push({
        emotion: 'neutral',
        intensity: 0.7,
        text: cleanTextForSpeech(line),
        _untagged: true
      })
    }
  }

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
  }

  status.textContent = `🗣️ フリートーク「${topic.theme}」`

  await speakPipeline(dialogues, 38, (line, i) => {
    setEmotion(line.emotion, line.intensity)
    showSubtitle(line.text, `🗣️ ${topic.theme}（${i + 1}/${dialogues.length}）`)
  })

  hideSubtitle()
  setEmotion('neutral')
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

    const readText = comment.author + 'さんから。' + comment.text
    setEmotion('neutral', 0.7)
    showSubtitle(readText, '💬 ' + comment.author)
    await speak(readText, speaker)
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
        await speak(cleanReply, speaker)
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
  return /\[type:\s*(talk|script|jingle|freetalk|audio)\]/i.test(text)
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

  status.textContent = `📻 「${title}」放送開始`

  for (let si = 0; si < segments.length; si++) {
    if (stopRequested) { cleanup(); return }

    const seg = segments[si]
    const speaker = seg.props.speaker || globalSpeaker
    status.textContent = `📻 ${title}（${si + 1}/${segments.length}）${seg.name}`

    // セグメント共通: BGM制御
    if (seg.props.bgm) {
      const bgmUrl = await resolveMediaURL(seg.props.bgm)
      if (bgmUrl) {
        await startBGM(bgmUrl, seg.props.bgmvolume || seg.props.bgmVolume || 0.25)
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

        // テキスト再生
        const talkScript = { meta: { title: seg.name }, dialogues: [] }
        for (const line of seg.lines) {
          const tagMatch = line.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/)
          if (tagMatch) {
            talkScript.dialogues.push({
              emotion: tagMatch[1],
              intensity: parseFloat(tagMatch[2]),
              text: cleanTextForSpeech(tagMatch[3])
            })
          } else {
            const cleaned = cleanTextForSpeech(line)
            if (cleaned) {
              talkScript.dialogues.push({
                emotion: seg.props.emotion || 'neutral',
                intensity: seg.props.intensity || 0.75,
                text: cleaned,
                _untagged: true
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

  // 録画中なら自動停止
  if (isRecording) {
    await sleep(2000) // エンディングの余韻
    stopRecording()
  }

  function cleanup() {
    hideSubtitle()
    setEmotion('neutral')
    stopBGM()
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
    const res = await fetch(audioUrl)
    const arrayBuffer = await res.arrayBuffer()
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)

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

// 瞬き制御
let blinkTimer = 0
let nextBlinkAt = randomBlinkInterval()
let blinkPhase = 0  // 0=待機, 1=閉じ中, 2=開き中
let blinkValue = 0
const BLINK_CLOSE_SPEED = 12  // 閉じる速さ
const BLINK_OPEN_SPEED = 6    // 開く速さ

function randomBlinkInterval() {
  return 2 + Math.random() * 4  // 2〜6秒
}

function updateBlink(delta) {
  if (!currentVRM) return

  blinkTimer += delta

  if (blinkPhase === 0) {
    // 待機中
    if (blinkTimer >= nextBlinkAt) {
      blinkPhase = 1
      blinkTimer = 0
    }
  } else if (blinkPhase === 1) {
    // 閉じ中
    blinkValue = Math.min(1, blinkValue + delta * BLINK_CLOSE_SPEED)
    if (blinkValue >= 1) {
      blinkPhase = 2
    }
  } else if (blinkPhase === 2) {
    // 開き中
    blinkValue = Math.max(0, blinkValue - delta * BLINK_OPEN_SPEED)
    if (blinkValue <= 0) {
      blinkPhase = 0
      blinkTimer = 0
      nextBlinkAt = randomBlinkInterval()
      // たまに連続瞬き
      if (Math.random() < 0.15) nextBlinkAt = 0.2
    }
  }

  currentVRM.expressionManager?.setValue('blink', blinkValue)
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
    updateBlink(delta)
    updateIdleSway(delta)
    currentVRM.update(delta)
  }
  if (mixer) mixer.update(delta)

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
    case 'play-default-setlist':
      loadAndPlayDefaultSetlist()
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
document.getElementById('fileInput').addEventListener('change', (e) => {
  const file = e.target.files[0]
  if (!file) return
  loadVRM(URL.createObjectURL(file))
  e.target.value = ''
})

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
  // 保存済みカメラ位置を復元
  const hasSavedCamera = await loadCameraPosition()

  try {
    const defaultVRM = chrome.runtime.getURL('viewer/default_model.vrm')
    const res = await fetch(defaultVRM, { method: 'HEAD' })
    if (res.ok) {
      await loadVRM(defaultVRM)
      // VRM読み込み後に保存済みカメラ位置を再適用（loadVRMがカメラを動かすため）
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
        await speak(cleanReply)
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
// 録画ボタン
// ============================================
document.getElementById('recordBtn')?.addEventListener('click', () => {
  if (isRecording) {
    stopRecording()
  } else {
    startRecording()
  }
})
