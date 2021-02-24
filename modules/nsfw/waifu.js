const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/waifu`);
	
    msg.channel.send(new RichEmbed().setColor("BLUE").setImage(body.url))     
		
}
module.exports.help = {
    name:"waifu",
    usage:"*waifu",
    example:"*waifu",
    group: "nsfw",
    desc:"sends waifu images."
} 