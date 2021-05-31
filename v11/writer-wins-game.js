const Discord = require('discord.js');
var kelimeler = ['kelime1','kelime2']//Kelimeleri bu alana tek tek giriniz. Biliyorsanız başka bir yerden kelimeleri request ile çekebilirsiniz.
//kelimeleri çekebileceğimiz bir yer varsa bana yazın. BU  komutu düzenleyelim. Electus#0208
 
exports.run = async (client, message, args) => {
 
  if(!args[0]) return message.channel.send('Kimle oynamak istiyorsun? Onu ekiktle!');
  if(!message.mentions.members.first()) return message.reply('Kişi bulunamadı');
  const member = message.mentions.members.first();
  if(member.user.id === message.author.id) return message.reply('Kendinizle bu oyunu oynıyamazsın!');
 
  message.channel.send(`${member}, yazan kazanır oyun davetini kabul etmek istiyor musun?.
  Kabul etmek istiyorsan aşağıdaki 🟢 tepkisine, reddetmek için 🔴 tepkisine tıklaman yeterlidir`).then(async sent => {
    await sent.react('🟢');
    await sent.react('🔴');
 
    const filter = (reaction, user) => user.id === member.id;
    sent.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] }).then(collected => {
      collected = collected.first();
      if(collected._emoji.name === '🔴') return sent.delete() && message.reply('Yazan kazanır kabul edilmedi.');
      sent.delete();
      message.channel.send('Kelime belirleniyor, lütfen bekleyin...').then(sent2 => {
        setTimeout(() => {
          const fckelime = random(kelimeler);
          const fc = response => {
              return response.content.toLowerCase() === fckelime.toLowerCase();
          };
 
          message.channel.send(`${member} - ${message.author}, Yazılacak Kelime: **${fckelime}**`);
            message.channel.awaitMessages(fc, { max: 1, time: 30000, errors: ['time'] }).then(answer => {
            sent2.delete();
           
            /*
            Bu kısıma kazanana ödül verdirebilirsiniz.
            Kullanıcıyı belirtmek için = answer.first().author
            */
           
            message.channel.send(`${answer.first().author} Doğru cevabı verdi ve kazandı`).then(m => m.delete({ timeout: 20000 }))
            return
          }).catch(() => message.channel.send('Kimse kazanamadı maalesef!'));
 
        }, 3000);
      });
    }).catch(error => console.log(error) && message.reply('Herhangi bir cevap verilmedi!'));
  });
 
  function random(map) {
    if(!map) return;
    return map[Math.floor(Math.random() * map.length)];
  };
 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazan-kazanır', 'yazan-kazanir'],
  permLevel: 0
};
 
exports.help = {
  name: 'yazankazanır'
};
