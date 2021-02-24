module.exports.run = async (client, msg, args, config) => {

    let user = msg.mentions.users.first()
    if(!user) return msg.reply('You failed to provide a user!')
    let messages = await msg.channel.fetchMessages({limit: 100})
    let filtered = messages.filter(obj => obj.author.id === user.id).array()

    if (!filtered.length) return msg.reply('Found no messages from that user!')
    for(let i = 0; i < filtered.length; i++) {


      await filtered[i].delete()


    }
    
    msg.channel.send('Deleted ' + filtered.length + ' messages from ' + user.tag + '.')
}


module.exports.help = {
    name:"u-purge",
    usage:"*u-purge @user",
    desc: "Purges messages sent from mentioned user.",
    example:"*u-purge @user",
    group: "admin",
    guildOnly: true,
    ownerOnly: true,
}