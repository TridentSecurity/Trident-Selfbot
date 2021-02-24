const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/meow`);
	
    msg.channel.send(new RichEmbed().setColor("RED").setImage(body.url))     
		
}
module.exports.help = {
    name:"meow",
    usage:"*meow",
    example:"*meow",
    group: "nsfw",
    desc:"sends cat pics."
} 