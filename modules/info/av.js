const Discord = require("discord.js");
const fs = require("fs");



module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!(args.length > 0))
    {
        return message.channel.send({embed:{title:`Avatar for ${bot.user.username}`,image:{url:bot.user.avatarURL}}});
    }
    if(message.channel.type === "text") {
        const member = message.mentions.members.array()[0]
        if(!member) return message.channel.send("Couldn't find that user")
        const nickname = (member.nickname) ? member.nickname : member.user.username;
        return message.channel.send({embed:{title:`Avatar for ${nickname}`,color:member.displayColor,image:{url:member.user.avatarURL}}});
    }else{
        const user = message.mentions.users.array()[0];
        if(!user) return message.channel.send("Could not find any user");
        return message.channel.send({embed:{title:`Avatar for ${user.username}#`,image:{url:user.avatarURL}}});
    }

}

exports.help = {
    name:"av",
    usage:"av <user>",
    desc: "shows user avatar",
    group: "info",
    ownerOnly: false,
    example:"*trident afk-mode"
}