#!/bin/bash
# WebM → MP4 変換ドロップレット
# 使い方: WebMファイルをこのスクリプトにドラッグ&ドロップ
# または: ./webm2mp4.sh file1.webm file2.webm ...

for f in "$@"; do
  if [[ "$f" == *.webm ]]; then
    out="${f%.webm}.mp4"
    echo "🎬 変換中: $(basename "$f")"
    ffmpeg -y -i "$f" -c:v libx264 -c:a aac -movflags +faststart "$out" 2>/dev/null
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
