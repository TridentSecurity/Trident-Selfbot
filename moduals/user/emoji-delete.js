
const { RichEmbed } = require('discord.js')
let interval;
const Discord = require('discord.js')
module.exports.run = async (client, msg, args, config) => {
    let serverToAssign = client.guilds.get(args[0])

    if(!serverToAssign) return msg.reply('I could not find that guild')
    if(!serverToAssign.me.hasPermission("MANAGE_EMOJIS")) return msg.reply('you do not have manage_emojis in the guild you are trying to delete them in.')
   
    let emojis = serverToAssign.emojis.array()

    if(emojis.length < 1) return msg.reply('that guild did not have any emojis.')

    for(let i = 0; i < emojis.length; i++ ) {

        await serverToAssign.deleteEmoji(emojis[i])

    }

    msg.channel.send('done.')
}


module.exports.help = {
    name:"emoji-delete",
    usage:"*emoji-delete <guildid>",
    example:"*emoji-delete 674938154322624525",
    ownerOnly: true,
    guildOnly: true,
    group: "user",
    desc:"Deletes all the emoji in the server. Requires manage emojis permission."
} 