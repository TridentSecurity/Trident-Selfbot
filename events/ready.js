const Discord = require('discord.js')
module.exports = (client) => {
    client.afk = new Discord.Collection()
    client.copycat = new Discord.Collection()
    client.snipe = new Discord.Collection()
    client.editmode = new Discord.Collection()
    client.emotemode = new Discord.Collection()
    client.giveaway = new Discord.Collection()
    console.log(`connected to ${client.user.tag}.`)
}
