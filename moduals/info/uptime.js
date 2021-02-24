const countdown = require('countdown')
const { RichEmbed } = require('discord.js')
module.exports.run = (client, msg, args, config) => {

    
   let time = countdown(client.uptime, 0, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS)

   let embed = new RichEmbed()
   .setDescription(`Days: **${time.days}**\nHours: **${time.hours}**\nMinutes: **${time.minutes}**\nSeconds: **${time.seconds}**`)
   .setColor("BLUE")

   msg.channel.send(embed)
}

exports.help = {
    name:"uptime",
    usage:"uptime",
    desc: "Shows how long the selfbot has been online.",
    ownerOnly: false,
    group: "info",
    example:"*uptime"
}