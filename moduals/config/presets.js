module.exports.run = (client, msg, args, config) => {

    if(!args[0]) return msg.reply('You forgot to specify the number of your preset message, 1-13.')
    let presets = config.presets[0][args[0]]


    if(!presets) return msg.reply('make sure your number isnt below 1 and above 13!')

    if(presets.length > 2048) return msg.reply('That string was longer than 2048 characters, please short it down a bit.')
    msg.channel.send(presets)



}

exports.help = {
    name:"presets",
    usage:"*presets <1-13>",
    group: "config",
    desc: "Sends your preset message you have set it to in the config.json file.",
    ownerOnly: true,
    example:"*presets 13"
}