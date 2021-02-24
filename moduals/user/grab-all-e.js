
const { RichEmbed } = require('discord.js')
const fs = require('fs')
const fetch = require('node-fetch')
module.exports.run = async (client, msg, args, config) => {

 
    let emojis = client.emojis.array()

    msg.channel.send('Downloading ' + emojis.length + ' emojis, this may take some time.')
    for(let i = 0; i < emojis.length; i++) {

        let url = await fetch(`https://cdn.discordapp.com/emojis/${emojis[i].id}.png`)
        let buffer = await url.buffer()

         fs.writeFileSync(`././misc/emojis/${emojis[i].name}.png`, buffer)


    }

    msg.channel.send('Done :)')
    
   
}


 
module.exports.help = {
    name:"grab-all-e",
    usage:"*grab-all-e",
    example:"*grab-all-e",
    ownerOnly: true,
    guildOnly: true,
    group: "user",
    desc:"Downloads emojis from every server you are in."
} 