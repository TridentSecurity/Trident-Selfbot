module.exports.run = (client, msg, args, config) => {

    let num1 = parseInt(args[0])
    let num2 = parseInt(args[1])

  
    if (isNaN(args[0]) || isNaN(args[1])) return msg.reply('I need two numbers!')

    let random = Math.floor(Math.random() * num2) + num1;
    msg.channel.send('I choose ' + random)
 
}


module.exports.help = {
    name:"rand-num",
    usage:"*rand-num <number1> <number2>",
    desc: "Selects a random number from two pairs.",
    example:"*rand-num",
    group: "moderation",
}