const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {


    if(args.join(" ").length > 2000) return msg.reply('Text may not exceed 2000 characters.')

    let embed = new RichEmbed()
    .setDescription(args.join(" "))
    .setColor("RANDOM")
    msg.channel.send(embed)

    

}


module.exports.help = {
    name:"rembed",
    usage:"*rembed",
    desc: "Sends your message in an embed with a random color.",
    example:"*rembed <text>",
    group: "fun",
}