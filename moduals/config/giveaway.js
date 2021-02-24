const ms = require('ms')
module.exports.run = async (client, msg, args, config) => {

    if(!args[0]) return msg.reply('You forgot to specify a time!')
    if(client.giveaway.has(client.user.id)) return msg.reply('Please finish the current giveaway or restart the bot before starting another one!')
    let time = ms(args[0])
    if(!time) return msg.reply('That was not a valid time!')
    if(time > 10000000) return msg.reply('That is too long!')

    let winners = args[1]
    if(!winners) return msg.reply('You need to specify the amount of winners.')

    let item = args.join(" ").trim().slice(args[0].length).slice(args[1].length).slice(2)
    console.log(item)
    if(!item) return msg.reply('You forgot to specify an item to give away!')
    if(item.length > 1300) return msg.reply('item may not exceed 1300 chars.')

    let m = await msg.channel.send(`React to this message to have a chance of winning **${item}**!`)

    await m.react("🎉")

    client.giveaway.set(client.user.id, m.id)
    let filter = (reaction,user) => reaction.emoji.name === "🎉"
    let awaitingReactions = await m.awaitReactions(filter, { time: time })

    if(!awaitingReactions.size) return msg.channel.send('Nobody reacted, so nobody has won!')

    let users = awaitingReactions.first().users.filter(obj => obj.id !== client.user.id)

    
    if(!users.size) return msg.reply('No users reacted!')
    let winner = users.random()
    msg.channel.send(`The winner of the giveaway is ${winner.username}(${winner.id})`)

    if(client.giveaway.has(client.user.id)) {
    client.giveaway.delete(client.user.id)
}
}



module.exports.help = {
    name:"giveaway",
    usage:"*giveaway",
    group: "config",
    example:"*giveaway 2m 1 Discord Nitro",
    ownerOnly: true,
    desc:"Creates a giveaway and announces the winner(s) when done. Users can participate by reacting to the message.",
} 