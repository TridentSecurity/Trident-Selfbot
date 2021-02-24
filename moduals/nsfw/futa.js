const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/futanari`);

    msg.channel.send(new RichEmbed().setColor("RED").setImage(body.url))     
}

module.exports.help = {
    name:"futa",
    usage:"*futa",
    example:"*futa",
    group: "nsfw",
    desc:"random futanari images"
} 