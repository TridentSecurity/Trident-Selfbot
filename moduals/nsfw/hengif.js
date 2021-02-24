const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);


    msg.channel.send(new RichEmbed().setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"hengif",
    usage:"*hengif",
    example:"*hengif",
    group: "nsfw",
    desc:"sends random hentai gifs."
} 