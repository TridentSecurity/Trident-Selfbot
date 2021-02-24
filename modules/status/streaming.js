module.exports.run = (client, msg, args, config) => {

    if (!args[0]) return msg.reply('I need a message to set as streaming.')

    if (args.join(" ").length > 100) return msg.reply('That is too long of a message to set.')
    client.user.setActivity(args.join(" "), { type: "STREAMING"})
    msg.react("✅")



    
  
}


module.exports.help = {
    name:"streaming",
    group: "status",
    usage:"*streaming <message>",
    example:"*streaming cex is cool",
    desc: "Sets your streaming status to your message."
}