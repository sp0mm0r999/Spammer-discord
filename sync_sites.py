#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""sync_sites.py - אוסף כתובות OTP/SMS ממאגרי GitHub"""

import io, json, os, re, tarfile, time
import urllib.request, urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "sites.txt")
TOKEN = os.environ.get("GITHUB_TOKEN", "").strip()

QUERIES = ["sms bomber", "otp bomber", "smsbomber", "otp-bomber",
           "sms bomber python", "otp bomber android", "sms spammer",
           "otp spammer", "sms bomber api", "bomber sms list"]

CODE_EXT = (".py", ".js", ".ts", ".json", ".txt", ".dart", ".java", ".kt",
            ".php", ".go", ".rb", ".cs", ".yml", ".yaml", ".html", ".vue")

HINT = ("api", "sms", "otp", "url", "endpoint", "site", "config",
        "provider", "list", "const", "data", "util", "readme", "main")

STRONG = ("otp", "sms", "verify", "verification", "msisdn", "sendcode",
          "send-code", "send_code", "sendotp", "send-otp", "send_otp",
          "mobile", "phone", "getcode", "get-code", "resend", "activation")

BAD = ("github", "raw.githubusercontent", "googleapis", "gstatic", "w3.org",
       "schema.org", "npmjs", "jsdelivr", "unpkg", "cloudflare", "jquery",
       "bootstrapcdn", "fontawesome", "fonts.", "example.com", "localhost",
       "127.0.0.1", "mozilla", "sentry", "reactjs", "vuejs", "angular.io",
       "stackoverflow", "youtube", "instagram", "facebook", "twitter", "x.com",
       "linkedin", "whatsapp", "apple.com", "play.google", "cdn.", "static.",
       "img.", "images.", "assets.", "shopify", "vimeo", "bit.ly", "tinyurl",
       "gravatar", "wordpress", "creativecommons", "apache.org", "gnu.org",
       "python.org", "wikipedia", "wikimedia", "adobe", "microsoft")

BADEND = (".js", ".css", ".png", ".jpg", ".jpeg", ".svg", ".ico", ".woff",
          ".woff2", ".ttf", ".eot", ".map", ".gif", ".webp", ".mp4", ".xml",
          ".pdf", ".zip", ".gz", ".apk", ".jar", ".exe")

DOMAINS = """
olx.in flipkart.com swiggy.com zomato.com makemytrip.com nykaa.com
bewakoof.com lenskart.com myntra.com practo.com bigbasket.com jiomart.com
dmart.in croma.com tatacliq.com snapdeal.com paytm.com phonepe.com
groww.in zerodha.com upstox.com angelone.in revolut.com wise.com
klarna.com skrill.com neteller.com binance.com coinbase.com kraken.com
bitpanda.com spotify.com deezer.com soundcloud.com canva.com notion.so
figma.com viber.com reddit.com quora.com medium.com udemy.com coursera.org
duolingo.com strava.com fitbit.com bolt.eu deliveroo.com grubhub.com
doordash.com carrefour.com tesco.com walmart.com target.com ikea.com
decathlon.com zara.com nike.com adidas.com asos.com zalando.com
allegro.pl bol.com otto.de glovoapp.com wolt.com gett.com yandex.com
"""

URL_RE = re.compile(r"https?://[A-Za-z0-9\-._~:/?#\[\]@!$&'()*+,;=%]+")
FOUND = set()


def clean(u):
    return u.strip().rstrip(".,;:'\"`)]}>").replace("\\/", "/")


def key(u):
    p = urllib.parse.urlsplit(u)
    return (p.scheme + "://" + p.netloc.lower() + p.path.rstrip("/")).lower()


def good(u):
    p = urllib.parse.urlsplit(u)
    h = p.netloc.lower()
    if not h or "." not in h:
        return False
    if any(b in h for b in BAD):
        return False
    if any(u.lower().endswith(e) for e in BADEND):
        return False
    if len(p.path) < 3:
        return False
    blob = (p.path + "?" + (p.query or "")).lower()
    return any(k in blob for k in STRONG)


def get(url, timeout=30, api=False):
    r = urllib.request.Request(url)
    r.add_header("User-Agent", "sync-sites/1.0")
    if api:
        r.add_header("Accept", "application/vnd.github+json")
        if TOKEN:
            r.add_header("Authorization", "Bearer " + TOKEN)
    with urllib.request.urlopen(r, timeout=timeout) as f:
        return f.read()


def search(q):
    u = ("https://api.github.com/search/repositories?q="
         + urllib.parse.quote(q) + "&per_page=30&sort=stars")
    try:
        data = json.loads(get(u, api=True).decode("utf-8", "replace"))
        return [(i["full_name"], i.get("default_branch") or "main")
                for i in data.get("items", [])]
    except Exception as e:
        print("   !", str(e)[:60])
        return []


def scan(full, br):
    u = "https://codeload.github.com/%s/tar.gz/refs/heads/%s" % (full, br)
    try:
        raw = get(u, timeout=45)
    except Exception:
        return 0
    if len(raw) > 25000000:
        return 0
    n = 0
    try:
        with tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz") as tf:
            for m in tf.getmembers():
                if not m.isfile() or m.size < 30 or m.size > 400000:
                    continue
                low = m.name.lower()
                if "node_modules/" in low or "/dist/" in low or ".min." in low:
                    continue
                if not low.endswith(CODE_EXT) or not any(h in low for h in HINT):
                    continue
                fh = tf.extractfile(m)
                if not fh:
                    continue
                for mm in URL_RE.findall(fh.read().decode("utf-8", "replace")):
                    u2 = clean(mm)
                    if good(u2):
                        FOUND.add(u2)
                        n += 1
    except Exception:
        pass
    return n


def main():
    print("=" * 46)
    print("  sync_sites.py")
    print("=" * 46)
    repos, seen = [], set()
    for i, q in enumerate(QUERIES, 1):
        print("[%d/%d] %s" % (i, len(QUERIES), q))
        for full, br in search(q):
            if full not in seen:
                seen.add(full)
                repos.append((full, br))
        time.sleep(1.3)

    print("\nנמצאו %d מאגרים. סורק...\n" % len(repos))
    for i, (full, br) in enumerate(repos[:130], 1):
        n = scan(full, br)
        print("[%d] %-42s %4d (סה\"כ %d)" % (i, full[:42], n, len(FOUND)))

    out, used = [], set()
    for u in sorted(FOUND, key=key):
        k = key(u)
        if k not in used:
            used.add(k)
            out.append(u)

    if len(out) < 60:
        print("\nמוסיף רשימת גיבוי...")
        for d in DOMAINS.split():
            u = "https://www.%s/api/otp?phone={phone}" % d
            if key(u) not in used:
                used.add(key(u))
                out.append(u)

    with open(OUT, "w", encoding="utf-8") as f:
        f.write("# נוצר ע\"י sync_sites.py\n")
        f.write("\n".join(out) + "\n")
    print("\nנכתבו %d כתובות אל sites.txt" % len(out))


if __name__ == "__main__":
    main()
