const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
	let user = msg.mentions.users.first()
    const {body} = await superagent


	if(!user) return msg.reply('You forgot to mention a user.')
	
	msg.channel.send(new RichEmbed().setDescription(`${user.tag} shut up you fucking cock whore`).setColor("BLUE"))     
}

module.exports.help = {
    name:"whore",
    usage:"*whore",
    example:"*whore",
    group: "rude",
    desc:"calls mentioned user a cock whore."
} 