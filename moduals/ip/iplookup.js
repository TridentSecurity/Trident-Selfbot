
const { RichEmbed } = require('discord.js')
const iplookup = require('ipapi.co')
module.exports.run = async (client, msg, args, config) => {

	msg.delete()
    if(!args[0]) return msg.channel.send('you forgot an IP!')

 
    iplookup.location(function(data) { 
        if(data.error || data.reserved) return msg.reply('Could not find info about that ip address.')
       
      let embed = new RichEmbed()
	  .setTitle("`Trident Lookup`")
	  .setThumbnail("https://cdn.discordapp.com/icons/769962659667247184/bebed5912f0223544be3a9b446adee68.jpg")
	  .addField(`IP`, data.ip, true)
      .addField(`City`, data.city,true)
	  .addField(`Currency`, data.currency,true)
	  .addField(`Currency Name`, data.currency_name,true)
	  .addField(`Version`, data.version,true)
      .addField(`Region`, data.region,true)
      .addField(`Region Code`, data.region_code,true)
      .addField(`Country`, data.country_name,true)
	  .addField(`Calling Code`, data.country_calling_code, true)
      .addField(`Capital`, data.country_capital,true)
      .addField(`Europe`, data.in_eu === true ? "yes" : "no",true)
      .addField(`Postal Code`, data.postal,true)
      .addField(`Latitude`, data.latitude,true)
      .addField(`Longitude`, data.longitude,true)
	  .addField(`Languages`, data.languages,true)
      .addField(`Org`, data.org,true)
	  .addField(`Timezone`, data.timezone,true)
	  .addField(`ASN`, data.asn,true)
      
	  
      msg.channel.send(embed)
    }, args[0])


    
  
}


module.exports.help = {
    name:"iplookup",
    usage:"*iplookup <ip>",
    group: "ip",
    desc: "*iplookup <ip>",
    example:"*iplookup 127.0.0.1",
}