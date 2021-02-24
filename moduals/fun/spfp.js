const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    if(msg.guild.iconURL === null) return msg.reply('This guild does not have an icon.')
    let embed = new RichEmbed()
    .setImage(msg.guild.iconURL)
    .addField('URL', msg.guild.iconURL)
    msg.channel.send(embed)

  
}
   
   
module.exports.help = {
    name:"spfp",
    guildOnly: true,
    usage:"*spfp",
    desc:"Grabs the servers profile picture.",
    example:"*spfp",
    group: "fun",
   }