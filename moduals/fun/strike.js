module.exports.run = async (client, msg, args, config) => {

    let text = args.join(" ")
    if(text.length > 2000) return msg.channel.send('text may not exceed 2000 characters')

    msg.channel.send(`~~${text}~~`)
      
  
  }
  
  
  module.exports.help = {
      name:"strike",
      usage:"*strike <text>",
      group: "fun",
      desc:"Puts a strike through your message.",
      example:"*strike cex is cool",
  }