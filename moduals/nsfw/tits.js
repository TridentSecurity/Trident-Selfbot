const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/tits`);


    msg.channel.send(new RichEmbed().setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"tits",
    usage:"*tits",
    example:"*tits",
    group: "nsfw",
    desc:"sends tits."
} 