const discord = require('discord.js')

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let avatar = user.displayAvatarURL({size: 4096, dynamic: true})

    const embed = new discord.MessageEmbed()
    .setTitle(`${user.tag} - Avatarı`)
    .setURL(avatar)
    .setImage(avatar)
    .setColor('RANDOM')
    message.channel.send(embed);
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'profil'
};
