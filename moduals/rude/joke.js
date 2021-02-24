const { RichEmbed } = require('discord.js')
const InsultCompliment = require("insult-compliment");
module.exports.run = async (client, msg, args, config) => {


    msg.channel.send(new RichEmbed().setDescription(InsultCompliment.Insult()).setColor("BLUE"))     

   
}


module.exports.help = {
    name:"joke",
    usage:"*joke",
    example:"*joke ",
    group: "rude",
    desc:"Sends a random joke in an embed."
} 