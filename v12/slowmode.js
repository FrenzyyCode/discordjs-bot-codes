const Discord = require('discord.js');
const request = require('request')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Bu komut için yetkiniz yetersiz!')
  
const limit = args[0]
  if(!limit) return message.reply('Lütfen bir limit belirleyin. Saniye cinsinden!')
  
if (limit > 21600) return message.reply('Süre maximum 21600 saniye yani 6 saat olabilir.')
  
request({
    url: `https://discord.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: { rate_limit_per_user: limit },
    headers: { "Authorization": `Bot ${client.token}` },
})};


  exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", 'yavaşmod'],
  permLevel: 0,
};

exports.help = {
  name: 'yavaş-mod'
};
