// ============================================
// Background Service Worker
// グローバルショートカットを受け取ってビューワーに転送
// ============================================

chrome.commands.onCommand.addListener(async (command) => {
  console.log('Command received:', command)

  const viewerUrl = chrome.runtime.getURL('viewer/index.html')
  const tabs = await chrome.tabs.query({})
  const viewerTab = tabs.find(t => t.url && t.url.startsWith(viewerUrl))

  if (!viewerTab) {
    // ビューワーが開いていなければ開く
    if (command === 'play-default') {
      const tab = await chrome.tabs.create({ url: viewerUrl })
      // タブ読み込み完了を待ってからメッセージ送信
      chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
        if (tabId === tab.id && info.status === 'complete') {
          chrome.tabs.onUpdated.removeListener(listener)
          // 少し待ってからデフォルト台本再生を指示
          setTimeout(() => {
            chrome.tabs.sendMessage(tab.id, { action: 'play-default-setlist' })
          }, 2000)
        }
      })
    }
    return
  }

  // ビューワーをアクティブにする
  chrome.tabs.update(viewerTab.id, { active: true })

  switch (command) {
    case 'play-default':
      chrome.tabs.sendMessage(viewerTab.id, { action: 'play-default-setlist' })
      break
    case 'stop-playback':
      chrome.tabs.sendMessage(viewerTab.id, { action: 'stop-playback' })
      break
  }
})

// ============================================
// External Message Handler (Station サイトからの指示)
// ============================================
chrome.runtime.onMessageExternal.addListener(async (msg, sender, sendResponse) => {
  console.log('External message:', msg, 'from:', sender.origin)

  // 拡張機能の存在確認
  if (msg.action === 'check-installed') {
    sendResponse({ installed: true, version: chrome.runtime.getManifest().version })
    return
  }

  // カード再生
  if (msg.action === 'play-card') {
    const card = msg.card
    if (!card || !card.setlist) {
      sendResponse({ error: 'Invalid card' })
      return
    }

    const viewerUrl = chrome.runtime.getURL('viewer/index.html')
    const tabs = await chrome.tabs.query({})
    let viewerTab = tabs.find(t => t.url && t.url.startsWith(viewerUrl))

    // ビューワーがなければ開く
    if (!viewerTab) {
      viewerTab = await chrome.tabs.create({ url: viewerUrl })
      // 読み込み完了を待つ
      await new Promise(resolve => {
        chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
          if (tabId === viewerTab.id && info.status === 'complete') {
            chrome.tabs.onUpdated.removeListener(listener)
            setTimeout(resolve, 2000)
          }
        })
      })
    } else {
      chrome.tabs.update(viewerTab.id, { active: true })
    }

    // セットリストの URL を解決（相対パスならカードの baseUrl を付ける）
    let setlistUrl = card.setlist
    if (card.baseUrl && !setlistUrl.startsWith('http')) {
      setlistUrl = card.baseUrl + '/' + setlistUrl
    }

    // セットリストを取得
    try {
      const res = await fetch(setlistUrl)
      const text = await res.text()

      // メディア URL マッピングを適用
      let resolvedText = text
      if (card.media) {
        // siteOrigin: カードの baseUrl からサイトルートを算出
        // 例: "https://k3peta.github.io/aituber-radio-station/cards/yofukashi"
        //   → "https://k3peta.github.io/aituber-radio-station"
        const siteOrigin = card.siteOrigin || (card.baseUrl ? card.baseUrl.replace(/\/cards\/[^/]+$/, '') : '')
        for (const [localPath, webUrl] of Object.entries(card.media)) {
          let fullUrl = webUrl
          if (!webUrl.startsWith('http')) {
            // assets/ はサイトルートにあるので siteOrigin から解決
            fullUrl = siteOrigin + '/' + webUrl
          }
          resolvedText = resolvedText.replaceAll(localPath, fullUrl)
        }
      }

      // ストレージに保存してビューワーに再生指示
      await chrome.storage.local.set({
        lastScript: resolvedText,
        lastScriptName: card.title || 'Station Card'
      })

      chrome.tabs.sendMessage(viewerTab.id, { action: 'play-default-setlist' })
      sendResponse({ ok: true })
    } catch (e) {
      console.error('Card play error:', e)
      sendResponse({ error: e.message })
    }
    return true  // async response
  }
})
