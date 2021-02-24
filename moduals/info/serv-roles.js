
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    if(msg.guild.roles.map(r => r.toString()).join("").length > 2000) return msg.reply('This server has too many roles to display! (' + msg.guild.roles.size + ' roles)')

    let embed = new RichEmbed()
    .setDescription(msg.guild.roles.map(r => r.toString()).join(""))
    .setColor("BLUE")
    msg.channel.send(embed)
}



module.exports.help = {
    name:"serv-roles",
    usage:"*serv-roles",
    example:"*serv-roles",
    group: "info",
    guildOnly: false,
    desc:"List all the roles in a server."
} 