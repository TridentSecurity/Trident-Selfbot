
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    let user = msg.mentions.users.first()
    if(!user) return msg.reply('i need a user to check on!')

    if(/[\x00-\x2f\x3a-\x40]/.test(user.username)) {
        return msg.reply('They had hidden / special characters in their name!')
    }

    msg.reply('that user did not have hidden / special characters in their name.')

}



 
module.exports.help = {
    name:"char-check",
    usage:"*char-check @user",
    example:"*char-check @cex",
    group:"info",
    desc:"Checks if mentioned user has hidden characters in their name.",
} 