exports.run = function(bot, msg, args) {
  msg.delete();
  msg.channel.send("Time?")
    .then(message => {
      message.edit(`\`\`\`\`its **${new Date().toLocaleString()}**`);
    });
};

exports.help = {
    name:"time",
    usage:"time ",
    desc: "shows current time",
    group: "info",
    ownerOnly: false,
    example:"*trident afk-mode"
}