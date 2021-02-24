const { RichEmbed } = require('discord.js')
const { randomString } = require("../../util/Functions");
module.exports.run = async (client, msg, args, config) => {


    msg.channel.send(new RichEmbed().setDescription(randomString(50)).setColor("RANDOM"))     

   
}


module.exports.help = {
    name:"keys",
    usage:"*keys",
    example:"*keys ",
    group: "fun",
    desc:"Generates a random key."
} 