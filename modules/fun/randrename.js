let words = require('../../assets/json/words.json')
module.exports.run = async (client, msg, args, config) => {

    if(!msg.guild.me.hasPermission("MANAGE_NICKNAMES")) return msg.reply('This command requires the manage_nicknames permission!')
    let members = msg.guild.members.array()
    
    msg.channel.send('Changing nicknames for ' + members.length + ' member(s), this may take some time.')
    for(let i = 0; i < members.length; i++) {

        await members[i].setNickname(words[Math.floor(Math.random() * words.length)])
       
    }

    msg.channel.send('Done changing nicknames.')

}


module.exports.help = {
    name:"randrename",
    usage:"*randrename",
    desc: "Gives everyone in the server a random nickname. Requires manage nickname permission.",
    example:"*randrename",
    group: "fun",
    ownerOnly: true,
    guildOnly: true,
}