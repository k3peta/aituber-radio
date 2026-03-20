#!/bin/bash
# Gemini TTS テスト
# 使い方: bash test_gemini_tts.sh YOUR_API_KEY "テキスト" [voice]

API_KEY="${1:?Usage: bash test_gemini_tts.sh API_KEY [text] [voice]}"
TEXT="${2:-おはようございます。怪談ちゃんのラジオへようこそ。}"
VOICE="${3:-Aoede}"

curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{
    \"contents\": [{
      \"parts\": [{\"text\": \"${TEXT}\"}]
    }],
    \"generationConfig\": {
      \"responseModalities\": [\"AUDIO\"],
      \"speechConfig\": {
        \"voiceConfig\": {
          \"prebuiltVoiceConfig\": {
            \"voiceName\": \"${VOICE}\"
          }
        }
      }
    }
  }" -o /tmp/gemini_tts_response.json

# PCM (s16le, 24000Hz) → WAV 変換
python3 -c "
import json, base64
with open('/tmp/gemini_tts_response.json') as f:
    data = json.load(f)
if 'candidates' not in data:
    print('Error:', json.dumps(data, indent=2, ensure_ascii=False)[:500])
    exit(1)
audio_b64 = data['candidates'][0]['content']['parts'][0]['inlineData']['data']
pcm = base64.b64decode(audio_b64)
with open('/tmp/gemini_raw.pcm', 'wb') as f:
    f.write(pcm)
print(f'PCM: {len(pcm)} bytes, {len(pcm)/2/24000:.1f}s')
"

OUTPUT="$HOME/Downloads/gemini_tts_${VOICE}.wav"
ffmpeg -y -f s16le -ar 24000 -ac 1 -i /tmp/gemini_raw.pcm "$OUTPUT" 2>/dev/null
echo "✅ Saved: $OUTPUT"
