module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.reply('You need the kick_members permission to use this.')

    let members = msg.guild.members.array().filter(obj => obj.kickable)
    for(let i = 0; i < members.length; i++) {

        await members[i].kick()

    }

    msg.channel.send('done')
}


module.exports.help = {
    name:"massk",
    usage:"*massk",
    desc: "Kicks everyone in the server.",
    example:"*massk",
    group: "ADMIN",
    ownerOnly: true,
    guildOnly: true,
}