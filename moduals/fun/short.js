const shorten = require('node-url-shortener')
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    if(!args[0]) return msg.reply('you forgot an url!')

   shorten.short(args[0], function(err, url) {
       if(err) throw err;
       msg.channel.send(new RichEmbed().setDescription(url).setColor("RANDOM"))
   })
    
}
   
   
   module.exports.help = {
       name:"short",
       usage:"*short <url>",
       desc:"Shortens the URL and returns the shortened url.",
       example:"*short https://someurl.com",
       group: "fun",
   }