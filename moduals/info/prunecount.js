
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

 
    if(!msg.guild.me.hasPermission("MANAGE_MEMBERS")) return msg.reply('You dont have the manage_members permission')
    let count = await msg.guild.pruneMembers(1, true)

  msg.channel.send(count + ' can be pruned on this server.')
    
}



module.exports.help = {
    name:"prunecount",
    usage:"*prunecount",
    example:"*prunecount",
    group: "info",
    desc:"Shows amount of people who can be pruned. Requires manage members permission."
} 