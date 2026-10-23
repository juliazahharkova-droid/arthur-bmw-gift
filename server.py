"""Optional local preview server. Run: python server.py"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os
import webbrowser

os.chdir(Path(__file__).parent)
url = "http://127.0.0.1:8000"
print(f"Preview: {url}  (Ctrl+C to stop)")
try:
    webbrowser.open(url)
except Exception:
    pass
ThreadingHTTPServer(("0.0.0.0", 8000), SimpleHTTPRequestHandler).serve_forever()
