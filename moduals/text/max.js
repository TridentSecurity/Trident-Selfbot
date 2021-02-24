  


exports.run = function (bot, msg, args) {
    if (args.length < 1) {
        msg.edit(':no_entry_sign: You must provide some text to be evil with.').then(m => m.delete(2000));
        return;
    }

    var output = unescapeEscapedEscapes(args.join(' '));
    output = output.repeat(2000 / output.length);
    msg.edit(output);
};

function unescapeEscapedEscapes(input) {
    return input.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\v/g, '\v');
}

exports.help = {
    name:"max",
    usage:"max <word>",
    desc: "list a certain word 2000 times",
    group: "text",
    ownerOnly: true,
    example:"*trident afk-mode"
}