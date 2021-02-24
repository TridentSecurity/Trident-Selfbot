
const { RichEmbed } = require('discord.js')
const fs = require('fs')
const fetch = require('node-fetch')
module.exports.run = async (client, msg, args, config) => {

 
    let guild = client.guilds.get(args[0])
    if(!guild) return msg.reply('Could not find that guild!')

    msg.channel.send('Downloading ' + guild.emojis.array().length + ' emojis, this may take some time.')
    for(let i = 0; i < guild.emojis.array().length; i++) {

        let url = await fetch(`https://cdn.discordapp.com/emojis/${guild.emojis.array()[i].id}.png`)
        let buffer = await url.buffer()

         fs.writeFileSync(`././misc/emojis/${guild.emojis.array()[i].name}.png`, buffer)


    }

    msg.channel.send('Done :)')
    
   
}


 
module.exports.help = {
    name:"emoji-grab",
    usage:"*emoji-grab <serverid>",
    example:"*emojigrab 2545385239571920",
    group: "user",
    guildOnly: true,
    ownerOnly: true,
    desc:"Deletes all the emoji in the server. Requires manage emojis permission."
} 