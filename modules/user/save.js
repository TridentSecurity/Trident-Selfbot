
const { RichEmbed } = require('discord.js')
const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {

    let array = [];
    if(args[0] === "friends") {


        let friends = client.user.friends.array()
        for(let i = 0; i < friends.length; i++) {
            array.push(`${friends[i].username}#${friends[i].discriminator}(${friends[i].id})`)
        }
        
        fs.writeFile('././misc/friends.txt', array.join("\n"), function(err) {

            if(err) throw err;

            msg.channel.send('Done, saved friends file to the misc folder found in ur workspace.')
        })

    }

}



module.exports.help = {
    name:"save",
    usage:"*save friends",
    example:"*save friends",
    ownerOnly: true,
    group: "user",
    desc:"Saves your friends to Misc/friends.txt"
} 