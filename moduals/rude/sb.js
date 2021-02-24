const { RichEmbed } = require('discord.js')
module.exports.run = (client, msg, args, config) => {
    let replies = [
        "@everyone",
		"@everyone",
        "@everyone",
		]
         let random = Math.floor(Math.random() * replies.length)
         let element = new message()
         .setDescription(`@everyone`)
         msg.channel.send(message)
}
 module.exports.help = {
    name:"sb",
    usage:"*sb",
    example:"*sb",
    group: "rude",
    desc: "spam pings."
}