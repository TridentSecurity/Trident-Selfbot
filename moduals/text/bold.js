
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    
    if(args.join(" ").length > 2000) return msg.reply('that message was too long, may not exceed 2048 characters.')

    msg.channel.send(`**${args.join(" ")}**`)
   

}

module.exports.help = {
    name:"bold",
    group: "text",
    usage:"*bold <message>",
    example:"*bold JTRz is cool",
    desc:"Makes your message bold."
} 