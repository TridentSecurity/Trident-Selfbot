const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/smallboobs`);
	
    msg.channel.send(new RichEmbed().setColor("RED").setImage(body.url))     
		
}
module.exports.help = {
    name:"smallboobs",
    usage:"*smallboobs",
    example:"*smallboobs",
    group: "nsfw",
    desc:"sends small booby images."
} 