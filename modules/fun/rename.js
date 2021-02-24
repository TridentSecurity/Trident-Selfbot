module.exports.run = async (client, msg, args, config) => {

    if(!msg.guild.me.hasPermission("MANAGE_NICKNAMES")) return msg.reply('This command requires the manage_nicknames permission!')
    let members = msg.guild.members.array()

    if (args.join(" ").length > 32) return msg.reply('Nicknames can not exceed 32 characters.')
    msg.channel.send('Changing nicknames for ' + members.length + ' member(s), this may take some time.')
    for(let i = 0; i < members.length; i++) {

        await members[i].setNickname(args.join(" "))
       
    }

    msg.channel.send('Done changing nicknames.')

}


module.exports.help = {
    name:"rename",
    usage:"*rename <name>",
    desc: "Renames everyone in the server to a name of your choice.",
    example:"*rename cex is cool",
    group: "fun",
    ownerOnly: true,
    guildOnly: true,
}