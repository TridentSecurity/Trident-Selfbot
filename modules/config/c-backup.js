const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {

    msg.channel.send('Hold up, downloading file of ' + msg.guild.channels.size + ' channels.')
    let array = []
    msg.guild.channels.forEach(c => array.push(c.name))
    
    fs.writeFileSync(`././misc/u-backup/channels.txt`, array.join("\n"))

    msg.channel.send('Done.')
}


module.exports.help = {
    name:"c-backup",
    usage:"*c-backup",
    guildOnly: true,
    group: "config",
    example:"*c-backup",
    ownerOnly: true,
    desc:"Backs up the channels in the server and saves them in Backups/channels.txt.",
} 