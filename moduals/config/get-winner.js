const ms = require('ms')
module.exports.run = async (client, msg, args, config) => {
    if(!client.giveaway.has(client.user.id)) {
        return msg.reply('You have not created a giveaway yet!')
    }
    if(!args[0]) return msg.reply('You forgot to specify a message ID.')
  
    let message = await msg.channel.fetchMessage(args[0])
    if(!message) return msg.reply('I could not find that message in this channel.')

    if(message.id !== client.giveaway.get(client.user.id)) {
        return msg.reply('You did not have a giveaway set to that message!')
    }
 

    let fetched = await message.reactions.first().fetchUsers()

    if(!fetched.size) return msg.reply('No users reacted.')
    


    let winner = fetched.random()
    msg.channel.send(`The winner is ${winner.username}(${winner.id})`)

    if(client.giveaway.has(client.user.id)) {
    client.giveaway.delete(client.user.id)
}
}



module.exports.help = {
    name:"get-winner",
    usage:"*get-winner <messageid>",
    group: "config",
    example:"*get-winner 359682394257829",
    ownerOnly: true,
    desc:"Manually selects a winner of the giveaway.",
} 