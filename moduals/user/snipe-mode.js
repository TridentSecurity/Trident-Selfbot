
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

   
    if(client.snipe.get(`${client.user.id}-${msg.guild.id}`)) {
        client.snipe.delete(`${client.user.id}-${msg.guild.id}`)
        msg.channel.send('Disabled snipe-mode.')
        return;
    }

    msg.channel.send('Enabled sniped mode.')
    client.snipe.set(`${client.user.id}-${msg.guild.id}`, true)



   
}



module.exports.help = {
    name:"snipe",
    usage:"*snipe",
    guildOnly: true,
    example:"*snipe",
    ownerOnly: true,
    group: "user",
    desc:"Snipes the last deleted message in the server."
} 