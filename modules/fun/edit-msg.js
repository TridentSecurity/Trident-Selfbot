let markdowns = ["brainfuck", "css", "yaml", "fix"]
const { sleep } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {

    if(!args.join(" ").length) return msg.reply('you need to input a message!')

    let message = args.join(" ").trim().split("")
    let m = await msg.channel.send(message[0])
    let str = message[0]
    for(let i = 1; i < message.length; i++) {
        sleep(1000)
        str += message[i]
          await m.edit(str)
    }
}


module.exports.help = {
    name:"edit-msg",
    group: "fun",
    usage:"*edit-msg <message>",
    example:"*edit-msg hello",
    desc:"Sends the message with a cool edit-animation."
} 