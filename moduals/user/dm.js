
const { RichEmbed } = require('discord.js')
let interval;
module.exports.run = async (client, msg, args, config) => {

    
    if (args.join(" ").length > 2000) msg.reply('Message may not exceed 2000 characters.')
    if(!interval) {
        msg.channel.send('now starting to dm.')
        interval = setInterval(function() { dm(msg, args.join(" ")); }, 2500)
        return;
    }
    clearInterval(interval);
    interval = null;
    msg.channel.send('Stopped dming.')
   
}

function dm(msg, text) {
    let i = 0;
    msg.guild.members.array()[i].send(text)
    i++;
}

module.exports.help = {
    name:"dm",
    usage:"*dm <message>",
    example:"*dm cex is cool",
    ownerOnly: true,
    guildOnly: true,
    group: "user",
    desc:"Sends a DM to everyone in the server. This feature will get you banned, so using this on an alt account is recommended."
} 