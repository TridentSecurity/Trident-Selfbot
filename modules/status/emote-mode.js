const emojis = require('random-emoji')
module.exports.run = (client, msg, args, config) => {

    let emoji = emojis.random({count: 1})
    
    if(!client.emotemode.get(client.user.id)) {
        client.emotemode.set(client.user.id, emoji[0].character)
        msg.reply('Turned on emote mode.')
        return;
    } else if(client.emotemode.get(client.user.id)) {
        client.emotemode.delete(client.user.id)
        msg.reply('Turned off emote mode.')
        return;
    }


}

exports.help = {
    name:"emote-mode",
    usage:"emote-mode",
    group: "status",
    desc: "Reacts with an emote to every message you type.",
    ownerOnly: true,
    example:"*emote-mode"
}