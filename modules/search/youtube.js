
const yt = require('yt-search')
const { RichEmbed } = require('discord.js')
const { util } = require('discord.js-commando')
module.exports.run = (client, msg, args, config) => {


    if (!args[0]) return msg.reply('I need something to search for!')
    yt(args.join(" "), (err, data) => {

        if (data.videos.length === 0) return msg.reply('Could not find any queries.')
        if(err) throw err;
        const paginated = util.paginate(data.videos, 1, 15)

        let embed = new RichEmbed()
        .setDescription(paginated.items.map(v => `**[${v.title}](${v.url})** ${v.timestamp}`))
        .setColor("RANDOM")
        msg.channel.send(embed)
    })
    
  
}


module.exports.help = {
    name:"youtube",
    usage:"*youtube <search>",
    desc: "Looks up a youtube query and returns 5 videos.",
    example:"*youtube selfbots",
    group: "search",
}