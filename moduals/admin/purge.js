module.exports.run = async (client, msg, args, config) => {

    
   
    if(!args[0]) return msg.reply('I need an amount to purge!')
    if(isNaN(args[0])) return msg.reply('That was not a valid number.')
    const actualAmount = parseInt(args[0])
    let amount = 0;
    let check = true;

    while(check) {

        
        let messages = await msg.channel.fetchMessages({limit: 100})

        if(!messages.size) return msg.reply('No messages were found! deleted ' + amount + ' messages.')
        if(amount >= actualAmount) {
            return msg.reply('Done! deleted ' + amount + ' messages.')
        }

        for(let i = 0; i < messages.array().length; i++) {
            if(amount >= actualAmount) {
                return msg.reply('Done! deleted ' + amount + ' messages.')
            }
            await messages.array()[i].delete()
            amount++;

        }

    }


}


module.exports.help = {
    name:"purge",
    usage:"*purge <amount>",
    desc: "Purges x amount of message in the channel. Requires manage messages permission.",
    example:"*purge 1000",
    group: "admin",
    ownerOnly: false,
}