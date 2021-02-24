
const { RichEmbed } = require('discord.js')
const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {

    let array = [];
    if(args[0] === "scrape") {


        let usernames = client.users.array()
        for(let i = 0; i < usernames.length; i++) {
            array.push(`${usernames[i].username}#${usernames[i].discriminator}(${usernames[i].id})`)
        }
        
        fs.writeFile('././misc/usernames.txt', array.join("\n"), function(err) {

            if(err) throw err;

            msg.channel.send('Done, saved usernames file to the misc folder found in ur workspace.')
        })

    }

}



module.exports.help = {
    name:"username",
    usage:"*username scrape",
    example:"*username scrape",
    ownerOnly: true,
    group: "user",
    desc:"Saves a list of everyones username to a file"
} 