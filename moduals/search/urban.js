
const { RichEmbed } = require('discord.js')
const urban = require('relevant-urban')
module.exports.run = async (client, msg, args, config) => {

    try {
    const search = await urban(args.join(" "))

    let embed = new RichEmbed()
    .setDescription(`**${search.word}**\nDefinition: **${search.definition}**\n\n${search.example}`)
    .setColor("RANDOM")
    msg.channel.send(embed)
} catch(err) {
    return msg.reply('Could not find that query.')
}
    
    
  
}


module.exports.help = {
    name:"urban",
    usage:"*urban <search>",
    group: "search",
    desc: "*urban <text>",
    example:"*urban selfbots",
}