
const { RichEmbed } = require('discord.js')
const catfacts = require('cat-facts')
module.exports.run = async (client, msg, args, config) => {

    let embed = new RichEmbed()
    .setDescription(`${catfacts.random()}`)
    .setColor("RANDOM")
    msg.channel.send(embed)
}


module.exports.help = {
    name:"cfact",
    usage:"*cfact",
    example:"*cfact",
    group: "fun",
    desc:"Returns a random cat fact."
} 