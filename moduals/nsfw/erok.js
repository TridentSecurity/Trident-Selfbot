const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/erok`);

    msg.channel.send(new RichEmbed().setColor("RANDOM").setImage(body.url))       
}
module.exports.help = {
    name:"erok",
    usage:"*erok",
    example:"*erok",
    group: "nsfw",
    desc:"sends erotic cat lady images."
} 