module.exports.run = (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply('You need the BAN_MEMBERS permission to use this.')
    if(!args[0]) return msg.reply('You need to specify a name to ban.')
    let filtered = msg.guild.members.filter(mem => mem.user.username.toLowerCase() === args.join(" ").toLowerCase())
    if(!filtered.size) return msg.reply('there were no users with that username in this guild!') 
    filtered.forEach(mem => {
        mem.ban()
    })


    msg.channel.send(`Banned ${filtered.size} user(s)`)
    return;
    
}


module.exports.help = {
    name:"ban-name",
    group: "ADMIN",
    guildOnly: true,
    usage:"*ban-name <username>",
    desc: "Bans all users with that exact name. Requires you to have ban permission.",
    example:"*ban-name JTRz",
    ownerOnly: true,
}