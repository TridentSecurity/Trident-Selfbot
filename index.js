const Discord = require('discord.js')
const fs = require('fs')
const { RichEmbed } = require('discord.js')
const config = require('./util/config.json')
const bot = new Discord.Client();

// ---------------- PERMISSION DISCORD ---------------- \\

const Permission = [
"KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR",
"CREATE_INSTANT_INVITE","MANAGE_CHANNELS",
"MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG",
"VIEW_CHANNEL","READ_MESSAGES","SEND_MESSAGES",
"SEND_TTS_MESSAGES","MANAGE_MESSAGES",
"EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY",
"MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","EXTERNAL_EMOJIS",
"CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS",
"USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES",
"MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"
];

// -------------------- SERVER WEB -------------------- \\

// app.use(express.static('public'));
// app.get('/', function(request, response) {
//  response.sendFile(__dirname + '/public/index.html');
// });
// var listener = app.listen(process.env.PORT, function() {
 //  console.log('Website is ready. !');
// });


require("./util/eventHandler.js")(bot)

for(let i = 0; i < config.tokens.length; i++) {


let bot = new Discord.Client()
bot.commands = new Discord.Collection()

//Command Handler//
fs.readdirSync("./modules").forEach(folders => {
    fs.readdirSync(`./modules/${folders}`).forEach(i => { 
     if (!i.endsWith(".js")) return;
     let commandFile = i.split(".")[0].trim()
     bot.commands.set(commandFile, require(`./modules/${folders}/${commandFile}.js`))
    })
})

const evtFiles = fs.readdirSync("./events/")
evtFiles.forEach(file => {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  bot.on(eventName, event.bind(null, bot));
});
console.log(`╔════════════════════════════════════════════════════════╗`)
console.log('%c║ A Trident Has Appeared, Made By Trident Security#7970  ║', 'color: red; font-weight: bold; background-color: black;')
console.log(`╠════════════════════════════════════════════════════════╣`)
console.log(`║ ████████╗██████╗ ██╗██████╗ ███████╗███╗   ██╗████████╗║`)
console.log(`║ ╚══██╔══╝██╔══██╗██║██╔══██╗██╔════╝████╗  ██║╚══██╔══╝║`)
console.log(`║    ██║   ██████╔╝██║██║  ██║█████╗  ██╔██╗ ██║   ██║   ║`)
console.log(`║    ██║   ██╔══██╗██║██║  ██║██╔══╝  ██║╚██╗██║   ██║   ║`)
console.log(`║    ██║   ██║  ██║██║██████╔╝███████╗██║ ╚████║   ██║   ║`)
console.log(`║    ╚═╝   ╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ║`)
console.log(`╠════════════════════════════════════════════════════════╣`)
console.log('%c║ Lets Fuck Up Discord                                   ║', 'color: red; font-weight: bold;')
console.log(`║ Loaded ${bot.commands.size} commands.                                   ║`)
console.log(`║ Loaded ${evtFiles.length} events.                                       ║`)
console.log(`║ prefix ${config.prefix}                                               ║`)
console.log(`║ use ${config.prefix}trident to show command list                      ║`)
console.log(`╚════════════════════════════════════════════════════════╝`)
console.time()
console.timeLog()
bot.login(config.tokens[i])
}