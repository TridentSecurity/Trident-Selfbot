  
exports.run = function (bot, msg, args) {
msg.edit(`${args.join(' ')} (╯°□°）╯︵ ┻━┻`);
};

exports.help = {
    name:"flip",
    usage:"flip",
    desc: "flips a table",
    group: "text",
    ownerOnly: true,
    example:"*trident afk-mode"
}