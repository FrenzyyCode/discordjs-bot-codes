const Discord = require('discord.js');

exports.run = async(client, message, args) => {

let pingmesaj;
let pingdurum;

let mesaj;
  let mesajdurum;
if(Date.now() - message.createdAt < 100){

mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt < 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt < 30){
mesaj = ":green_circle: "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 100){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}

if(Date.now() - message.createdAt > 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}//ottamancode
if(Date.now() - message.createdAt > 150){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 250){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 500){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 1000){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}

if(client.ws.ping < 100){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ws.ping < 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}
if(client.ws.ping < 30){
pingmesaj = ":green_circle: "
pingdurum = "#66ff00"
}
if(client.ws.ping > 100){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}

if(client.ws.ping > 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}
if(client.ws.ping > 150){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ws.ping > 250){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ws.ping > 500){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
if(client.ws.ping > 1000){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}

const electusembed = new Discord.MessageEmbed()
.setTitle('Electus | Ping')//
.setDescription(`Gecikme: ${client.ws.ping+ "ms"} ${pingmesaj}\n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt)+ "ms"} ${mesaj}`)
.setImage('https://dummyimage.com/2000x500/33363c/${renkKodu}&text='+ client.ws.ping +'%20Ping')
.setColor(pingdurum)
.setFooter(`${message.author.username} komutu kullandı.`)
message.channel.send(electusembed)

}

  

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['botping','bot-ping'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
};
