
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    let sniped = client.snipe.get(msg.guild.id)
    if(!sniped) return msg.reply('Found no sniped message!')
    msg.channel.send(new RichEmbed().setDescription(sniped.content).setAuthor(client.users.get(sniped.author).tag, client.users.get(sniped.author).displayAvatarURL).setTimestamp(sniped.time))
    
    
   
}



module.exports.help = {
    name:"snipe",
    usage:"*snipe",
    example:"*snipe",
    group: "user",
    guildOnly: true,
    desc:"Snipes the last deleted message in the server."
} 