const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cum`);

    msg.channel.send(new RichEmbed().setColor("RED").setImage(body.url))     
}

module.exports.help = {
    name:"cum",
    usage:"*cum",
    example:"*cum",
    group: "nsfw",
    desc:"random cum images"
} 