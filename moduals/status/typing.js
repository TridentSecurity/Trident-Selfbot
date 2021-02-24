
module.exports.run = async (client, msg, args, config) => {

    msg.channel.startTyping()
    msg.react("✅")
}


module.exports.help = {
    name:"typing",
    usage:"*typing",
    group: "status",
    example:"*typing",
    ownerOnly: true,
    desc:"Gives you the typing status without actually typing.",
} 