
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {
    let password = args[0]
    if(!password) return msg.reply('please include your password as first argument, do it somewhere nobody can see it.')
    let name = args.join(" ").slice(args[0].length)
    if(name.length > 32) return msg.reply('name may not exceed 32 characters.')

    
    client.user.setUsername(name, password)
    msg.react("✅")

}



module.exports.help = {
    name:"undercover",
    usage:"*undercover <name>",
    example:"*undercover cex",
    ownerOnly: true,
    group: "user",
    desc:"Changes your username to whatever you want."
} 