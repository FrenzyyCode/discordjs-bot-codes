const Discord = require('discord.js');

exports.run = function(client, message, args) {

    const embed = new Discord.MessageEmbed()
       .setTitle("**Sunucu PP**")
       .setURL(message.guild.iconURL())
       .setImage(message.guild.iconURL({ dynamic: true, size: 4096 }));
    message.channel.send(embed);

};

exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ["sunucupp", "serverpp",],
  permLevel: 0 
};

exports.help = {
  name: 'sunucupp'
};
