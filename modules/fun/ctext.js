let markdowns = ["brainfuck", "css", "yaml", "fix"]
module.exports.run = async (client, msg, args, config) => {

    if(!args.join(" ").length) return msg.reply('You need to type some text!')
    msg.channel.send(args.join(" "), { code: markdowns[Math.floor(Math.random() * markdowns.length)]})
  
}


module.exports.help = {
    name:"ctext",
    group: "fun",
    usage:"*ctext <text>",
    example:"*ctext cex is cool",
    desc:"Sends your message in a random color."
} 