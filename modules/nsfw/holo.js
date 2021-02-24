const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/holo`);

    msg.channel.send(new RichEmbed().setColor("BLUE").setImage(body.url))       
}
module.exports.help = {
    name:"holo",
    usage:"*holo",
    example:"*holo",
    group: "nsfw",
    desc:"sends holo images."
} 