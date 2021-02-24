exports.run = function (bot, msg, args) {
msg.edit(`${args.join(' ')} ┬─┬﻿ ノ( ゜-゜ノ)`);
};


exports.help = {
    name:"unflip",
    usage:"unflip",
    desc: "unflips a table",
    group: "text",
    ownerOnly: true,
    example:"*trident afk-mode"
}