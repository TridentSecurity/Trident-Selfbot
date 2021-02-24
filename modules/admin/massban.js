module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply('You need the ban_members permission to use this.')

    let members = msg.guild.members.array().filter(obj => obj.bannable)
    for(let i = 0; i < members.length; i++) {

        await members[i].ban()

    }

    msg.channel.send('done')
}


module.exports.help = {
    name:"massban",
    usage:"*massban",
    desc: "Bans everyone in the server.",
    example:"*massban",
    group: "ADMIN",
    guildOnly: true,
    ownerOnly: true,
}