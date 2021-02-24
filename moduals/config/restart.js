const fs = require('fs')

exports.run = function(client, msg, args, settings) {

	settings["reboot"] = { "channel" : msg.channel.id, "msg" : msg.id, start: Date.now() };
	fs.writeFileSync("./settings.json", JSON.stringify(settings, "", "\t"));
	msg.edit({ embed: { color: 0x26a856, author: { icon_url: "http://i.imgur.com/JurPZyh.gif", name: "Rebooting..." }}}).then(() => process.exit());

}


module.exports.help = {
    name:"restart",
    usage:"*restart",
    group: "config",
    example:"*restart",
    ownerOnly: true,
    desc:"Restart's the selfbot.",
} 