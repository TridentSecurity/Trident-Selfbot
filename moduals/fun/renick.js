const { sleep } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {

    if(!msg.guild.me.hasPermission("CHANGE_NICKNAME")) return msg.reply('This command requires the manage_nicknames permission!')
    
    msg.channel.send('Animating your nickname.')
    let nickname = client.user.username.split("")
    let str = "";
    for(let i = 0; i < nickname.length; i++) {
        sleep(1000)
        str += nickname[i]
        await msg.guild.member(msg.author).setNickname(str)
    }

    msg.channel.send('Done.')

}


module.exports.help = {
    name:"rename",
    usage:"*rename <name>",
    desc: "Renames everyone in the server to a name of your choice.",
    example:"*rename cex is cool",
    group: "fun",
    guildOnly: true,
    ownerOnly: true,
}