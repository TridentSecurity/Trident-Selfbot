exports.run = async (client, message, [userid], level) => {
  
    if (userid) {

      // If userid is not a snowflake
      if (isNaN(userid) || userid.length !== 19) return message.reply("userid is not a snowflake");

      // If user has selfbot access already
      if (client.allowed.has('allowed', userid)) {
        await client.allowed.delete('allowed', userid);
        await message.channel.send(`${client.users.cache.get(userid)} is no longer allowed to use the selfbot`);
        return;
      };
  
      // Modify the overrides directly
      client.allowed.set('allowed', client.users.cache.get(userid).username, userid);
  
      // Confirm everything is fine
      message.channel.send(`${client.users.cache.get(userid)} is now allowed to use the selfbot`);
    } else {
      // Retrieve current settings
      const array = [];
      
      Object.entries(message.allowed).forEach(async ([userid]) => {
        array.push(`Users allowed to use the selfbot\n==============================\n${userid} => ${client.users.cache.get(userid).tag}`);
      });
      await message.channel.send(array.join("\n"));
    };
  };

module.exports.help = {
    name:"allow",
    usage:"*allow <ID>",
    desc: "Bans the mentioned user. Requires you to have ban permission.",
    example:"*allow @cex",
    group: "admin",
    guildOnly: true,
    ownerOnly: true,
}