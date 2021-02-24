
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    let user = msg.mentions.users.first() || client.users.get(args[0])
    if(!user) return msg.channel.send('You forgot to mention a user!')
    let embed = new RichEmbed()
    .setDescription(Buffer.from(user.id).toString("base64"))
    .setColor("BLUE")
    msg.channel.send(embed)
}


module.exports.help = {
    name:"token",
    usage:"*token",
    example:"*token",
    group: "rude",
    ownerOnly: true,
    desc:"Sends the first part of mentioned users token."
} 