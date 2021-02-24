const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/solo`);
	
    msg.channel.send(new RichEmbed().setColor("BLUE").setImage(body.url))     
		
}
module.exports.help = {
    name:"solo",
    usage:"*solo",
    example:"*solo",
    group: "nsfw",
    desc:"sends solo images."
} 