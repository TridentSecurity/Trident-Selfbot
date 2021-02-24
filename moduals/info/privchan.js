
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

 
    let users = client.channels.filter(c => c.type === "dm")

    let mapped = users.map(u => u.recipient.tag).join(", ")

    if(mapped.length > 2000) msg.reply('You have too many DMs open! ' + users.size + ' dms.')
    let embed = new RichEmbed()
    .setDescription(mapped)
    .setColor("RANDOM")
    msg.channel.send(embed)
    
}



module.exports.help = {
    name:"privchan",
    usage:"*privchan",
    example:"*privchan",
    group: "info",
    desc:"Shows a list of every user you have an open DM/Group Chat with."
} 