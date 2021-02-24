const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    let member = msg.mentions.users.first();

    if (!member) member = msg.author

    msg.channel.send(
        new RichEmbed()
        .setColor('RANDOM')
        .setDescription(`${member} is ${ran(0, 100)}% gay!`)
    );
   
}

function ran(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.help = {
    name:"gay",
    usage:"*gay <@user>",
    example:"*gay @JTRz",
    group: "rude",
    desc:"Tells you how gay you are. Mentioning a user tells how gay the specified user is."
} 