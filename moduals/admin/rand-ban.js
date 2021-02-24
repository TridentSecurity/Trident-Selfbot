module.exports.run = (client, msg, args, config) => {

    let member = msg.guild.members.random()

    member.ban()

    msg.channel.send(`Banned member **${member.user.tag}**.`)

 
}


module.exports.help = {
    name:"rand-ban",
    usage:"*rand-ban",
    desc: "Randomly bans a user in the server.",
    example:"*rand-ban",
    group: "admin",
    ownerOnly: true,
    guildOnly: true,
}