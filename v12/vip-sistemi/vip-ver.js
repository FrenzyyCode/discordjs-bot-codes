const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('YetkiliROlİd')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `ROL ADI`')
   let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send('Bir kişi etiketlemelisin')
   }
   let vip = message.guild.roles.cache.find(r => r.id === 'VipRolİD')//VIP ROL İD

   if(!vip) {
       return message.channel.send('Vip rolü ayarlanmamış veya rol aranırken bir hata oluştu.')
   }

   let vipal = message.guild.member(member)


   vipal.roles.add(vip)
   let embed = new Discord.MessageEmbed()
   .setColor('Yellow')
   .setTitle('Vip Üye Verildi')
   .addField('Vip Üye Yapılan Kullanıcı',member)
   .addField('Komutu Kullanan Yetkili', message.author)
 client.channels.cache.get('LOG KANAL İD').send(embed)///LOG KANAL İD YAZMALISIN
}

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['vipver','vip-ver'],
    permLevel: 0
};

exports.help = {
    name: 'vip-ver'
};
