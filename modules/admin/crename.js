module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_CHANNELS")) return msg.reply('You need the MANAGE_CHANNELS permission to use this.')
   
    if(!args[0]) return msg.reply('You forgot to specify a name to rename to!')

    msg.channel.send('Renaming ' + msg.guild.channels.size + ' channels.')
    let channels = msg.guild.channels.array()
    for(let i = 0; i < channels.length; i++) {

        await channels[i].setName(args[0])

    }

    msg.channel.send('done.')
    
}


module.exports.help = {
    name:"crename",
    group: "ADMIN",
    usage:"*crename <name>",
    guildOnly: true,
    desc: "Renames all the channels in the server to a name of your choice. Requires the manage channels permission.",
    example:"*crename cexiscool",
    ownerOnly: true,
}