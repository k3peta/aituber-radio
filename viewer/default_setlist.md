---
title: AITuber Radio サンプル版
speaker: 38
speed: 0.85
loop: true
pause_between: 1500
---

<!-- ============================================
  セットリスト リファレンス（v0.4.2）

  ■ フロントマター (--- で囲む)
    title:         番組名
    speaker:       VOICEVOX 話者ID（デフォルト: 38）
    speed:         読み上げ速度（デフォルト: 0.95）
    loop:          true で無限ループ
    pause_between: セグメント間の無音(ms)（デフォルト: 1000）

  ■ セグメント共通プロパティ
    [type: talk|script|jingle|freetalk|audio]
    [speaker: 38]          話者ID（セグメント単位で上書き）
    [bgm: media/bgm.mp3]   BGM開始（前のBGMは自動停止）
    [bgmVolume: 0.25]       BGM音量 0.0〜1.0
    [bgmstop: true]         BGMを明示停止（BGM指定なしでも止めたい時）

  ■ talk 専用
    [emotion: neutral|happy|sad|surprised|relaxed]
    [intensity: 0.8]       表情の強さ 0.0〜1.0
    [bg: media/bg.jpeg]    背景画像の変更

  ■ script 専用（朗読）
    [file: readings/雪女.md]          単一ファイル指定
    [file: readings]                  フォルダからランダム選択
    [ai: true]                        AI要約+感情タグ付与（省略=原文そのまま朗読）

  ■ jingle 専用
    [file: media/jingle.mp3]          音声ファイル（必須）
    [overlay: media/opening.jpg]      オーバーレイ画像
    [duration: 30]                    再生秒数（省略=最後まで）
    [fadeOut: 3]                      フェードアウト秒数（デフォルト: 1.5）
    [speakAt: 3.5]                    発話開始タイミング（秒）
    [speakText: こんばんは！]          発話テキスト
    [speakSpeaker: 38]                発話の話者ID
    [duckTo: 0.15]                    発話中のジングル音量
    [keepBgm: true]                   BGMを止めずにジングル再生

  ■ freetalk 専用（AI雑談）
    [topic: 深夜のコンビニ]            話題（省略=ランダム）
    [hook: 変な常連客がいた話]          話のきっかけ

  ■ reaction 専用（朗読の感想 — AI自動生成）
    直前の script セグメントの内容をAIに渡して感想を生成
    [bgm: media/bgm.mp3]             BGM（省略可）
    [emotion: sad]                    初期表情（省略可、AI生成タグ優先）

============================================ -->


# オープニングジングル
[type: jingle]
[file: media/jingle1.mp3]
[overlay: media/opening.jpg]
[duration: 30]
[fadeOut: 3]
[speakAt: 3.5]
[speakText: こんばんは〜！怪談ちゃんの怪談ラジオ、始まるっすよ〜！]

# オープニング
[type: talk]
[bgm: media/bgm_chill.mp3]
はーい！怪談ちゃんラジオの時間だよ！
今日もネットの隅っこから配信してるっすよ。
先輩方、こんばんは。

# フリートーク（AIランダム話題）
[type: freetalk]

<!-- # フリートーク（話題指定の例）
[type: freetalk]
[topic: 深夜のコンビニ]
[hook: 深夜にコンビニ行ったら変な常連客がいた話] -->

# コーナージングル
[type: jingle]
[file: media/jingle2.mp3]
[overlay: media/kaidan_corner.jpg]
[duration: 10.5]
[fadeOut: 3.5]
[speakAt: 4]
[speakText: 今夜の怪談朗読、ひとつめいくっすよ……]

# 朗読（フォルダからランダム）
[type: script]
[file: readings]
[bgm: media/bgm_horror.mp3]
[bgmVolume: 0.15]

# 朗読の感想（AI自動生成）
[type: reaction]
[bgm: media/bgm_chill.mp3]


# フリートーク（AIランダム話題）
[type: freetalk]
[topic: 旅先で入った食堂の話]

# コーナージングル
[type: jingle]
[file: media/jingle2.mp3]
[overlay: media/kaidan_corner.jpg]
[duration: 10.5]
[fadeOut: 3.5]
[speakAt: 4]
[speakText: 今夜の怪談朗読、ふたつめいくっすよ……]


# 朗読（フォルダからランダム）
[type: script]
[file: readings]
[bgm: media/bgm_horror.mp3]
[bgmVolume: 0.15]

# エンディング
[type: talk]
[bgm: media/bgm_chill.mp3]
[emotion: relaxed]
はい、今日はここまでっす。
聴いてくれた先輩方、ありがとうっす。
また次回、お会いしましょう。
おやすみなさい。背中、気をつけてっすよ。

# 朗読の感想（AI自動生成）
[type: reaction]
[bgm: media/bgm_chill.mp3]

# エンディングジングル
[type: jingle]
[file: media/jingle1.mp3]
[overlay: media/ending.jpg]
[duration: 20]
[fadeOut: 3]
[speakAt: 3.5]
[speakText: 怪談ちゃんの怪談ラジオ、また次回っす！]
