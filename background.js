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
