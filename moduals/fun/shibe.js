const request = require('node-superfetch')
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    let data = await request.get(`http://shibe.online/api/shibes?count=${Math.floor(Math.random() * 100)}&urls=true`)
 
    let embed = new RichEmbed()
    .setImage(data.body[Math.floor(Math.random() * data.body.length)])
    .setColor("RANDOM")

    msg.channel.send(embed)
}
   
   
   module.exports.help = {
       name:"shibe",
       usage:"*shibe",
       desc:"Returns a picture of a random Shibe.",
       example:"*shibe",
       group: "fun",
   }