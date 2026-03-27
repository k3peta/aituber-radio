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

document.getElementById('freeTalkChain').addEventListener('click', () => {
  sendToViewer('free-talk-chain')
})

document.getElementById('toggleLocalChat').addEventListener('click', () => {
  sendToViewer('toggle-local-chat')
})

// ============================================
// セットアップ
// ============================================
document.getElementById('changeBG').addEventListener('click', () => {
  sendToViewer('change-bg')
})

document.getElementById('randomBG').addEventListener('click', () => {
  sendToViewer({ action: 'random-bg' })
})

// ============================================
// キャラクタースロット
// ============================================
// VOICEVOXスピーカーリスト
// ❗ viewer.js にも同様の VOICEVOX_SPEAKERS があります。片方を更新したら両方更新してください。
const VOICEVOX_SPEAKERS = [
  { id: 38, name: 'ずんだもん（ヒソヒソ）' },
  { id: 1,  name: 'ずんだもん（ノーマル）' },
  { id: 3,  name: 'ずんだもん（あまあま）' },
  { id: 5,  name: 'ずんだもん（ツンツン）' },
  { id: 7,  name: 'ずんだもん（セクシー）' },
  { id: 42, name: 'ずんだもん（ヘロヘロ）' },
  { id: 43, name: 'ずんだもん（なみだめ）' },
  { id: 0,  name: '四国めたん（ノーマル）' },
  { id: 2,  name: '四国めたん（あまあま）' },
  { id: 4,  name: '四国めたん（ツンツン）' },
  { id: 6,  name: '四国めたん（セクシー）' },
  { id: 8,  name: '春日部つむぎ' },
  { id: 9,  name: '雨晴はう' },
  { id: 10, name: '波音リツ' },
  { id: 11, name: '玄野武宏（ノーマル）' },
  { id: 12, name: '白上虎太郎（ふつう）' },
  { id: 13, name: '青山龍星' },
  { id: 14, name: '冥鳴ひまり' },
  { id: 20, name: 'もち子さん' },
  { id: 21, name: '剣崎雌雄' },
  { id: 23, name: 'WhiteCUL' },
  { id: 27, name: '後鬼' },
  { id: 29, name: 'No.7（ノーマル）' },
  { id: 46, name: '中国うさぎ' },
  { id: 47, name: '栗田まろん' },
  { id: 48, name: 'あいえるたん' },
  { id: 51, name: '満別花丸' },
  { id: 52, name: '琴詠ニア' },
]

// プルダウン初期化
function initSpeakerSelect(selectId, labelId, defaultId) {
  const select = document.getElementById(selectId)
  const label = document.getElementById(labelId)
  for (const s of VOICEVOX_SPEAKERS) {
    const opt = document.createElement('option')
    opt.value = s.id
    opt.textContent = s.name
    select.appendChild(opt)
  }
  select.value = defaultId
  if (label) label.textContent = defaultId
  select.addEventListener('change', () => {
    if (label) label.textContent = select.value
  })
}
initSpeakerSelect('charSpeaker0', 'charSpeakerId0', 38)
initSpeakerSelect('charSpeaker1', 'charSpeakerId1', 3)
// VRM読み込み
document.getElementById('loadCharVRM0').addEventListener('click', () => {
  const name = document.getElementById('charName0').value.trim()
  const speakerId = parseInt(document.getElementById('charSpeaker0').value) || 38
  sendToViewer('load-character-vrm', { slot: 0, name, speakerId })
  document.getElementById('charStatus0').textContent = '📂 選択中...'
})

document.getElementById('loadCharVRM1').addEventListener('click', () => {
  const name = document.getElementById('charName1').value.trim()
  const speakerId = parseInt(document.getElementById('charSpeaker1').value) || 3
  sendToViewer('load-character-vrm', { slot: 1, name, speakerId })
  document.getElementById('charStatus1').textContent = '📂 選択中...'
})

// 保存（キャラ設定 + カメラ位置）
document.getElementById('saveCharSlots').addEventListener('click', async () => {
  const chars = [
    { name: document.getElementById('charName0').value.trim(), speakerId: parseInt(document.getElementById('charSpeaker0').value) || 38, prompt: document.getElementById('charPrompt0').value.trim() },
    { name: document.getElementById('charName1').value.trim(), speakerId: parseInt(document.getElementById('charSpeaker1').value) || 3, prompt: document.getElementById('charPrompt1').value.trim() }
  ]
  const spacing = parseFloat(document.getElementById('charSpacing').value) || 0.5
  const angle = parseInt(document.getElementById('charAngle').value) || 20
  await chrome.storage.local.set({ characterSlots: chars, charSpacing: spacing, charAngle: angle })
  await sendToViewer('save-camera')  // カメラ位置を先に保存（update-charactersで上書きされないように）
  await sendToViewer('update-characters', { characters: chars, spacing, angle })
  document.getElementById('charSlotFeedback').textContent = '✅ 保存しました（カメラ含む）'
  setTimeout(() => { document.getElementById('charSlotFeedback').textContent = '' }, 2000)
})

// リセット（位置・角度・カメラ全リセット）
document.getElementById('resetCharSlots').addEventListener('click', async () => {
  // UIをデフォルトに戻す
  document.getElementById('charName0').value = '怪談ちゃん'
  document.getElementById('charSpeaker0').value = 38
  document.getElementById('charSpeakerId0').textContent = '38'
  document.getElementById('charPrompt0').value = ''
  document.getElementById('charName1').value = ''
  document.getElementById('charSpeaker1').value = 3
  document.getElementById('charSpeakerId1').textContent = '3'
  document.getElementById('charPrompt1').value = ''
  document.getElementById('charSpacing').value = 0.5
  document.getElementById('charSpacingVal').textContent = '0.5'
  document.getElementById('charAngle').value = 20
  document.getElementById('charAngleVal').textContent = '20°'

  // ストレージもリセット
  await chrome.storage.local.remove(['characterSlots', 'charSpacing', 'charAngle', 'cameraPosition'])
  await sendToViewer('reset-camera')
  await sendToViewer('update-characters', { spacing: 0.5, angle: 20 })
  document.getElementById('charSlotFeedback').textContent = '🔄 リセットしました'
  setTimeout(() => { document.getElementById('charSlotFeedback').textContent = '' }, 2000)
})

// 間隔・角度スライダー: リアルタイム反映（debounce付き）
let _sliderDebounce = null
function debouncedSendCharUpdate(data) {
  if (_sliderDebounce) clearTimeout(_sliderDebounce)
  _sliderDebounce = setTimeout(() => {
    sendToViewer('update-characters', data)
    _sliderDebounce = null
  }, 50)
}
document.getElementById('charSpacing').addEventListener('input', (e) => {
  document.getElementById('charSpacingVal').textContent = e.target.value
  debouncedSendCharUpdate({ spacing: parseFloat(e.target.value) })
})
document.getElementById('charAngle').addEventListener('input', (e) => {
  document.getElementById('charAngleVal').textContent = e.target.value + '°'
  debouncedSendCharUpdate({ angle: parseInt(e.target.value) })
})

// 復元
chrome.storage.local.get(['characterSlots', 'charSpacing', 'charAngle'], (data) => {
  if (data.characterSlots) {
    const slots = data.characterSlots
    if (slots[0]) {
      document.getElementById('charName0').value = slots[0].name || ''
      document.getElementById('charSpeaker0').value = slots[0].speakerId || 38
      document.getElementById('charSpeakerId0').textContent = slots[0].speakerId || 38
      document.getElementById('charPrompt0').value = slots[0].prompt || ''
    }
    if (slots[1]) {
      document.getElementById('charName1').value = slots[1].name || ''
      document.getElementById('charSpeaker1').value = slots[1].speakerId || 3
      document.getElementById('charSpeakerId1').textContent = slots[1].speakerId || 3
      document.getElementById('charPrompt1').value = slots[1].prompt || ''
    }
  }
  if (data.charSpacing !== undefined) {
    document.getElementById('charSpacing').value = data.charSpacing
    document.getElementById('charSpacingVal').textContent = data.charSpacing
  }
  if (data.charAngle !== undefined) {
    document.getElementById('charAngle').value = data.charAngle
    document.getElementById('charAngleVal').textContent = data.charAngle + '°'
  }
})

// ============================================
// 詳細設定
// ============================================

// テスト
document.getElementById('testSpeak').addEventListener('click', () => {
  sendToViewer('test-speak')
})

document.getElementById('testEmotion').addEventListener('click', () => {
  sendToViewer('cycle-emotion')
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
  const speakerId = parseInt(document.getElementById('ttsSpeakerId')?.value) || 0

  await chrome.storage.local.set({ ttsEngine: engine, ttsPort: port, ttsModelId: modelId, ttsSpeakerId: speakerId })

  // ビューワーにも通知
  await sendToViewer('update-tts-settings', { ttsEngine: engine, ttsPort: port, ttsModelId: modelId, ttsSpeakerId: speakerId })

  document.getElementById('ttsStatus').textContent = '✅ 保存しました'
  setTimeout(() => { document.getElementById('ttsStatus').textContent = '' }, 2000)
})

// 復元
chrome.storage.local.get(['ttsEngine', 'ttsPort', 'ttsModelId', 'ttsSpeakerId'], (data) => {
  if (data.ttsEngine) {
    const radioId = { sbv2: 'ttsSbv2', custom: 'ttsCustom', browser: 'ttsBrowser', voicevox: 'ttsVoicevox' }[data.ttsEngine] || 'ttsVoicevox'
    const radio = document.getElementById(radioId)
    if (radio) radio.checked = true
    document.getElementById('ttsModelGroup').style.display = data.ttsEngine === 'sbv2' ? 'block' : 'none'
  }
  if (data.ttsPort) document.getElementById('ttsPort').value = data.ttsPort
  if (data.ttsModelId !== undefined) document.getElementById('ttsModelId').value = data.ttsModelId
  if (data.ttsSpeakerId !== undefined) {
    const el = document.getElementById('ttsSpeakerId')
    if (el) el.value = data.ttsSpeakerId
  }
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

// DEFAULT_CHARACTER_PROMPT は charPrompt0 のデフォルト値としても使用
// 旧characterPromptからの移行: charPrompt0 に反映
chrome.storage.local.get(['characterPrompt'], (data) => {
  if (data.characterPrompt) {
    const el = document.getElementById('charPrompt0')
    if (el && !el.value) el.value = data.characterPrompt
  }
})

// ============================================
// 起動時チェック
// ============================================
;(async () => {
  const statusText = document.getElementById('statusText')
  const statusDot = document.getElementById('statusDot')
  const aiText = document.getElementById('aiText')
  const aiDot = document.getElementById('aiDot')

  // VOICEVOX チェック（保存済みポートを使用）
  try {
    const ttsData = await chrome.storage.local.get(['ttsPort'])
    const port = ttsData.ttsPort || 50021
    const res = await fetch(`http://localhost:${port}/version`)
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

// ============================================
// 自動化
// ============================================


// 毎朝アラーム設定
document.getElementById('dailyAlarmEnabled')?.addEventListener('change', async (e) => {
  const enabled = e.target.checked
  const time = document.getElementById('dailyAlarmTime')?.value || '07:00'
  await chrome.storage.local.set({ dailyAlarmEnabled: enabled, dailyAlarmTime: time })

  if (enabled) {
    await chrome.runtime.sendMessage({ action: 'set-daily-alarm', time })
  } else {
    await chrome.runtime.sendMessage({ action: 'clear-daily-alarm' })
  }
})

document.getElementById('dailyAlarmTime')?.addEventListener('change', async (e) => {
  const enabled = document.getElementById('dailyAlarmEnabled')?.checked
  const time = e.target.value
  await chrome.storage.local.set({ dailyAlarmTime: time })
  if (enabled) {
    await chrome.runtime.sendMessage({ action: 'set-daily-alarm', time })
  }
})

// 復元
chrome.storage.local.get(['dailyAlarmEnabled', 'dailyAlarmTime', 'autoRecordMorning', 'gestureSubdued'], (data) => {
  if (data.dailyAlarmEnabled) document.getElementById('dailyAlarmEnabled').checked = true
  if (data.dailyAlarmTime) document.getElementById('dailyAlarmTime').value = data.dailyAlarmTime
  if (data.autoRecordMorning) document.getElementById('autoRecordMorning').checked = true
  if (data.gestureSubdued) document.getElementById('gestureSubdued').checked = true
})

document.getElementById('autoRecordMorning')?.addEventListener('change', (e) => {
  chrome.storage.local.set({ autoRecordMorning: e.target.checked })
})

document.getElementById('gestureSubdued')?.addEventListener('change', (e) => {
  chrome.storage.local.set({ gestureSubdued: e.target.checked })
  sendToViewer({ action: 'set-gesture-subdued', value: e.target.checked })
})

