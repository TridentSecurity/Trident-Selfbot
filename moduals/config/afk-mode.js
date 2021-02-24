module.exports.run = (client, msg, args, config) => {

    
    if(!client.afk.get(client.user.id)) {
        if (args.join("").length > 2048) return msg.reply('Too long of a message!') 
        client.afk.set(client.user.id, args.join(" "))
        msg.reply('Turned on afk mode.')
        return;
    } else if(client.afk.get(client.user.id)) {
        client.afk.delete(client.user.id)
        msg.reply('Turned off afk mode.')
        return;
    }


}

exports.help = {
    name:"afk-mode",
    usage:"afk-mode <message>",
    group: "config",
    desc: "While on, auto replies to private messages with your custom message set.",
    ownerOnly: false,
    example:"afk-mode <message> (will turn off if it's on and vice versa)"
}