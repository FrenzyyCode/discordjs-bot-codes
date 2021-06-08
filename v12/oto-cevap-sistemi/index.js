client.on("message", async message => {
if(!message.guild) return
let komut = await db.fetch(`sunucuKomut_${message.guild.id}`)
let mesaj = await db.fetch(`sunucuMesaj_${message.guild.id}`)
if(!komut) return; if(!mesaj) return;

if(message.content.toLowerCase() === komut.toLowerCase()) {
 message.reply(mesaj) 
}
})
