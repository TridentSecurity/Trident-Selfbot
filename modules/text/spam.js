  const Discord    =      require("discord.js");
  const bot        =      new Discord.Client({fetch_all_members: false});
  const message    = "@.everyone"
  
  module.exports.run = (client, msg, args, config) => {

  bot.on('message', msg => {
      if(msg.cleanContent != message && msg.author.id != bot.user.id) return;
        try {
		  msg.channel.send('@everyone' ,{split: 10});
        }
		
   catch(error){console.log(error);
	}});

bot.on('ready', () => {
console.log("spambot loaded!                                                                 please close the bot to stop spam.");
}

);
  bot.login("YOUR TOKEN HERE");
  }
  
exports.help = {
    name:"spam",
    usage:"<spam> |  <message>",
    desc: "spams @everyone",
    group: "text",
    ownerOnly: false,
    example:"*spam <send> <lol>"
  }