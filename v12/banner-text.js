const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let renkKodu = args[0] || 'fff'
  let yazı = args.splice(1).join(" ")
  if(!renkKodu) yazı = args.splice(0).join(" ")
  if(!yazı) return message.channel.send("Banner yapacağınız yazıyı giriniz!");
  
  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor("Banner!")
  .setImage(`https://dummyimage.com/2000x500/33363c/${renkKodu}&text=${yazı}`)
  .setFooter("Banner Oluşturuldu!");
  message.channel.send(embed);
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["banneryazı","yazıbanner","banneryaz"],
  permLevel: 0
};

exports.help = {
  name: 'yazı-banner'
};
