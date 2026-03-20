// ============================================
// 動的コンテンツ取得（ニュース、天気、今日は何の日）
// viewer.js 本体への依存なし — 完全独立モジュール
// ============================================

/**
 * Google News RSS からニュース見出しを取得
 * @param {number} count 取得件数
 * @returns {Promise<string[]>}
 */
export async function fetchNews(count = 5) {
  const RSS_URL = 'https://news.google.com/rss?hl=ja&gl=JP&ceid=JP:ja'
  const CORS_PROXIES = [
    url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    url => url  // 直接（CORS拡張がある場合）
  ]

  for (const proxy of CORS_PROXIES) {
    try {
      const res = await fetch(proxy(RSS_URL), { signal: AbortSignal.timeout(8000) })
      if (!res.ok) continue
      const text = await res.text()
      const parser = new DOMParser()
      const xml = parser.parseFromString(text, 'text/xml')
      const items = xml.querySelectorAll('item')
      const news = []
      for (let i = 0; i < Math.min(count, items.length); i++) {
        const title = items[i].querySelector('title')?.textContent || ''
        if (title && !title.includes('Google News')) {
          news.push(title.replace(/ - [^-]+$/, '').trim())
        }
      }
      if (news.length > 0) {
        console.log(`📰 ニュース ${news.length} 件取得`)
        return news
      }
    } catch (e) {
      console.warn('News fetch failed:', e.message)
    }
  }
  console.warn('📰 ニュース取得失敗')
  return []
}

/**
 * 気象庁 API から天気予報を取得
 * @returns {Promise<Array<{area, city, telop, maxTemp, minTemp, rainChance}>>}
 */
export async function fetchWeather() {
  // 気象庁の地域コード
  const REGIONS = [
    { area: '北海道', code: '016000', city: '札幌' },
    { area: '東北', code: '040000', city: '仙台' },
    { area: '関東', code: '130000', city: '東京' },
    { area: '北陸', code: '150000', city: '新潟' },
    { area: '中部', code: '230000', city: '名古屋' },
    { area: '近畿', code: '270000', city: '大阪' },
    { area: '中国', code: '340000', city: '広島' },
    { area: '四国', code: '390000', city: '高松' },
    { area: '九州', code: '400000', city: '福岡' },
    { area: '沖縄', code: '471000', city: '那覇' },
  ]

  const results = []
  for (const region of REGIONS) {
    try {
      const res = await fetch(
        `https://weather.tsukumijima.net/api/forecast/city/${region.code}`,
        { signal: AbortSignal.timeout(5000) }
      )
      if (!res.ok) continue
      const data = await res.json()
      const today = data.forecasts?.[0]
      if (today) {
        results.push({
          area: region.area,
          city: region.city,
          telop: today.telop || '不明',
          maxTemp: today.temperature?.max?.celsius || '--',
          minTemp: today.temperature?.min?.celsius || '--',
          rainChance: today.chanceOfRain?.T12_18 || today.chanceOfRain?.T06_12 || ''
        })
      }
    } catch (e) {
      // 1地域失敗しても他は続行
    }
  }
  console.log(`🌤️ 天気情報 ${results.length}/${REGIONS.length} 地域取得`)
  return results
}

/**
 * 今日は何の日を取得（Wikipedia API）
 * @param {number} count 取得件数
 * @returns {Promise<string[]>}
 */
export async function fetchTodayInHistory(count = 5) {
  const now = new Date()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const title = `${month}月${day}日`

  try {
    const res = await fetch(
      `https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      { signal: AbortSignal.timeout(8000) }
    )
    if (!res.ok) return []
    const data = await res.json()
    const extract = data.extract || ''
    const events = extract.split(/[。\n]/).filter(s => s.trim().length > 10)
    console.log(`📅 今日は何の日: ${events.length}件`)
    return events.slice(0, count)
  } catch (e) {
    console.warn('Today in history fetch failed:', e.message)
    return []
  }
}
