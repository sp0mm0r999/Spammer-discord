const { Client, GatewayIntentBits } = require('discord.js');
const c = new Client({ intents: [GatewayIntentBits.Guilds] });
c.once('ready', async () => {
  for (const g of c.guilds.cache.values()) {
    console.log('SERVER:', g.name, '->', g.id);
    g.channels.cache.forEach(ch => console.log('   #' + ch.name, '->', ch.id));
  }
  process.exit(0);
});
c.login(process.env.TOKEN);
