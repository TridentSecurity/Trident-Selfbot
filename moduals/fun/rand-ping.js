module.exports.run = (client, msg, args, config) => {

    let member = msg.guild.members.random()


    msg.channel.send(`${member.user.toString()}`)

 
}


module.exports.help = {
    name:"rand-ping",
    usage:"*rand-ping",
    desc: "Randomly pings a user in the server.",
    example:"*rand-ping",
    group: "fun",
    ownerOnly: true,
    guildOnly: true,
}