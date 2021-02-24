const { mock } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {

    let content;
    let message = await msg.channel.fetchMessages({limit: 2})
    if(!args[0]) {
    content = message.filter(m => m.author.id !== msg.author.id).first().content
} else if(args[0]) { content = args.join(" ")}


    msg.channel.send(mock(content))
}


module.exports.help = {
    name:"mock",
    usage:"*mock <text>",
    example:"*mock hello",
    group: "games",
    desc: "Returns spongemock meme text."
}