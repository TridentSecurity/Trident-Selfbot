module.exports.run = (client, msg, args, config) => {

    let role = msg.guild.roles.find(r => r.name.startsWith(args[0])) || msg.guild.roles.get(args[0]) || msg.guild.roles.find(r => r.name === args.join(" ")) || msg.mentions.roles.first()

    if (!role) return msg.reply('I could not find that role')

    let user = msg.mentions.users.first() 

    if (!user) return msg.channel.send('I could not find that user!')

    msg.guild.member(user).addRole(role)
    msg.channel.send('Added ' + role.toString() + ' to ' + user.tag)
}

module.exports.help = {
    name:"mute",
    usage:"*mute",
    desc: "Assigns mentioned user the muted role.",
    example:"*mute <Muted Role> <user>",
    group: "admin",
	ownerOnly: true,
    guildOnly: true,
}