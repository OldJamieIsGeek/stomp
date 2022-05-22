const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'oof',
  async execute(message, args, color) {

    var member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) var member = message.member
    const avatar = member.displayAvatarURL()

    const av = new MessageEmbed()
    .setDescription(`Avatar of: ${member}`)
    .setImage(avatar)
    .setColor(color)

    await message.channel.send({ embeds: [av]});
  }
}