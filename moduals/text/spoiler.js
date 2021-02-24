module.exports.run = async (client, msg, args, config) => {

    let text = args.join(" ")
    if(text.length > 2000) return msg.channel.send('text may not exceed 2000 characters')

    msg.channel.send(`||${text}||`)
      
  
  }
  
  
  module.exports.help = {
      name:"spoiler",
      usage:"*spoiler <text>",
      group: "text",
      desc:"Turns your message into a spoiler.",
      example:"*spoiler cex is cool",
  }