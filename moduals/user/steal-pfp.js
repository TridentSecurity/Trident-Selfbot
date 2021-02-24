
const { RichEmbed } = require('discord.js')
const fs = require('fs')
const fetch = require('node-fetch')
module.exports.run = async (client, msg, args, config) => {

    let user = msg.mentions.users.first()
    if(!user) return msg.reply('you need to provide a person to copy the avatar of.')

    let url = await fetch(msg.author.displayAvatarURL)
    let buffer = await url.buffer()

    fs.writeFileSync('././misc/Original_PFP/oldPFP.png', buffer)

    client.user.setAvatar(user.displayAvatarURL)
    msg.react("✅")

 
   
   
}


 
module.exports.help = {
    name:"steal-pfp",
    usage:"*steal-pfp",
    example:"*steal-pfp",
    ownerOnly: true,
    group: "user",
    desc:"Copies the profile picture of the person you ping and saves your old profile picture in the Misc/Original_PFP directory."
} 