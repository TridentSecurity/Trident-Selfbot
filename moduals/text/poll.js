const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    let question = args.join(" ")
    if(!question) return msg.reply('You forgot a question!')
    if(question.length > 2048) return msg.reply('Question may not exceed 2048 characters')
   
    let embed = new RichEmbed()
    .setDescription(question)
    .setColor("RANDOM")

    msg.channel.send(embed).then(async m => {
       await m.react("✅")
       await m.react("❌")
    })
}



 
module.exports.help = {
    name:"poll",
    usage:"*poll <question>",
    example:"*poll is JTRz gay?",
    group: "text",
    desc: "Creates a poll and lets people react yes/no.",
} 