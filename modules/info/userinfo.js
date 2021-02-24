const Discord = require('discord.js')

exports.run = function (bot, msg, args) {

  msg.delete();
  if(msg.mentions.users.size === 0) {
      return msg.channel.send('`Mention a user!`');
    }
    let info = msg.mentions.users.first();
    if(!info) {
      return msg.channel.send('`Invalid user!`');
    }
    msg.channel.send(`!!embed **\`\`\`js
userInfo of: ${info.username}#${info.discriminator}
${require("util").inspect(info, { depth: 1 })}\`\`\`**`);
};

exports.help = {
    name:"userinfo",
    usage:"userinfo <@user>",
    desc: "shows detailed user info",
    group: "info",
    ownerOnly: false,
    example:"*trident afk-mode"
}