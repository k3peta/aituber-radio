#!/usr/bin/env node
// viewer/ 配下のサブフォルダにある .md ファイルの index.json を自動生成
const fs = require('fs')
const path = require('path')

const viewerDir = path.join(__dirname, 'viewer')

// viewer/ 直下のサブフォルダを走査
const entries = fs.readdirSync(viewerDir, { withFileTypes: true })

for (const entry of entries) {
  if (!entry.isDirectory()) continue
  if (entry.name === 'media' || entry.name === 'node_modules') continue

  const folderPath = path.join(viewerDir, entry.name)
  const files = fs.readdirSync(folderPath)
    .filter(f => f.endsWith('.md') && f !== 'README.md')
    .sort()

  if (files.length === 0) continue

  const indexPath = path.join(folderPath, 'index.json')
  fs.writeFileSync(indexPath, JSON.stringify(files, null, 2) + '\n')
  console.log(`📝 ${entry.name}/index.json → ${files.length} files`)
}
