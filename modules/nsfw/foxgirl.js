const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/fox_girl`);
	
    msg.channel.send(new RichEmbed().setColor("BLUE").setImage(body.url))     
		
}
module.exports.help = {
    name:"foxgirl",
    usage:"*foxgirl",
    example:"*foxgirl",
    group: "nsfw",
    desc:"sends erotic foxgirl images."
} 