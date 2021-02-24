const wur = require('../../assets/json/wyr.json')
let { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

let embed = new RichEmbed()
.setDescription(wur[Math.floor(Math.random() * wur.length)])
.setColor("RANDOM")


msg.channel.send(embed).then(async m => {
        await m.react("✅")
        await m.react("❌")
    })

 


}


module.exports.help = {
    name:"wur",
    group: "fun",
    usage:"*wur",
    desc:`Sends a "Would you rather?" question in an embed, with two react options.`,
    example:"*wur",
}