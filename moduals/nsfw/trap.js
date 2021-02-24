const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/trap`);

    msg.channel.send(new RichEmbed().setColor("RED").setImage(body.url))     
}

module.exports.help = {
    name:"trap",
    usage:"*trap",
    example:"*trap",
    group: "nsfw",
    desc:"random trap images"
} 