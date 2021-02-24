const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
	let user = msg.mentions.users.first()
    const {body} = await superagent


	if(!user) return msg.reply('You forgot to mention a user.')
	
	msg.channel.send(new RichEmbed().setDescription(`${user.tag} you're a fucking slut`).setColor("BLUE"))     
}

module.exports.help = {
    name:"slut",
    usage:"*slut",
    example:"*slut",
    group: "rude",
    desc:"calls mentioned user a slut."
} 