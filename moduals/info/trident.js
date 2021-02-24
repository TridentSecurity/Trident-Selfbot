const fs = require('fs')
const { RichEmbed } = require('discord.js')
module.exports.run = (client, msg, args, config) => {
	
	
	let array = [
	"admin",
	"config",
	"fun",
	"games",
	"info",
	"ip",
	"nsfw",
	"rude",
	"search",
    "status",
	"text",
	"user"]

    let query = args[0]

    if(!client.commands.get(query) && !array.includes(query)) {
        let groupEmbed = new RichEmbed()

        for(let i = 0; i < array.length; i++) {
           
		   groupEmbed.addField(array[i], `${array[i]}`, false)
		}
		
        groupEmbed.setTitle("`Trident`")
		groupEmbed.setColor("RANDOM") 
		.setFooter("Made By Trident Security#7970                                                                                                                           Type The Command Prefix+trident                                                                                                        https://discord.gg/BTU23YZ6J3")
		.setThumbnail("https://cdn.discordapp.com/avatars/773456921700859946/d262f1555944bcee30c03cb65144b5e3.png?size=4096")
		.setURL("https://discord.gg/BTU23YZ6J3")
		.setDescription(`Welcome ${client.user.tag}!`)
		msg.channel.send(groupEmbed)
        return;
    }
    

    query = query.toLowerCase()
    if (client.commands.get(query)) {
       
        let i = client.commands.get(query)
        let commandEmbed = new RichEmbed()
		.setTitle("`Trident`")
        .setDescription(`Name: **${i.help.name}**\nDesc: ${i.help.desc}\nExample: ${i.help.example}\nownerOnly: ${i.help.ownerOnly ? "true" : "false"}`)
		.setColor("RANDOM")
		.setThumbnail(message.author.avatarURL)
        msg.channel.send(commandEmbed)
    } else if(array.includes(query)) {

        const commands = client.commands.filter(obj => obj.help.group === query)
        
        let commandsEmbed = new RichEmbed()
        .setDescription(commands.map(i => '`' + i.help.name + '`').join(" "))
        .setColor("RANDOM")
		.setTitle("`Trident`")
		.setThumbnail("https://cdn.discordapp.com/icons/769962659667247184/bebed5912f0223544be3a9b446adee68.jpg")
        msg.channel.send(commandsEmbed)
    

    }


}

exports.help = {
    name:"trident",
    usage:"trident <group> | trident <command>",
    desc: "Shows a list of commands.",
    group: "info",
    ownerOnly: false,
    example:"*trident afk-mode"
}