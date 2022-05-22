const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports = {
  name: 'listroles',
  description: '',
  async execute(message, client, color) {
    let rolemap = message.guild.roles.cache
      .sort((a, b) => b.position - a.position)
      .map(r => r)
      .join(", ");
      if (!rolemap) rolemap = "No roles";

    const embed = new MessageEmbed()
    .setTitle("Role List")
    .setDescription(`${rolemap}`)
    .setColor(color)
    const testmessage = message.channel.send({
      embeds: [embed]
    })

    setTimeout(function () {
      testmessage.delete();
    }, ms('5s'))
  }
}