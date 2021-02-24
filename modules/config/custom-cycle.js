let interval;
let i = 0;
module.exports.run = async (client, msg, args, config) => {

    if(!interval) {
        if(!args[3]) return msg.reply('You need to have 4 words to cycle.')
        msg.channel.send('starting custom-cycle.')
        interval = setInterval(async function() { cycle(client, args) }, 7000)
        return;
    }

    clearInterval(interval)
    interval = null;
    msg.channel.send('Turned off custom-cycle.')
    

}

async function cycle(client, arguments) {

    if(i >= 3) i = 0;
    await client.user.setActivity(arguments[i])
    i++
}

module.exports.help = {
    name:"custom-cycle",
    usage:"*custom-cycle <text1> <text2> <text3> <text4>",
    group: "config",
    example:"*custom-cycle hello no fuck okay",
    ownerOnly: true,
    desc:"Cycles custom activity.",
} 