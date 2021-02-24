module.exports.run = (client, msg, args, config) => {

    if (!args[0]) return msg.reply('I need a message to set as playing.')

    if (args.join(" ").length > 100) return msg.reply('That is too long of a message to set.')
    client.user.setActivity(args.join(" "), { type: "PLAYING"})
    msg.react("✅")



    
  
}


module.exports.help = {
    name:"playing",
    group: "status",
    usage:"*playing <message>",
    example:"*playing cex is cool",
    desc: "Sets your playing status to your message."
}