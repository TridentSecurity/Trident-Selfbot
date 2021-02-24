




module.exports.run = (client, msg, args, config) => {

    let password = args[0]
    if (!password) return msg.reply('You need to put your password as second argument, do this somewhere nobody can see you type it.')
    client.user.setAvatar("https://cdn.discordapp.com/attachments/675096319848873994/675101288954069062/transparent-picture.png")
    client.user.setUsername("ٴٴٴٴٴٴٴٴٴٴ")
    msg.react("✅")
          

}


module.exports.help = {
    name:"blank",
    usage:"*blank",
    group: "user",   
    example:"*blank",
    desc:"Makes your name and profile picture invisible."
}