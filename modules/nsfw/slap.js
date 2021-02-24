const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
	let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);


	if(!user) return msg.reply('You forgot to mention a user.')
	
    msg.channel.send(new RichEmbed().setDescription(`${msg.author.tag} slaps ${user.tag}`).setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"slap",
    usage:"*slap",
    example:"*slap",
    group: "nsfw",
    desc:"slaps mentioned user."
} 