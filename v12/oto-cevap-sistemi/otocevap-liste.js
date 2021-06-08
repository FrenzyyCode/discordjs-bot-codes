const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
          let komut = await db.fetch(`sunucuKomut_${message.guild.id}`)

                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!komut) await db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                  
                  
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`Mevcut özel komutlar.`, `\`${komut}\``)
                     .setColor('GREEN')
                        message.channel.send(welcomeEmbed)
                     };

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permlevel: 0
}

exports.help = {
  name: "otocepa-liste"
}
