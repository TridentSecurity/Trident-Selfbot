
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    let server = client.guilds.get(args[0])
    let serverToAssign = client.guilds.get(args[1])
    if(!server || !serverToAssign) return msg.reply('I could not find that guild, please try again.')
    if(!serverToAssign.me.hasPermission("MANAGE_EMOJIS")) return msg.reply('you do not have manage_emojis in the guild you are trying to create them in.')
    

    let emojis = server.emojis.array()

    msg.channel.send(`Creating ${emojis.length} emojis for ${serverToAssign}`)
    for(let i = 0; i < emojis.length; i++) {
        try {

      
        if(emojis[i].animated) {
            await serverToAssign.createEmoji(`https://cdn.discordapp.com/emojis/${emojis[i].id}.gif`, emojis[i].name)
        } else if(!emojis[i].animated) {
            await serverToAssign.createEmoji(`https://cdn.discordapp.com/emojis/${emojis[i].id}.png`, emojis[i].name)
        }
    } catch(err) {
        console.log('Errored, file too large or max emojis reached.')
    }
    }

    msg.channel.send('Done!')
}


module.exports.help = {
    name:"emoji-copy",
    usage:"*emoji-copy <server id> <server id to copy to>",
    example:"*emoji-copy 671308934325469224 674938154322624525",
    ownerOnly: true,
    guildOnly: true,
    group: "user",
    desc:"Takes emojis from the server and auto-uploads them into yours."
} 