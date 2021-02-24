const translate = require('translate-google')

module.exports.run = async (client, msg, args, config) => {


  
    let text = args.join(" ")
    if(!text) return msg.reply('I need some text to translate!')
  
    if(text > 2000) return msg.reply('text may not exceed 2000 chars.')
    translate(text.trimLeft(), { to: "en"}).then(res => {
        msg.channel.send(res)
    }).catch(e => console.log(e))


}
  
  
  module.exports.help = {
      name:"translate",
      usage:"*translate <text>",
      group: "fun",
      desc:"Translates your message to whatever language you specify.",
      example:"*translate sv jag älskar dig",
  }