module.exports.run = async (client, msg, args, config) => {

    
    if(!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.reply('this cmd requires the manage_messages permissions')
    let messages = await msg.channel.fetchPinnedMessages();
    let toArray = messages.array()
    for(let i = 0; i < parseInt(args[0]); i++) {

    if(toArray[i] === undefined) {
        return msg.reply('Done, deleted ' + i + ' pinned messages.')
    }
        
    await toArray[i].unpin()

    }


    
    msg.channel.send('Done, deleted ' + args[0] + ' pinned messages.')

}


module.exports.help = {
    name:"unpin",
    group: "admin",
    usage:"*unpin <amount>",
    desc: "Unpins x amount of messages in a channel. Requires manage message permissions.",
    example:"*unpin 10",
    ownerOnly: true,
    guildOnly: true,
}