const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/boobs`);

    msg.channel.send(new RichEmbed().setColor("RED").setImage(body.url))     
}

module.exports.help = {
    name:"boobs",
    usage:"*boobs",
    example:"*boobs",
    group: "nsfw",
    desc:"random boob images"
} 