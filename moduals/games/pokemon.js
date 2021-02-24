const pokemon = require('pokemon-images')
const { RichEmbed } = require('discord.js')
module.exports.run = (client, msg, args, config) => {

    let image;
    let embed = new RichEmbed()
    .setColor("RANDOM")
    
    if(args[0]) {
        image = pokemon.getSprite(args[0])
        if(!image) return msg.reply('Could not find that pokemon!')
        embed.setImage(image)
        msg.channel.send(embed)
        return;
    }

    image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(Math.random() * 807) + 1}.png`
    embed.setImage(image)
    msg.channel.send(embed)
}


module.exports.help = {
    name:"pokemon",
    usage:"*pokemon <name>",
    example:"*pokemon squirtle",
    group: "games",
    desc: "Sends image of a random pokemon unless pokemon name is specified."
}