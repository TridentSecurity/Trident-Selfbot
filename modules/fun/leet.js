const leet = require('1337')
module.exports.run = (client, msg, args, config) => {

    if (!args[0]) return msg.reply('I need something to leet!')
    if (args.join(" ").length > 2048) return msg.reply('Text can not exceed 2048 characters.')
    msg.channel.send(`${leet(args.join(" "))}`)
    

}


module.exports.help = {
    name:"leet",
    usage:"*leet <text>",
    example:"*leet hello",
    group: "fun",
    desc: "Turns your message into leet speak."
}