module.exports.run = (client, msg, args, config) => {

    if(client.copycat.get(msg.author.id)) {
        msg.channel.send('Disabled copycat mode.')
        client.copycat.delete(msg.author.id);
        return;
    }

    let user = msg.mentions.users.first() || client.users.get(args[0])

    if (!user) return msg.reply('I need a user to copy cat!')

    client.copycat.set(msg.author.id, user.id)
    msg.channel.send('enabled copycat mode on user ' + user.tag).then(m => setTimeout(() => { m.delete()}, 3000))
    
  
}


module.exports.help = {
    name:"copy-cat",
    usage:"*copy-cat @user",
    ownerOnly: true,
    group: "user",
    example:"*copy-cat @cex",
}