const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
  name: "ping",
  description: "This is a ping command",
  async execute(message, args, client, color) {
    var ping = Date.now() - message.createdTimestamp + " ms";
    var wsPing = client.ws.ping + " ms";

    const gatheringPing = new MessageEmbed()
    .setTitle(`Gathering ping...`)
    .setColor(color)

    const messageSent = await message.channel.send( { embeds: [gatheringPing]})

    const pingGathered = new MessageEmbed()
    .setTitle(`Pong!`)
    .addField('Reponse Ping: ', `${ping}`, true)
    .addField('Websocket Ping: ', `${wsPing}`, true)
    .setColor(color)

    setTimeout(function () {
      messageSent.edit({ embeds: [pingGathered]})
    }, ms('3s'))
  }
}