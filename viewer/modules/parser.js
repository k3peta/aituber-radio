// ============================================
// 台本パーサー（Script & Setlist）
// viewer.js 本体への依存なし — 純粋関数モジュール
// ============================================

/**
 * テキストからTTS不要な要素を除去
 */
export function cleanTextForSpeech(text) {
  return text
    .replace(/[\w\u3040-\u9faf]+[,，]\s*[\d.]+\]\s*/g, '')
    .replace(/[\w\u3040-\u9faf]+[,，][\d.]*\s*$/g, '')
    .replace(/^\s*\[[\w\u3040-\u9faf]+[,，]\s*[\d.]*\]?\s*/g, '')
    .replace(/\[([^\]]*)\]\(https?:\/\/[^)]+\)/g, '$1')
    .replace(/https?:\/\/\S+/g, 'ユーアールエル')
    .replace(/([ぁ-んァ-ヶー一-龥、。！？）」』】〕〉》♪])[wWｗ]+(?=[。、！？\s]|$)/g, '$1、わら')
    .replace(/(?:^|(?<=\s))[wWｗ]{3,}(?=\s|$)/g, '、くさ')
    .replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * テキストがセットリスト形式かどうか判定
 */
export function isSetlist(text) {
  return /\[type:\s*(talk|script|jingle|freetalk|audio|auto-news|auto-weather|auto-today|auto-scenery)\]/i.test(text)
}

/**
 * Markdown 台本をパース（旧形式: [emotion,intensity] テキスト）
 * @param {string} mdText
 * @returns {{ meta: Object, dialogues: Array }}
 */
export function parseScript(mdText) {
  const lines = mdText.split('\n')
  const meta = {}
  const dialogues = []
  let inFrontmatter = false
  let frontmatterDone = false
  let inMultilineValue = false
  let multilineKey = ''
  let currentEmotion = 'neutral'
  let currentIntensity = 1.0

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
    if (/^https?:\/\/\S+$/.test(trimmed)) {
      dialogues.push({ emotion: 'neutral', intensity: 0.75, text: 'ユーアールエル' })
      continue
    }
    const mdLinkOnly = trimmed.match(/^\[([^\]]+)\]\(https?:\/\/[^)]+\)$/)
    if (mdLinkOnly) {
      dialogues.push({ emotion: 'neutral', intensity: 0.75, text: mdLinkOnly[1] })
      continue
    }

    const dialogueMatch = trimmed.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/)
    if (dialogueMatch) {
      const cleanText = cleanTextForSpeech(dialogueMatch[3])
      if (cleanText) {
        dialogues.push({
          emotion: dialogueMatch[1],
          intensity: parseFloat(dialogueMatch[2]),
          text: cleanText
        })
      }
      continue
    }

    const tagLine = trimmed.match(/^\[(\w+):\s*(.+?)\]$/)
    if (tagLine) {
      const key = tagLine[1].toLowerCase()
      const val = tagLine[2]
      if (key === 'emotion') currentEmotion = val
      else if (key === 'intensity') currentIntensity = parseFloat(val)
      continue
    }

    const cleanText = cleanTextForSpeech(trimmed)
    if (cleanText) {
      dialogues.push({
        emotion: currentEmotion || 'neutral',
        intensity: currentIntensity || 1.0,
        text: cleanText,
        _untagged: true
      })
    }
  }

  console.log('parseScript result:', { meta, dialogueCount: dialogues.length })
  return { meta, dialogues }
}

/**
 * セットリスト形式をパース（# セグメント + [type: xxx] + [key: value]）
 * @param {string} mdText
 * @returns {{ meta: Object, segments: Array }}
 */
export function parseSetlist(mdText) {
  const lines = mdText.split('\n')
  const meta = {}
  const segments = []
  let inFrontmatter = false
  let frontmatterDone = false
  let currentSegment = null

  for (const line of lines) {
    const trimmed = line.trim()

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
    if (trimmed.startsWith('<!--')) continue

    const propMatch = trimmed.match(/^\[(\w+):\s*(.+)\]$/)
    if (propMatch) {
      const key = propMatch[1].toLowerCase()
      let value = propMatch[2].trim()
      if (/^[\d.]+$/.test(value)) value = parseFloat(value)
      if (value === 'true') value = true
      if (value === 'false') value = false
      if (key === 'type') {
        currentSegment.type = value
      } else {
        currentSegment.props[key] = value
      }
      continue
    }

    if (trimmed.startsWith('### ')) {
      const subType = trimmed.slice(4).trim().toLowerCase()
      if (['talk', 'script', 'freetalk', 'reaction', 'comments'].includes(subType)) {
        if (currentSegment.lines.length > 0 || Object.keys(currentSegment.props).length > 0) {
          segments.push(currentSegment)
        }
        currentSegment = {
          name: currentSegment.name || subType,
          type: subType,
          props: { ...currentSegment.props },
          lines: []
        }
      }
      continue
    }

    currentSegment.lines.push(trimmed)
  }
  if (currentSegment) segments.push(currentSegment)

  console.log('parseSetlist:', { meta, segmentCount: segments.length, segments: segments.map(s => `${s.name} (${s.type})`) })
  return { meta, segments }
}
