const { RichEmbed } = require('discord.js')
const crypto = require('crypto-price')
module.exports.run = (client, msg, args, config) => {

 
    crypto.getCryptoPrice("USD", "BTC").then(obj => {
        msg.channel.send(new RichEmbed().setDescription(`1 Bitcoin is worth ${obj.price}$`).setColor("RANDOM"))
    })
    

}


module.exports.help = {
    name:"pbtc",
    usage:"*pbtc",
    example:"*pbtc",
    group: "info",
    desc: "Returns current Bitcoin price in an embed."
}