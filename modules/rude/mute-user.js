const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
	let user = msg.mentions.users.first()
    const {body} = await superagent


	if(!user) return msg.reply('You forgot to mention a user.')
	
	msg.channel.send(new RichEmbed().setDescription(`${user.tag} has been muted.`).setColor("BLUE"))     
}

module.exports.help = {
    name:"mute-user",
    usage:"*mute-user",
    example:"*mute <user>",
    group: "rude",
    desc:"fake mutes a user."
} 