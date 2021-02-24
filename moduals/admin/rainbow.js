
let interval;
const colors = require('random-hex-color')
module.exports.run = async (client, msg, args, config) => {

    
    if (!msg.guild.me.hasPermission("MANAGE_ROLES")) return msg.reply('You need the manage_roles permission to use this.')

    if(interval) {
        clearInterval(interval)
        interval = null;
        msg.channel.send('Turned off rainbow role.')
        return;
    }
    let role = msg.guild.roles.get(args[0]) || msg.mentions.roles.first()

    if(!role) return msg.reply('I could not find that role.')

    if(isNaN(args[1])) return msg.reply('That was not a valid, please enter one of the modes: `1` or `2`.')
    

    if(!interval) {

        if(args[1] === "1") {
            interval = setInterval(function() { change(role)}, 1500)
            msg.reply('Starting fast mode rainbow role.')
            return;
        } else if(args[1] === "2") {
            interval = setInterval(function() { change(role)}, 5000)
            msg.reply('Starting slow mode rainbow role.')
            return;
        }

    }

 

}

function change(role) {
    const randomColor = colors();

    role.setColor(randomColor)
}


module.exports.help = {
    name:"rainbow",
    usage:"*purge <roleid> <1 or 2>",
    desc: "Quickly changes the color of a role. Mode 1 is fast, mode 2 is slow.",
    example:"*rainbow  1",
    group: "admin",
    ownerOnly: true,
}