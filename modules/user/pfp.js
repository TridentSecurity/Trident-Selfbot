
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    try {

        let user = msg.mentions.users.first()
        if(!user) return msg.reply('You forgot to mention a user to steal!')
  
    

    client.user.setAvatar(user.displayAvatarURL)
    await msg.react("✅")
    return;


} catch(err) {
    msg.channel.send('Error, make sure you are not trying to upload a gif image when you do not have nitro.')
}

}



module.exports.help = {
    name:"pfp",
    usage:"*pfp @user",
    example:"*pfp @cex",
    ownerOnly: true,
    group: "user",
    desc:"Grabs mentioned users profile picture and sets it as yours."
} 