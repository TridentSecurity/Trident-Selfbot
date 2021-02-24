const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);


    if(!user) return msg.reply('You forgot to mention a user.')

    msg.channel.send(new RichEmbed().setDescription(`${msg.author.tag} sent hentai to ${user.tag}`).setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"hentai",
    usage:"*hentai",
    example:"*hentai",
    group: "nsfw",
    desc:"random hentai images"
} 