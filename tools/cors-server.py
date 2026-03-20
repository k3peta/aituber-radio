#!/usr/bin/env python3
"""CORS対応の簡易HTTPサーバー（AITuber Radio CLI用）"""
import sys
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

class CORSHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def log_message(self, format, *args):
        pass  # サイレント

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 18923
    directory = sys.argv[2] if len(sys.argv) > 2 else '.'
    os.chdir(directory)
    server = HTTPServer(('127.0.0.1', port), CORSHandler)
    server.serve_forever()
