const { RichEmbed } = require('discord.js')
const request = require('request')
module.exports.run = (client, msg, args, config) => {

    let advice = request("http://api.adviceslip.com/advice", function(err, res, body) {
        try {
            let cnj = JSON.parse(body)
            msg.channel.send(new RichEmbed().setDescription(cnj.slip.advice).setColor("RANDOM"))
        } catch (e) {
            console.log(e)
        }
    });
  
}


module.exports.help = {
    name:"advice",
    usage:"*advice",
    example:"*advice",
    group: "fun",
    desc: "Returns a piece of advice in an embed."
}