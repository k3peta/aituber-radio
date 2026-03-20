#!/bin/bash
# WebM → MP4 変換ドロップレット（進捗通知付き）
# VFR→CFR変換で音ズレ防止

FFMPEG="/opt/homebrew/bin/ffmpeg"
[ ! -f "$FFMPEG" ] && FFMPEG="/usr/local/bin/ffmpeg"
[ ! -f "$FFMPEG" ] && FFMPEG="ffmpeg"

total=$#
count=0

for f in "$@"; do
  if [[ "$f" == *.webm ]]; then
    count=$((count + 1))
    name=$(basename "$f")
    out="${f%.webm}.mp4"
    
    # 通知: 開始
    osascript -e "display notification \"${count}/${total}: ${name}\" with title \"WebM→MP4 変換中...\"" 2>/dev/null
    
    # 変換
    "$FFMPEG" -y -i "$f" -c:v h264_videotoolbox -b:v 4M -c:a aac -vsync cfr -r 30 -movflags +faststart "$out" 2>/dev/null
    
    if [ $? -eq 0 ]; then
      size=$(du -h "$out" | cut -f1)
      osascript -e "display notification \"✅ ${name%.webm}.mp4 (${size})\" with title \"変換完了\"" 2>/dev/null
    else
      osascript -e "display notification \"❌ ${name}\" with title \"変換失敗\"" 2>/dev/null
    fi
  fi
done

# 最終通知
if [ $count -gt 0 ]; then
  osascript -e "display notification \"${count}ファイル完了\" with title \"🎉 全て変換完了！\" sound name \"Glass\"" 2>/dev/null
fi
