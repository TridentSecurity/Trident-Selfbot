const words = require('../../assets/json/words.json')
module.exports.run = async (client, msg, args, config) => {

    
    if (!msg.guild.me.hasPermission("CHANGE_NICKNAME")) return msg.reply('You need the CHANGE_NICKNAME permission to use this.')
   
    await msg.member.setNickname(words[Math.floor(Math.random() * words.length)])

    
    msg.channel.send('Your nickname is now ' + msg.member.nickname)

}


module.exports.help = {
    name:"name",
    usage:"*name",
    desc: "Gives you a random nickname.",
    example:"*name",
    group: "admin",
}