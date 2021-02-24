
module.exports.run = (client, msg, args, config) => {
 
    let time = 2000;
    if (!msg.guild.me.hasPermission(["ADMINISTRATOR", "MANAGE_CHANNELS"])) return msg.reply('no permissions')
    if (args[0] === "all") {

        if (isNaN(args[2])) return msg.reply('That was not a valid amount, integer needed.')

        for(let i = 0; i < parseInt(args[2]); i++) {

            client.channels.forEach(c => {

                if(time > 20000) time = 2000;
                time += 2000;

                setTimeout(() => {
                   c.setName(args[1])
                }, time)


            })

        }

    }


}

exports.help = {
    name:"vc-spam",
    group: "fun",
    usage:"vc-spam all name <amountoftimes>",
    example:"vc-spam all name 10",
}