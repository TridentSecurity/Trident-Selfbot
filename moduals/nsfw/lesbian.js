const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/les`);


    msg.channel.send(new RichEmbed().setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"lesbian",
    usage:"*lesbian",
    example:"*lesbian",
    group: "nsfw",
    desc:"sends lesbian hentai."
} 