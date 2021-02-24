
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    if(msg.guild.channels.map(r => r.name).join("").length > 2000) return msg.reply('This server has too many channels to display! (' + msg.guild.channels.size + ' roles)')

    let embed = new RichEmbed()
    .setDescription(msg.guild.channels.map(r => r.name).join(", "))  
    .setColor("BLUE")
    msg.channel.send(embed)
}



module.exports.help = {
    name:"channels",
    usage:"*channels",
    example:"*channels",
    guildOnly: true,
    group: "info",
    desc:"list of all channels in the server (including hidden channels)."
} 