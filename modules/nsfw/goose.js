const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/goose`);

    msg.channel.send(new RichEmbed().setColor("BLUE").setImage(body.url))       
}
module.exports.help = {
    name:"goose",
    usage:"*goose",
    example:"*goose",
    group: "nsfw",
    desc:"sends goose images."
} 