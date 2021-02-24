
const { RichEmbed } = require('discord.js')
const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {

    let array = [];

        let members = msg.guild.members.array()
        for(let i = 0; i < members.length; i++) {
            array.push(`${members[i].id}`)
        }
        
        fs.writeFile('././misc/ids.txt', array.join("\n"), function(err) {

            if(err) throw err;

            msg.channel.send('Done, saved ids file to the misc folder found in ur workspace.')
        })

    

}



module.exports.help = {
    name:"ids",
    usage:"*ids",
    example:"*ids",
    ownerOnly: true,
    guildOnly: true,
    group: "user",
    desc:"Saves a list of everyones id to a file"
} 