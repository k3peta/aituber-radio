#!/usr/bin/env python3
"""
WebM → MP4 変換ツール（円形プログレス付き）
ドラッグ&ドロップ対応。Dock上で円形タイマーのように進捗表示。
"""
import sys, os, subprocess, re, threading, math, shutil
import tkinter as tk

# ffmpeg パス検索（Automator/AppleScript から起動すると PATH が限定的）
FFMPEG_PATHS = ["/opt/homebrew/bin/ffmpeg", "/usr/local/bin/ffmpeg", "ffmpeg"]
FFPROBE_PATHS = ["/opt/homebrew/bin/ffprobe", "/usr/local/bin/ffprobe", "ffprobe"]

def find_bin(candidates):
    for p in candidates:
        if os.path.isfile(p):
            return p
        found = shutil.which(p)
        if found:
            return found
    return candidates[-1]  # fallback

FFMPEG = find_bin(FFMPEG_PATHS)
FFPROBE = find_bin(FFPROBE_PATHS)

class CircularProgress:
    def __init__(self, files):
        self.files = files
        self.total = len(files)
        self.current_file = 0
        self.progress = 0.0
        self.status = "準備中..."
        self.done = False
        
        self.root = tk.Tk()
        self.root.title("WebM → MP4")
        self.root.geometry("220x280")
        self.root.resizable(False, False)
        self.root.configure(bg="#1a1a2e")
        # 常に最前面
        self.root.attributes("-topmost", True)
        # 画面中央
        self.root.update_idletasks()
        x = (self.root.winfo_screenwidth() // 2) - 110
        y = (self.root.winfo_screenheight() // 2) - 140
        self.root.geometry(f"+{x}+{y}")
        
        # キャンバス（円形プログレス）
        self.canvas = tk.Canvas(self.root, width=200, height=200, bg="#1a1a2e", highlightthickness=0)
        self.canvas.pack(pady=(15, 5))
        
        # ステータスラベル
        self.label = tk.Label(self.root, text="準備中...", fg="#aaa", bg="#1a1a2e",
                             font=("Helvetica", 11), wraplength=200)
        self.label.pack(pady=(0, 5))
        
        # % ラベル
        self.pct_label = tk.Label(self.root, text="0%", fg="#e94560", bg="#1a1a2e",
                                  font=("Helvetica", 10, "bold"))
        self.pct_label.pack()
        
        self.draw_progress(0)
        
        # 変換スレッド開始
        t = threading.Thread(target=self.convert_all, daemon=True)
        t.start()
        
        # 定期更新
        self.update_ui()
        self.root.mainloop()
    
    def draw_progress(self, pct):
        self.canvas.delete("all")
        cx, cy, r = 100, 100, 80
        line_w = 10
        
        # 背景円
        self.canvas.create_oval(cx-r, cy-r, cx+r, cy+r, outline="#2a2a4a", width=line_w)
        
        # プログレス弧
        if pct > 0:
            extent = -pct * 3.6  # 360度 * pct/100
            self.canvas.create_arc(cx-r, cy-r, cx+r, cy+r,
                                   start=90, extent=extent,
                                   outline="#e94560", width=line_w, style="arc")
        
        # 中央テキスト
        if self.done:
            self.canvas.create_text(cx, cy-10, text="✅", font=("Helvetica", 30), fill="#4ecca3")
            self.canvas.create_text(cx, cy+25, text="完了!", font=("Helvetica", 14, "bold"), fill="#4ecca3")
        else:
            self.canvas.create_text(cx, cy-5, text=f"{int(pct)}%",
                                   font=("Helvetica", 28, "bold"), fill="#e94560")
            if self.total > 1:
                self.canvas.create_text(cx, cy+30, text=f"{self.current_file}/{self.total}",
                                       font=("Helvetica", 12), fill="#666")
    
    def update_ui(self):
        self.draw_progress(self.progress)
        self.label.config(text=self.status)
        self.pct_label.config(text=f"{int(self.progress)}%")
        
        if self.done:
            self.draw_progress(100)
            self.label.config(text="全て完了！", fg="#4ecca3")
            self.pct_label.config(text="✅")
            self.root.after(3000, self.root.destroy)
        else:
            self.root.after(100, self.update_ui)
    
    def get_duration(self, filepath):
        """ffprobeで動画の長さを取得"""
        try:
            result = subprocess.run(
                [FFPROBE, "-v", "error", "-show_entries", "format=duration",
                 "-of", "default=noprint_wrappers=1:nokey=1", filepath],
                capture_output=True, text=True
            )
            return float(result.stdout.strip())
        except:
            return 0
    
    def convert_file(self, filepath):
        outpath = filepath.rsplit(".", 1)[0] + ".mp4"
        name = os.path.basename(filepath)
        self.status = f"🎬 {name}"
        
        duration = self.get_duration(filepath)
        if duration <= 0:
            duration = 600  # フォールバック: 10分
        
        # ffmpeg -progress pipe で進捗取得
        cmd = [
            FFMPEG, "-y", "-i", filepath,
            "-c:v", "libx264", "-c:a", "aac",
            "-vsync", "cfr", "-r", "30",
            "-movflags", "+faststart",
            "-progress", "pipe:1",
            "-loglevel", "error",
            outpath
        ]
        
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                               universal_newlines=True)
        
        file_base = (self.current_file - 1) / self.total * 100
        file_range = 100 / self.total
        
        while True:
            line = proc.stdout.readline()
            if not line:
                break
            if line.startswith("out_time_us="):
                try:
                    us = int(line.split("=")[1].strip())
                    secs = us / 1_000_000
                    file_pct = min(secs / duration, 1.0)
                    self.progress = file_base + file_pct * file_range
                except:
                    pass
        
        proc.wait()
        return proc.returncode == 0
    
    def convert_all(self):
        for i, f in enumerate(self.files):
            if not f.lower().endswith(".webm"):
                continue
            self.current_file = i + 1
            ok = self.convert_file(f)
            if ok:
                self.progress = (i + 1) / self.total * 100
        
        self.done = True

if __name__ == "__main__":
    files = sys.argv[1:]
    if not files:
        # Finderからドロップされなかった場合
        root = tk.Tk()
        root.withdraw()
        from tkinter import filedialog
        files = list(filedialog.askopenfilenames(
            title="WebMファイルを選択",
            filetypes=[("WebM files", "*.webm"), ("All files", "*.*")]
        ))
        root.destroy()
    
    if files:
        CircularProgress(files)
