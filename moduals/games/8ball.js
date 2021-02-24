const { RichEmbed } = require('discord.js')
module.exports.run = (client, msg, args, config) => {

    let question = args.join(" ")
    if(!question) return msg.reply('You need to ask a question!')
    if (question.length > 2000) return msg.reply('Question may not exceed 2000 characters.')
    let embed = new RichEmbed()
    .setDescription(`**${question}**\n\nAnswer: \`${["yes", "no", "possibly", "definatly", "definatly not"][Math.floor(Math.random() * 1)]}\``)
    .setColor("RANDOM")
    msg.channel.send(embed)

  
}


module.exports.help = {
    name:"8ball",
    usage:"*8ball <question>",
    example:"*8ball am i gay?",
    group: "games",
    desc: "Returns an answer to your question"
}