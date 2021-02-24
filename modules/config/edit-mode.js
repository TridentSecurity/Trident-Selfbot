const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {

    if(!client.editmode.get(client.user.id)) {
        client.editmode.set(client.user.id, true)
        msg.channel.send('Enabled editMode.')
        return;
    }

    client.editmode.set(client.user.id, false)
    msg.channel.send('Disabled editMode.')
    
}


module.exports.help = {
    name:"edit-mode",
    usage:"*edit-mode",
    group: "config",
    example:"*edit-mode",
    ownerOnly: true,
    desc:"Adds the edited mark to every message you type.",
} 