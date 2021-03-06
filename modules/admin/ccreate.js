const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {

    if(!msg.guild.me.hasPermission("MANAGE_CHANNELS")) return msg.reply('you do not have the manage_channels permissions.')
    fs.readFile("././misc/u-backup/channels.txt", { encoding: "utf8" }, async function(err, data) {

        if(err) return msg.channel.send('Could not find a backup file!')
        let array = data.split("\n")

        for(let i = 0; i < array.length; i++) {

            if(array[i].split(" ").length > 1) {
                await msg.guild.createChannel(array[i], { type:"voice"})
            } else if(array[i].split(" ").length <= 1) {
                await msg.guild.createChannel(array[i], { type:"text"})
            }
 
        }

        msg.channel.send('Done!')
        
    })
    
}


module.exports.help = {
    name:"ccreate",
    usage:"*ccreate <name>",
    group: "ADMIN",
    example:"*ccreate cexiscool",
    guildOnly: true,
    ownerOnly: true,
    desc:"Creates a channel in the server with a name of your choice. Requires you to have manage channels permission.",
} 