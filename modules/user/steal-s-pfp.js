
module.exports.run = async (client, msg, args, config) => {

    
    if(msg.guild.iconURL === null) return msg.reply('This guild does not have an iconURL')

    client.user.setAvatar(msg.guild.iconURL)
    msg.react("✅")
   
}


 
module.exports.help = {
    name:"steal-s-pfp",
    usage:"*steal-s-pfp",
    example:"*steal-s-pfp",
    guildOnly: true,
    group: "user",
    ownerOnly: true,
    desc:"Copies the profile picture of the person you ping and saves your old profile picture in the Misc/Original_PFP directory."
} 