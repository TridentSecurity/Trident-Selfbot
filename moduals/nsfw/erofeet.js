const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/erofeet`);


    msg.channel.send(new RichEmbed().setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"erofeet",
    usage:"*erofeet",
    example:"*erofeet",
    group: "nsfw",
    desc:"sends nsfw feet."
} 