const { RichEmbed } = require('discord.js')
module.exports.run = (client, msg, args, config) => {

	msg.delete()
	if(!args.join(" ").length) return msg.reply('you forgot to mention a user!')
    let user = msg.mentions.users.first()
    if(!user) user = msg.author
    let replies = [
        "8=D",
        "8==D",
        "8===D",
        "8====D",
        "8=====D",
        "8======D",
        "8=======D",
        "8========D",
        "8=========D",
		"8==========D",
		"8===========D",
		"8============D",]
     
         let random = Math.floor(Math.random() * replies.length)
     
         let embed = new RichEmbed()
         .setTitle(`penis machine`)
         .setDescription(`${user.tag} penis\n${replies[random]}`)
         .setColor("BLUE")
     
		 msg.channel.send(embed)

}


module.exports.help = {
    name:"penis",
    usage:"*penis @user",
    example:"*penis @JTRz",
    group: "rude",
    desc: "Returns mentioned users penis size."
}