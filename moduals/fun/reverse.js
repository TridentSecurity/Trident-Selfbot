module.exports.run = async (client, msg, args, config) => {

    let str = args.reverse()

    if (!str.length) return msg.reply('you need to input some text to reverse!')
    msg.channel.send(str.join(" "))
      
  
  }
  
  
  module.exports.help = {
      name:"reverse",
      usage:"*reverse <text>",
      desc:"Outputs your message backwards.",
      example:"*reverse cex is cool",
      group: "fun",
  }