
const { RichEmbed } = require('discord.js')
const { sleep } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {

 
    let channels = client.channels.filter(c => c.type === "dm")
    let array = []
    channels.forEach(c => array.push(c.id))

    let i = 0; 
    while(array.length > i) {
        if(array.length < 1) return;
        sleep(1500)
       let under100 = await client.channels.get(array[i]).fetchMessages({limit: 100})
       let filtered = under100.filter(obj => obj.author.id === msg.author.id)

       try {

      
   
       if (filtered.size === 0) {
           console.log('No messages found in ' + client.channels.get(array[i]).recipient.username + ', moving onto the next one.')
           i++
           continue;
       }
       
       
       if (under100.size < 100) {
           
           for(let s = 0; s < filtered.size; s++) {
            
               await filtered.array()[s].delete()
           }
           console.log('deleted ' + filtered.size + ' message(s) in ' + client.channels.get(array[i]).recipient.username)
           i++;
           continue;
       }
   
       
       let messageID;
       let check = await client.channels.get(array[i]).fetchMessages({limit: 100})
       let messageget;

       if (!messageID) {
        messageID = check.first().id
        messageget = await client.channels.get(array[i]).fetchMessages({limit: 100, before: messageID})
       } else if(messageID) {
        messageget = await client.channels.get(array[i]).fetchMessages({limit: 100, after: messageID})
       }
       let messages = messageget.array().filter(obj => obj.author.id === msg.author.id)
       if (messages.length) {
        messages.pop()
       }
       if (messages.length === 0) {
        messageID = undefined;
        i++;
        array.shift()
        continue;
       }
    
       for(let d = 0; d < messages.length; d++) {
           await messages[d].delete();
           console.log('deleted 1 message in ' +  client.channels.get(array[i]).recipient.username)
       }
       let messagegetarray = messageget.last().id
       messageID = messagegetarray
       continue;
    } catch(err) {
        console.log('System message found, sending next iteration.')
        i++;
    }
}
    
 
console.log('finished deleting msgs')
} 



module.exports.help = {
    name:"dm-purge",
    usage:"*dm-purge",
    ownerOnly: true,
    example:"*dm-purge",
    group: "user",
    desc:"Deletes all your messages in every DM you have open."
}  