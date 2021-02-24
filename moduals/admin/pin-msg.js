module.exports.run = async (client, msg, args, config) => {

   
    if (!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.reply('You need the manage_messages permission to use this.')
    msg.delete()
	
    if(!args[0]) return msg.reply('I need an amount to pin!')
    if(isNaN(args[0])) return msg.reply('That was not a valid number.')
    const actualAmount = parseInt(args[0])
    let amount = 0;
    let check = true;

    while(check) {

        
        let messages = await msg.channel.fetchMessages({limit: 100})

        if(!messages.size) return msg.reply('No messages were found! pinned ' + amount + ' messages.')
        if(amount >= actualAmount) {
            return msg.reply('Done! pinned ' + amount + ' messages.')
        }

        for(let i = 0; i < messages.array().length; i++) {
            if(amount >= actualAmount) {
                return msg.reply('Done! pinned ' + amount + ' messages.')
            }
            await messages.array()[i].pin()
            amount++;

        }

    }


}


module.exports.help = {
    name:"pin-msg",
    usage:"*pin-msg <amount>",
    desc: "Pins x amount of messages in the channel.",
    example:"*ping-msg 10",
    group: "admin",
    ownerOnly: true,
}