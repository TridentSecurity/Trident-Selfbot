
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    
    if(args.join(" ").length > 2000) return msg.reply('that message was too long, may not exceed 2048 characters.')

    msg.channel.send(`*${args.join(" ")}*`)
   

}

module.exports.help = {
    name:"italics",
    group: "text",
    usage:"*italics <message>",
    example:"*italics JTRz is cool",
    desc:"Makes your message italic."
} 