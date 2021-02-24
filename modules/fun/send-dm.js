module.exports.run = async (client, msg, args, config) => {

   let str = args.join(" ")
   if(str.length > 2000) return msg.reply('Your message can not exceed 2000 characters.')

   if(!str) return msg.reply('I need a message to send!')

   let user = msg.mentions.users.first()

   if(!user) return msg.reply('You forgot to mention a user.')

   
   
   user.send(str.slice(args[0].length).trimLeft())
      
  
  }
  
  
  module.exports.help = {
      name:"send-dm",
      usage:"*send-dm @user <text>",
      desc:"Sends a DM to mentioned user.",
      example:"*send-dm @cex you are gay",
      ownerOnly: true,
      group: "fun",
  }