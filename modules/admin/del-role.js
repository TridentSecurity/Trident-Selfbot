module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_ROLES")) return msg.reply('You need the manage_roles permission to use this.')

    let role = msg.guild.roles.find(r => r.name === args.join(" ")) || msg.mentions.roles.first()
    if(!role) return msg.reply('I could not find that role!')
    
	
  
    if(!role.editable) return msg.reply('I can not delete that role! make sure my role is at the top.')

    await role.delete()
    msg.react("✅")
}


module.exports.help = {
    name:"del-role",
    usage:"*del-role <role>",
    desc: "Deletes the role and reacts to your message with a checkmark if successful.",
    example:"*del-role cexrole",
    group: "ADMIN",
    guildOnly: true,
    ownerOnly: true,
}