let interval;
const { randomString } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {

    if(!interval) {
        msg.channel.send('Now starting to farm xp.')
        interval = setInterval(function() { send(msg) }, 5000)
        return;
    }

    clearInterval(interval)
    interval = null
    msg.channel.send('Stopped farming xp.')
    
}

function send(msg) {
    msg.channel.send(randomString(Math.floor(Math.random() * 20) + 3))
}

 
module.exports.help = {
    name:"mee6",
    usage:"*mee6",
    example:"*mee6",
    guildOnly: true,
    ownerOnly: true,
    group: "user",
    desc: "Farms MEE6 Bot for XP.."
} 
