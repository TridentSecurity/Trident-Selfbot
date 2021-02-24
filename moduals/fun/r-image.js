const { RichEmbed } = require('discord.js')
module.exports.run = (client, msg, args, config) => {

    let embed = new RichEmbed()
    .setImage(`https://i.picsum.photos/id/${Math.floor(Math.random() * 1050)}/800/300.jpg`)
    .setColor("RANDOM")

    msg.channel.send(embed)

    
}


module.exports.help = {
    name:"r-image",
    usage:"*r-image",
    example:"*r-image",
    desc:"Returns a random image.",
    group: "fun",
}