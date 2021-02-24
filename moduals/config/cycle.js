let interval;
let i = 0;
module.exports.run = async (client, msg, args, config) => {

    if(config.cycle === "not set") return msg.reply('You have to set a cycle message in the config file first!')
    if(!interval) {
        msg.channel.send('starting cycle.')
        interval = setInterval(async function() { cycle(config, client, ["STREAMING", "PLAYING", "LISTENING"]) }, 7000)
        return;
    }

    clearInterval(interval)
    interval = null;
    msg.channel.send('Turned off cycle.')
    

}

async function cycle(config, client, arguments) {

    if(i >= 3) i = 0;
    await client.user.setActivity(config.cycle, { type: arguments[i] })
    i++
}

module.exports.help = {
    name:"cycle",
    usage:"*cycle",
    group: "config",
    example:"*cycle",
    ownerOnly: true,
    desc:"Cycles your status between Streaming, Watching and Listening. Custom message can be set in the config file.",
} 