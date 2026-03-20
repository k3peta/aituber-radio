#!/bin/bash
# WebM → MP4 変換ドロップレット（A/Vズレ修正版）
# VFR→CFR変換で音ズレを防止

for f in "$@"; do
  if [[ "$f" == *.webm ]]; then
    out="${f%.webm}.mp4"
    echo "🎬 変換中: $(basename "$f")"
    ffmpeg -y -i "$f" -c:v libx264 -c:a aac -vsync cfr -r 30 -movflags +faststart "$out" 2>/dev/null
    if [ $? -eq 0 ]; then
      size=$(du -h "$out" | cut -f1)
      echo "✅ 完了: $(basename "$out") ($size)"
    else
      echo "❌ 失敗: $(basename "$f")"
    fi
  else
    echo "⚠️ スキップ（WebMではない）: $(basename "$f")"
  fi
done

echo ""
echo "🎉 全て完了！"
