
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    
    if (args.join(" ").length > 2000) msg.reply('Message may not exceed 2000 characters.')
    
    msg.channel.send(new RichEmbed().setDescription(args.join(" ")).setColor("RANDOM"))
   
}


module.exports.help = {
    name:"embed",
    usage:"*embed <message>",
    example:"*embed cex is cool",
    ownerOnly: true,
    group: "user",
    desc:"Returns an embed with your message.."
} 