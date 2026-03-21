// ============================================
// 録画機能（合成Canvas方式 — 権限不要）
// ============================================

let mediaRecorder = null
let recordedChunks = []
let isRecording = false
let recordingStartTime = 0

// recording fade control
let recordFadeAlpha = 0
let recordFadeStart = 0
let recordSplashImg = null
const RECORD_FADE_DURATION = 1500

let capturedStream = null
let compositeCanvas = null
let compositeCtx = null
let compositeAnimFrame = null

// 録画用AudioNode（外部から設定）
let recordDest = null
let masterGain = null

/**
 * 録画用のAudioNodeを初期化
 * @param {AudioContext} audioCtx
 * @returns {{ recordDest: MediaStreamAudioDestinationNode, masterGain: GainNode }}
 */
export function initRecordingAudio(audioCtx) {
  recordDest = audioCtx.createMediaStreamDestination()
  masterGain = audioCtx.createGain()
  masterGain.connect(audioCtx.destination)
  masterGain.connect(recordDest)

  // 録画用: 無音トーン（A/Vズレ防止 — オーディオストリームを常時維持）
  const silentOsc = audioCtx.createOscillator()
  const silentGain = audioCtx.createGain()
  silentOsc.frequency.value = 0
  silentGain.gain.value = 0.0001
  silentOsc.connect(silentGain)
  silentGain.connect(recordDest)
  silentOsc.start()

  return { recordDest, masterGain }
}

export function getRecordDest() { return recordDest }
export function getMasterGain() { return masterGain }
export function getIsRecording() { return isRecording }

// ============================================
// 合成レンダリング
// ============================================

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
  const subtitleBox = document.getElementById('subtitle-box')
  const subtitleTitle = document.getElementById('subtitle-title')
  const subtitleText = document.getElementById('subtitle-text')
  const pngtuberLayer = document.getElementById('pngtuber-layer')

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

    updateBgImage()

    // 1. 背景
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, W, H)
    if (bgImage && bgImage.complete && bgImage.naturalWidth) {
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
    const grad = ctx.createLinearGradient(0, 0, 0, H)
    grad.addColorStop(0, 'rgba(0,0,0,0.15)')
    grad.addColorStop(0.4, 'rgba(0,0,0,0.05)')
    grad.addColorStop(0.8, 'rgba(0,0,0,0.3)')
    grad.addColorStop(1, 'rgba(0,0,0,0.7)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, W, H)

    // 2. PNGTuber
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
          break
        }
      }
    }

    // 3. VRM Canvas (WebGL)
    if (!pngtuberLayer || pngtuberLayer.style.display === 'none') {
      try {
        ctx.drawImage(srcCanvas, 0, 0, W, H)
      } catch (e) { /* WebGL context lost */ }
    }

    // 4. フロート画像（図表・スライド）
    const floatOverlay = document.getElementById('float-overlay')
    const floatImage = document.getElementById('float-image')
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
        // 白背景カード
        const pad = 16
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
        ctx.shadowColor = 'rgba(0, 0, 0, 0.6)'
        ctx.shadowBlur = 32
        ctx.beginPath()
        const cr = 12
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
        ctx.restore()
        console.warn('Float image draw failed (CORS?):', e.message)
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
      ctx.globalAlpha = 0.3
      ctx.strokeStyle = '#e94560'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()

      const titleTextContent = subtitleTitle?.textContent || ''
      const mainTextContent = subtitleText?.textContent || ''
      const fontSize = isVertical ? Math.round(W / 30) : Math.round(W / 68)
      const titleFontSize = Math.round(fontSize * 0.78)
      let textY = boxY + 30

      if (titleTextContent) {
        ctx.font = `bold ${titleFontSize}px "Noto Sans JP", sans-serif`
        ctx.fillStyle = '#e94560'
        ctx.fillText(titleTextContent, boxX + 32, textY + titleFontSize)
        textY += titleFontSize + 8
      }

      ctx.font = `${fontSize}px "Noto Sans JP", sans-serif`
      ctx.fillStyle = '#e8e8e8'
      const maxTextW = boxW - 64
      const words = mainTextContent.split('')
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

// ============================================
// 公開API
// ============================================

export async function startRecording(silent = false) {
  if (isRecording) return

  try {
    isRecording = true
    startCompositeRender()

    const compStream = compositeCanvas.captureStream(30)
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

export function stopRecording() {
  if (!isRecording || !mediaRecorder) return
  mediaRecorder.stop()
  isRecording = false
  updateRecordButton()
  console.log('Recording stopped')
}

export function updateRecordButton() {
  const btn = document.getElementById('recordBtn')
  const statusEl = document.getElementById('status')
  const hint = document.getElementById('controls-hint')
  if (!btn) return
  if (isRecording) {
    btn.textContent = '⏹ 録画停止'
    btn.style.background = '#c62828'
    setTimeout(() => {
      if (isRecording) btn.style.opacity = '0'
    }, 2000)
    btn.onmouseenter = () => { btn.style.opacity = '1' }
    btn.onmouseleave = () => { if (isRecording) btn.style.opacity = '0' }
    if (statusEl) statusEl.style.display = 'none'
    if (hint) hint.style.display = 'none'
    document.body.style.cursor = 'none'
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
    if (statusEl) statusEl.style.display = ''
    if (hint) hint.style.display = ''
    document.body.style.cursor = ''
  }
}

// エクスポート: フェード関連（他モジュールから参照）
export { recordFadeAlpha, recordFadeStart, recordSplashImg, RECORD_FADE_DURATION }
