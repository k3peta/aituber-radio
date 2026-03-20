// ============================================
// 拡張機能ID 表示 & コピー
// ============================================
document.getElementById('extId').textContent = chrome.runtime.id
document.getElementById('copyExtId').addEventListener('click', () => {
  navigator.clipboard.writeText(chrome.runtime.id)
  document.getElementById('copyExtId').textContent = '✅ コピー済'
  setTimeout(() => { document.getElementById('copyExtId').textContent = '📋 コピー' }, 2000)
})

// ============================================
// Helper: ビューワータブにメッセージを送る
// ============================================
async function sendToViewer(action, data = {}) {
  const tabs = await chrome.tabs.query({})
  const viewerUrl = chrome.runtime.getURL('viewer/index.html')
  const viewerTab = tabs.find(t => t.url && t.url.startsWith(viewerUrl))

  if (!viewerTab) {
    document.getElementById('statusText').textContent = 'ビューワーが開いていません'
    document.getElementById('statusDot').className = 'dot dot-yellow'
    return null
  }

  try {
    const response = await chrome.tabs.sendMessage(viewerTab.id, { action, ...data })
    return response
  } catch (e) {
    if (e.message?.includes('message channel closed')) return null
    console.error('sendToViewer error:', e)
    return null
  }
}

// ============================================
// ビューワーを開く
// ============================================
document.getElementById('openViewer').addEventListener('click', async () => {
  const viewerUrl = chrome.runtime.getURL('viewer/index.html')
  const tabs = await chrome.tabs.query({})
  const existing = tabs.find(t => t.url && t.url.startsWith(viewerUrl))

  if (existing) {
    chrome.tabs.update(existing.id, { active: true })
  } else {
    chrome.tabs.create({ url: viewerUrl })
  }
})

// ============================================
// ラジオ — フォルダ読み込み + 台本セレクター
// ============================================

// フォルダ読み込み
document.getElementById('loadContentFolder').addEventListener('click', () => {
  sendToViewer('load-folder')
  // フォルダ選択後にスクリプトリスト & ファイルリストを更新
  const check = setInterval(async () => {
    await refreshScriptSelector()
    const r = await sendToViewer('get-file-list')
    if (r && ((r.readings && r.readings.length > 0) || (r.media && r.media.length > 0))) {
      refreshFileList()
      clearInterval(check)
    }
  }, 2000)
  setTimeout(() => clearInterval(check), 30000)
})

// 台本直接読み込み
document.getElementById('loadScript').addEventListener('click', () => {
  sendToViewer('load-script')
})

// 台本セレクター（プルダウン）を更新
async function refreshScriptSelector() {
  const data = await chrome.storage.local.get(['availableScripts'])
  const scripts = data.availableScripts || []
  const area = document.getElementById('scriptSelectorArea')
  const select = document.getElementById('scriptSelector')

  if (scripts.length === 0) {
    area.style.display = 'none'
    return
  }

  area.style.display = 'block'
  select.innerHTML = ''
  for (const s of scripts) {
    const opt = document.createElement('option')
    opt.value = s.name
    const icon = s.isSetlist ? '📻' : '📖'
    opt.textContent = `${icon} ${s.title}`
    select.appendChild(opt)
  }

  // 前回選択を復元
  const stored = await chrome.storage.local.get(['lastScriptName'])
  if (stored.lastScriptName) {
    const match = scripts.find(s => s.name === stored.lastScriptName)
    if (match) select.value = match.name
  }
}

// セレクター変更時に lastScript を更新
document.getElementById('scriptSelector').addEventListener('change', async (e) => {
  const data = await chrome.storage.local.get(['availableScripts'])
  const scripts = data.availableScripts || []
  const selected = scripts.find(s => s.name === e.target.value)
  if (selected) {
    await chrome.storage.local.set({ lastScript: selected.content, lastScriptName: selected.name })
  }
})

// ポップアップ起動時にセレクター復元
refreshScriptSelector()

// ============================================
// ラジオ — 再生制御（ウェイト対応）
// ============================================
let countdownTimer = null

document.getElementById('playDefault').addEventListener('click', async () => {
  const delay = parseInt(document.getElementById('startDelay').value) || 0

  // セレクターで台本が選ばれている場合はそれを再生
  const select = document.getElementById('scriptSelector')
  const scriptName = select && select.value ? select.value : null

  if (delay > 0) {
    // カウントダウン表示
    const btn = document.getElementById('playDefault')
    const originalText = btn.innerHTML
    let remaining = delay

    countdownTimer = setInterval(() => {
      remaining--
      if (remaining <= 0) {
        clearInterval(countdownTimer)
        countdownTimer = null
        btn.innerHTML = originalText
        doPlay(scriptName)
      } else {
        btn.innerHTML = `⏳ ${remaining}秒...`
      }
    }, 1000)
    btn.innerHTML = `⏳ ${remaining}秒...`
  } else {
    doPlay(scriptName)
  }
})

function doPlay(scriptName) {
  if (scriptName) {
    sendToViewer('play-script', { scriptName })
  } else {
    sendToViewer('play-default-setlist')
  }
}

document.getElementById('stopPlayback').addEventListener('click', () => {
  // カウントダウン中ならキャンセル
  if (countdownTimer) {
    clearInterval(countdownTimer)
    countdownTimer = null
    document.getElementById('playDefault').innerHTML = '▶️ 再生 <span class="shortcut">⌥⇧S</span>'
  }
  sendToViewer('stop-playback')
})

// 開始ウェイトの永続化
document.getElementById('startDelay').addEventListener('change', (e) => {
  chrome.storage.local.set({ startDelay: parseInt(e.target.value) || 0 })
})
chrome.storage.local.get(['startDelay'], (data) => {
  if (data.startDelay) document.getElementById('startDelay').value = data.startDelay
})

// フリートーク & ローカルチャット
document.getElementById('freeTalk').addEventListener('click', () => {
  sendToViewer('free-talk')
})

document.getElementById('toggleLocalChat').addEventListener('click', () => {
  sendToViewer('toggle-local-chat')
})

// ============================================
// セットアップ
// ============================================
document.getElementById('loadVRM').addEventListener('click', () => {
  sendToViewer('load-vrm')
})

document.getElementById('changeBG').addEventListener('click', () => {
  sendToViewer('change-bg')
})

// ============================================
// 詳細設定
// ============================================

// 朗読順の永続化
document.querySelectorAll('input[name="readOrder"]').forEach(radio => {
  radio.addEventListener('change', () => {
    chrome.storage.local.set({ readOrder: radio.value })
  })
})
chrome.storage.local.get(['readOrder'], (result) => {
  const order = result.readOrder || 'random'
  const el = document.getElementById(order === 'sequential' ? 'readOrderSeq' : 'readOrderRandom')
  if (el) el.checked = true
})

// ファイルリスト取得・表示
async function refreshFileList() {
  const result = await sendToViewer('get-file-list')
  if (!result) return
  const el = document.getElementById('fileListContent')
  if (!el) return

  let html = ''
  if (result.readings && result.readings.length > 0) {
    html += '<div style="color:#e94560;margin-bottom:2px">📖 readings/</div>'
    for (const f of result.readings) {
      html += `<div style="padding-left:12px">• ${f}</div>`
    }
  }
  if (result.media && result.media.length > 0) {
    html += '<div style="color:#4ca6ff;margin-top:4px;margin-bottom:2px">🎵 media/</div>'
    for (const f of result.media) {
      html += `<div style="padding-left:12px">• ${f}</div>`
    }
  }
  if (!html) {
    html = '<div style="color:#666">まだ読み込まれていません</div>'
  }
  el.innerHTML = html
}

refreshFileList()

// テスト
document.getElementById('testSpeak').addEventListener('click', () => {
  sendToViewer('test-speak')
})

document.getElementById('testEmotion').addEventListener('click', () => {
  sendToViewer('cycle-emotion')
})

// カメラ
document.getElementById('saveCamera').addEventListener('click', () => {
  sendToViewer('save-camera')
})

document.getElementById('resetCamera').addEventListener('click', () => {
  sendToViewer('reset-camera')
})

// プリフェッチ
document.getElementById('prefetchEnabled').addEventListener('change', (e) => {
  chrome.storage.local.set({ prefetchEnabled: e.target.checked })
  if (e.target.checked) {
    sendToViewer('start-prefetch')
  }
})
chrome.storage.local.get(['prefetchEnabled'], (data) => {
  document.getElementById('prefetchEnabled').checked = !!data.prefetchEnabled
})

// ============================================
// LLM プロバイダープリセット
// ============================================
const LLM_PRESETS = {
  gemini: {
    url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
    model: 'gemini-3.1-flash-lite-preview',
    keyPlaceholder: 'Google AI Studio API Key',
  },
  openai: {
    url: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-5.4-nano',
    keyPlaceholder: 'OpenAI API Key (sk-...)',
  },
  claude: {
    url: 'https://api.anthropic.com/v1/messages',
    model: 'claude-haiku-4-5-20251001',
    keyPlaceholder: 'Anthropic API Key (sk-ant-...)',
  },
  ollama: {
    url: 'http://localhost:11434/v1/chat/completions',
    model: 'llama3.2',
    keyPlaceholder: '（不要 — 空欄でOK）',
  },
  custom: {
    url: '',
    model: '',
    keyPlaceholder: 'API Key',
  },
}

document.getElementById('llmProvider').addEventListener('change', (e) => {
  const preset = LLM_PRESETS[e.target.value]
  if (!preset) return
  document.getElementById('llmApiUrl').value = preset.url
  document.getElementById('llmModel').value = preset.model
  document.getElementById('llmApiKey').placeholder = preset.keyPlaceholder
})

document.getElementById('saveLLMSettings').addEventListener('click', async () => {
  const provider = document.getElementById('llmProvider').value
  const url = document.getElementById('llmApiUrl').value.trim()
  const key = document.getElementById('llmApiKey').value.trim()
  const model = document.getElementById('llmModel').value.trim()

  const settings = { llmProvider: provider }
  if (url) settings.llmApiUrl = url
  if (key) settings.llmApiKey = key
  if (model) settings.llmModel = model

  await chrome.storage.local.set(settings)
  document.getElementById('llmStatus').textContent = '✅ 保存しました'
  setTimeout(() => {
    document.getElementById('llmStatus').textContent = ''
  }, 2000)
})

// 保存済み設定を復元
chrome.storage.local.get(['llmApiUrl', 'llmApiKey', 'llmModel', 'llmProvider'], (data) => {
  if (data.llmProvider) {
    document.getElementById('llmProvider').value = data.llmProvider
    const preset = LLM_PRESETS[data.llmProvider]
    if (preset) {
      document.getElementById('llmApiKey').placeholder = preset.keyPlaceholder
    }
  }
  if (data.llmApiUrl) document.getElementById('llmApiUrl').value = data.llmApiUrl
  if (data.llmApiKey) document.getElementById('llmApiKey').value = data.llmApiKey
  if (data.llmModel) document.getElementById('llmModel').value = data.llmModel
})

// ============================================
// TTS エンジン設定
// ============================================
const TTS_PORTS = { voicevox: 50021, sbv2: 5000, custom: 50021 }

// エンジン選択時にポートを自動切替
document.querySelectorAll('input[name="ttsEngine"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const engine = radio.value
    document.getElementById('ttsPort').value = TTS_PORTS[engine] || 50021
    document.getElementById('ttsModelGroup').style.display = engine === 'sbv2' ? 'block' : 'none'
  })
})

// 保存
document.getElementById('saveTTSSettings').addEventListener('click', async () => {
  const engine = document.querySelector('input[name="ttsEngine"]:checked').value
  const port = parseInt(document.getElementById('ttsPort').value) || TTS_PORTS[engine]
  const modelId = parseInt(document.getElementById('ttsModelId').value) || 0

  await chrome.storage.local.set({ ttsEngine: engine, ttsPort: port, ttsModelId: modelId })

  // ビューワーにも通知
  await sendToViewer('update-tts-settings', { ttsEngine: engine, ttsPort: port, ttsModelId: modelId })

  document.getElementById('ttsStatus').textContent = '✅ 保存しました'
  setTimeout(() => { document.getElementById('ttsStatus').textContent = '' }, 2000)
})

// 復元
chrome.storage.local.get(['ttsEngine', 'ttsPort', 'ttsModelId'], (data) => {
  if (data.ttsEngine) {
    const radioId = { sbv2: 'ttsSbv2', custom: 'ttsCustom', browser: 'ttsBrowser', voicevox: 'ttsVoicevox' }[data.ttsEngine] || 'ttsVoicevox'
    const radio = document.getElementById(radioId)
    if (radio) radio.checked = true
    document.getElementById('ttsModelGroup').style.display = data.ttsEngine === 'sbv2' ? 'block' : 'none'
  }
  if (data.ttsPort) document.getElementById('ttsPort').value = data.ttsPort
  if (data.ttsModelId !== undefined) document.getElementById('ttsModelId').value = data.ttsModelId
})

// ============================================
// キャラクター設定
// ============================================
const DEFAULT_CHARACTER_PROMPT = `あなたはラジオパーソナリティです。

【キャラクター】
- 語尾: 「〜っす」「〜っすよ」を自然に使う（3-4文に1回程度）
- 一人称: あたし
- リスナーの呼び方: 先輩、先輩方
- 性格: 明るくてちょっとおっちょこちょい、でも怪談の時は真面目
- テンション: ラジオっぽく、語りかける感じ

【話し方のルール】
1. 必ず自分の体験として語る（「こないだ」「この前」等で始める）
2. 具体的な場所・人物・時間を入れてリアリティを出す
3. リスナーへの問いかけを2-3回入れる
4. 笑いや驚きのリアクションを入れる
5. ★絶対禁止★ 「配信終わり」「今日はここまで」等の締め・終了宣言`

document.getElementById('saveCharacter').addEventListener('click', async () => {
  const prompt = document.getElementById('characterPrompt').value.trim()
  await chrome.storage.local.set({ characterPrompt: prompt })
  document.getElementById('charStatus').textContent = '✅ 保存しました'
  setTimeout(() => { document.getElementById('charStatus').textContent = '' }, 2000)
})

document.getElementById('resetCharacter').addEventListener('click', async () => {
  document.getElementById('characterPrompt').value = DEFAULT_CHARACTER_PROMPT
  await chrome.storage.local.set({ characterPrompt: DEFAULT_CHARACTER_PROMPT })
  document.getElementById('charStatus').textContent = '🔄 デフォルトに戻しました'
  setTimeout(() => { document.getElementById('charStatus').textContent = '' }, 2000)
})

chrome.storage.local.get(['characterPrompt'], (data) => {
  document.getElementById('characterPrompt').value = data.characterPrompt || DEFAULT_CHARACTER_PROMPT
})

// ============================================
// 起動時チェック
// ============================================
;(async () => {
  const statusText = document.getElementById('statusText')
  const statusDot = document.getElementById('statusDot')
  const aiText = document.getElementById('aiText')
  const aiDot = document.getElementById('aiDot')

  // VOICEVOX チェック
  try {
    const res = await fetch('http://localhost:50021/version')
    if (res.ok) {
      const version = await res.text()
      statusText.textContent = `VOICEVOX ${version}`
      statusDot.className = 'dot dot-green'
    }
  } catch {
    statusText.textContent = 'VOICEVOX 未検出'
    statusDot.className = 'dot dot-red'
  }

  // AI チェック — LLM 設定があるかどうか
  const data = await chrome.storage.local.get(['llmProvider', 'llmApiKey'])
  if (data.llmApiKey) {
    const providerName = {
      gemini: 'Gemini',
      openai: 'OpenAI',
      claude: 'Claude',
      ollama: 'Ollama',
      custom: 'カスタム'
    }[data.llmProvider] || data.llmProvider || 'AI'
    aiText.textContent = `${providerName} 設定済み`
    aiDot.className = 'dot dot-green'
  } else if (data.llmProvider === 'ollama') {
    aiText.textContent = 'Ollama 設定済み'
    aiDot.className = 'dot dot-green'
  } else {
    aiText.textContent = 'AI 未設定（⚙️ AI接続設定 から設定）'
    aiDot.className = 'dot dot-yellow'
  }
})()
