const isReachable = require('is-reachable');
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    if(!args[0]) return msg.reply('You forgot a website or ip to check!')
    let reachable = await isReachable(args[0])

    if(reachable) {
        return msg.channel.send(new RichEmbed().setDescription(`${args[0]} is online.`).setColor("BLUE"))
    } 
    return msg.channel.send(new RichEmbed().setDescription(`${args[0]} is offline.`).setColor("BLUE"))
    
  
}


module.exports.help = {
    name:"chping",
    usage:"*chping <url> <ip>",
    group: "ip",
    desc: "Checks if the website is online or offline and returns the answer in an embed.",
    example:"*chping https://google.com",
}