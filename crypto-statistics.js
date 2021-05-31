const Discord = require("discord.js");
const crypto = require('crypto-global')//Modülü yüklemeniz gerekmektedir!

exports.run = async (client, message, args) => {
   let birim = args[0]
    if (!birim) return message.channel.send("Lütfen bir kripto bara birimi belirtiniz!")

        let all = await crypto.all(birim)
        const embed = new Discord.MessageEmbed()
            .setColor('#BLUE')
            .setThumbnail(all.icon)
            .setAuthor(all.name)
            .addField('Fiyat (TRY)', `\`${all.try}\``)
            .addField('Fiyat (USD)', `\`${all.usd}\``)
            .addField('24 Saatlik Hacim', `\`${all.vol24}\``)
            .addField('Aktif Hacim', `\`${all.market}\``)
            .addField('1 yılın en düşük değeri', `\`${all.lower}\``)
            .addField('1 yılın en yüksek değeri', `\`${all.higher}\``)
            .addField('Anlık Yüzdelik Değeri', `\`${all.percent}\``)
            .setImage(all.table);
			message.channel.send(embed)

};

exports.conf = {
 enabled: false,
 guildOnly: false,
 aliases: ['kripto'],
 permLevel: 0
};
 
exports.help = {
 name: 'crypto',
};//Başka bir yerde lütfen paylaşmayınız
