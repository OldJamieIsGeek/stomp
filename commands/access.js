const { Permissions, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'access',
  description: 'Allows mods to easily allow and remove access to different channels',
  async execute(message, args, client, color) {

    if(message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {

      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

      if(args[0] == "add") {

        message.channel.permissionOverwrites.create(user, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        });

        const done = new MessageEmbed()
        .setTitle("Access Granted")
        .setDescription(`Granted the user ${user} access to talk in ${message.channel}`)
        .setColor(color)

        message.channel.send({
          embeds: [done]
        })
      } else if(args[0] == "remove") {
        message.channel.permissionOverwrites.create(user, { SEND_MESSAGES: false });

        const done = new MessageEmbed()
        .setTitle("Access Denied")
        .setDescription(`Denied the user ${user} access to talk in ${message.channel}`)
        .setColor(color)

        message.channel.send({
          embeds: [done]
        })
        
      } else {
        return;
      }
    }
  }
}