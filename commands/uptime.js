const ms = require('ms')

module.exports = {
    name: 'uptime',
    description: "This shows how long the bot has been online for!",
    execute(message, args, client){
        message.channel.send(`Client Uptime: ${ms(client.uptime)}`);
    }
}