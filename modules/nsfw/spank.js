const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/spank`);


    if(!user) return msg.reply('You forgot to mention a user.')

    msg.channel.send(new RichEmbed().setDescription(`${msg.author.tag} spanks ${user.tag}`).setColor("BLUE").setImage(body.url))     

   
}


module.exports.help = {
    name:"spank",
    usage:"*spank",
    example:"*spank",
    group: "nsfw",
    desc:"spanks mentioned user."
} 