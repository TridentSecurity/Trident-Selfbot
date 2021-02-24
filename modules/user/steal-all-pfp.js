
const { RichEmbed } = require('discord.js')
const fs = require('fs')
const fetch = require('node-fetch')
module.exports.run = async (client, msg, args, config) => {

 
    let members = msg.guild.members.array()

    msg.channel.send('Downloading ' + members.length + ' avatars, this may take some time.')
    for(let i = 0; i < members.length; i++) {

        let url = await fetch(members[i].user.displayAvatarURL)
        let buffer = await url.buffer()

         fs.writeFileSync(`././misc/avatars/${members[i].user.tag}.png`, buffer)


    }

    msg.channel.send('Done :)')
    
   
}


 
module.exports.help = {
    name:"steal-all-pfp",
    usage:"*steal-all-pfp",
    example:"*steal-all-pfp",
    guildOnly: true,
    ownerOnly: true,
    group: "user",
    desc:"Downloads the profile picture of everyone in the server.."
} 