exports.run = function (bot, msg, args) {
  msg.edit(`${args.join(' ')} ༼つಠ益ಠ༽つ ─=≡ΣO))`);
};

exports.help = {
    name:"throw",
    usage:"throw",
    desc: "throw out text",
    group: "text",
    ownerOnly: true,
    example:"*trident afk-mode"
}