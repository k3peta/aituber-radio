#!/usr/bin/env node
/**
 * AITuber Radio — 朝の番組台本 自動生成スクリプト
 *
 * ニュース・天気・今日は何の日をスクレイピングし、
 * LLM で15分ラジオ台本を生成して setlist.md に出力する。
 *
 * 使い方:
 *   GEMINI_API_KEY=xxx node pipeline/generate.js
 *   → output/YYYY-MM-DD/setlist.md
 */

const fs = require('fs')
const path = require('path')

// ============================================
// Config
// ============================================
const LLM_API_URL = process.env.LLM_API_URL || 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions'
const LLM_API_KEY = process.env.GEMINI_API_KEY || process.env.LLM_API_KEY || ''
const LLM_MODEL = process.env.LLM_MODEL || 'gemini-3.1-flash-lite-preview'
const OUTPUT_DIR = process.env.OUTPUT_DIR || path.join(__dirname, '..', 'output')

// ============================================
// 日付ユーティリティ
// ============================================
function getToday() {
  const now = new Date()
  // JST
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000)
  const year = jst.getUTCFullYear()
  const month = jst.getUTCMonth() + 1
  const day = jst.getUTCDate()
  const weekdays = ['日', '月', '火', '水', '木', '金', '土']
  const weekday = weekdays[jst.getUTCDay()]
  return {
    year, month, day, weekday,
    dateStr: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
    displayDate: `${year}年${month}月${day}日（${weekday}）`
  }
}

// ============================================
// ニューススクレイピング（NHK RSS）
// ============================================
async function fetchNews() {
  try {
    const res = await fetch('https://www.nhk.or.jp/rss/news/cat0.xml')
    const xml = await res.text()

    // 簡易XMLパース（タイトル抽出）
    const items = []
    const regex = /<item>[\s\S]*?<title><!\[CDATA\[(.*?)\]\]><\/title>[\s\S]*?<\/item>/g
    let match
    while ((match = regex.exec(xml)) !== null && items.length < 5) {
      items.push(match[1])
    }

    // CDATA なしパターンも試行
    if (items.length === 0) {
      const regex2 = /<item>\s*<title>(.*?)<\/title>/g
      while ((match = regex2.exec(xml)) !== null && items.length < 5) {
        if (!match[1].includes('NHK')) items.push(match[1])
      }
    }

    console.log(`📰 ニュース: ${items.length}件取得`)
    return items
  } catch (e) {
    console.warn('⚠️ ニュース取得失敗:', e.message)
    return []
  }
}

// ============================================
// 天気予報（wttr.in — APIキー不要）
// ============================================
async function fetchWeather(city = 'Tokyo') {
  try {
    const res = await fetch(`https://wttr.in/${city}?format=j1`)
    const data = await res.json()
    const current = data.current_condition?.[0]
    const today = data.weather?.[0]

    if (!current || !today) return null

    const weather = {
      temp: current.temp_C,
      feelsLike: current.FeelsLikeC,
      desc: current.lang_ja?.[0]?.value || current.weatherDesc?.[0]?.value || '',
      maxTemp: today.maxtempC,
      minTemp: today.mintempC,
      rainChance: today.hourly?.[4]?.chanceofrain || '0',
      humidity: current.humidity
    }

    console.log(`🌤️ 天気: ${weather.desc} ${weather.temp}°C`)
    return weather
  } catch (e) {
    console.warn('⚠️ 天気取得失敗:', e.message)
    return null
  }
}

// ============================================
// 今日は何の日（Wikipedia）
// ============================================
async function fetchTodayInHistory(month, day) {
  try {
    const url = `https://ja.wikipedia.org/api/rest_v1/feed/onthisday/events/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`
    const res = await fetch(url, { headers: { 'User-Agent': 'AITuberRadio/1.0' } })
    const data = await res.json()

    const events = (data.events || [])
      .filter(e => e.year > 1900)
      .sort((a, b) => b.year - a.year)
      .slice(0, 3)
      .map(e => `${e.year}年: ${e.text}`)

    console.log(`📅 今日は何の日: ${events.length}件`)
    return events
  } catch (e) {
    console.warn('⚠️ 今日は何の日 取得失敗:', e.message)
    return []
  }
}

// ============================================
// LLM で台本生成
// ============================================
async function generateScript(context) {
  if (!LLM_API_KEY) {
    console.error('❌ GEMINI_API_KEY または LLM_API_KEY を設定してください')
    process.exit(1)
  }

  const { today, news, weather, todayInHistory } = context

  const newsSection = news.length > 0
    ? `【今日のニュース（情報源: NHK）】\n${news.map((n, i) => `${i + 1}. ${n}`).join('\n')}`
    : '【ニュースは取得できませんでした。スキップしてください。】'

  const weatherSection = weather
    ? `【天気予報（東京）】\n現在: ${weather.desc} ${weather.temp}°C（体感${weather.feelsLike}°C）\n最高${weather.maxTemp}°C / 最低${weather.minTemp}°C\n降水確率: ${weather.rainChance}%\n湿度: ${weather.humidity}%`
    : '【天気情報は取得できませんでした。スキップしてください。】'

  const historySection = todayInHistory.length > 0
    ? `【今日は何の日】\n${todayInHistory.join('\n')}`
    : '【今日は何の日の情報は取得できませんでした。適当な雑学で埋めてください。】'

  const prompt = `あなたはAIラジオパーソナリティ「怪談ちゃん」です。
元気で明るい女の子キャラで、朝のラジオ番組「怪談ちゃんのおはようラジオ」のパーソナリティです。

以下の情報を使って、15分程度の朝のラジオ番組の台本を作ってください。

【日付】${today.displayDate}

${newsSection}

${weatherSection}

${historySection}

【台本のルール】
- YAML frontmatter を含むセットリスト形式で出力
- frontmatter: title, speaker: 38, speed: 0.95, pause_between: 800
- セグメントは [type: talk], [type: jingle] 等を使用
- BGM指定: [bgm: media/bgm_chill.mp3]（最初のtalkセグメントのみ）
- 感情指定: [emotion: happy/neutral/surprised/sad], [intensity: 0.5-1.0]
- 1行は自然な一文の長さに
- 口語体で自然な話し方
- ニュースは2〜3本ピックアップして自分の感想も交えて紹介
- 天気は傘が必要かどうかなど実用的アドバイスも
- 「行ってらっしゃい」で締める

【番組構成】
1. オープニングジングル + 挨拶「おはようございます！怪談ちゃんのおはようラジオ！」
2. 今日は何の日コーナー（さらっとトリビア紹介）
3. ニュースコーナー（2〜3本、感想交え）
4. 天気予報コーナー（服装アドバイス付き）
5. 今日の一言（ポジティブなメッセージ）
6. エンディング「行ってらっしゃい！」+ ジングル

台本のみ出力してください。説明は不要です。`

  const res = await fetch(LLM_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${LLM_API_KEY}`
    },
    body: JSON.stringify({
      model: LLM_MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4000,
      temperature: 0.8
    })
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`LLM API error (${res.status}): ${err}`)
  }

  const data = await res.json()
  let script = data.choices?.[0]?.message?.content || ''

  // マークダウンコードブロックを除去
  script = script.replace(/^```(?:markdown|md|yaml)?\n?/m, '').replace(/\n?```$/m, '')

  console.log(`📝 台本生成完了: ${script.split('\n').length}行`)
  return script
}

// ============================================
// メイン
// ============================================
async function main() {
  console.log('🎙️ AITuber Radio — 朝の番組台本生成')
  console.log('='.repeat(50))

  const today = getToday()
  console.log(`📅 ${today.displayDate}`)

  // 並列でデータ取得
  const [news, weather, todayInHistory] = await Promise.all([
    fetchNews(),
    fetchWeather(),
    fetchTodayInHistory(today.month, today.day)
  ])

  // 台本生成
  const script = await generateScript({ today, news, weather, todayInHistory })

  // 出力
  const outDir = path.join(OUTPUT_DIR, today.dateStr)
  fs.mkdirSync(outDir, { recursive: true })

  const outPath = path.join(outDir, 'setlist.md')
  fs.writeFileSync(outPath, script, 'utf-8')

  console.log(`\n✅ 出力: ${outPath}`)
  console.log(`📊 ${script.split('\n').length}行、${script.length}文字`)

  // メタ情報も保存
  const meta = {
    date: today.dateStr,
    displayDate: today.displayDate,
    newsCount: news.length,
    weatherAvailable: !!weather,
    historyCount: todayInHistory.length,
    generatedAt: new Date().toISOString()
  }
  fs.writeFileSync(path.join(outDir, 'meta.json'), JSON.stringify(meta, null, 2), 'utf-8')

  return outPath
}

main().catch(e => {
  console.error('❌ エラー:', e.message)
  process.exit(1)
})
