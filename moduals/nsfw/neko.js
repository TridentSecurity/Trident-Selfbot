const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/nsfw_neko_gif`);


    msg.channel.send(new RichEmbed().setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"neko",
    usage:"*neko",
    example:"*neko",
    group: "nsfw",
    desc:"sends nsfw neko."
} 