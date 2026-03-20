// ============================================
// 字幕表示（Subtitle）
// ============================================

const subtitleBox = document.getElementById('subtitle-box')
const subtitleTitle = document.getElementById('subtitle-title')
const subtitleText = document.getElementById('subtitle-text')

/**
 * 字幕を表示
 * @param {string} text 本文
 * @param {string} title タイトル（省略可）
 */
export function showSubtitle(text, title = '') {
  if (title) {
    subtitleTitle.textContent = `📖 ${title}`
    subtitleTitle.style.display = 'block'
  } else {
    subtitleTitle.style.display = 'none'
  }
  subtitleText.textContent = text
  subtitleBox.classList.add('visible')
}

/**
 * 字幕を非表示
 */
export function hideSubtitle() {
  subtitleBox.classList.remove('visible')
}
