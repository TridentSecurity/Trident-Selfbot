const ms = require('ms')
module.exports.run = (client, msg, args, config) => {

    if(!args[0]) return msg.reply('You forgot to specify how many seconds you should wait until sending the message!')

    let time = ms(args[0])
    if(!time || time < 1000) return msg.reply('That was not a valid time, please enter something like `2s` `1m` etc..')
    let message = args.join(" ").slice(args[0].length)

    if(!message) return msg.reply('You forgot a message to send!')

    setTimeout(() => {
        msg.channel.send(message)
    }, time);
    
    

}


module.exports.help = {
    name:"msg-afk",
    usage:"*msg-afk <seconds> <text>",
    example:"*msg-afk 5s hello",
    group: "fun",
    desc: "Sends a message after x amount of time."
}