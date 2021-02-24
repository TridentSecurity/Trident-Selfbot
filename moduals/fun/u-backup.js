const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {

    msg.channel.send('Hold up, downloading file of ' + client.users.size + ' users.')
    let array = []
    client.users.forEach(u => array.push(u.tag))
    
    fs.writeFileSync('././misc/u-backup/usernames.txt', array.join("\n"))

    msg.channel.send('Done.')
}


module.exports.help = {
    name:"u-backup",
    usage:"*u-backup",
    group: "user",
    example:"*u-backup",
    ownerOnly: true,
    desc:"Saves name of every person in every server you are in.",
} 