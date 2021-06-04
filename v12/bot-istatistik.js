const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

exports.run = async (client, message, args) => {
   const uptime_fc = moment.duration(client.uptime).format("D [Gün], H [Saat], m [Dakika], s [Saniye]");
   
   
   const fc_embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .addField("» **Botun Sahibi**", "Electus#0208")
  .addField("»  **Geliştirici** ","Electus#0208 and Guten#6603")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", uptime_fc)
  .addField('» **Kullanıcılar**:', client.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", client.channels.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", client.ws.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
  .addField("**» Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=BOTID&scope=bot&permissions=8)")
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/YGfZygYzzY)")
  .setFooter('Bilgilerim - '+client.user.tag, client.user.displayAvatarURL())
  .setThumbnail(client.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))

message.channel.send(fc_embed);
  };
 
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['i','bilgi'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik"
};
