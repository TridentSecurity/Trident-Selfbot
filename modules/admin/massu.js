module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.reply('You need the ADMINISTRATOR permission to use this.')

    let members = await msg.guild.fetchBans().keyArray()
    for(let i = 0; i < members.length; i++) {

        await msg.guild.unban(members[i])

    }

    msg.channel.send('done')
}


module.exports.help = {
    name:"massu",
    usage:"*massu",
    desc: "Unbans everyone in the server.",
    example:"*massu",
    group: "ADMIN",
    ownerOnly: true,
    guildOnly: true,
}