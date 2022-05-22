const { Permissions, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'say',
  description: 'Say something with stomp',
  async execute(message, args, client, color) {

    const blocked = ['774199849259761665','936013269901144074'];
    if(blocked.includes(message.author.id)) return message.delete();
    const user = message.author;
    const stompMessage = args.join(' ');

    try {
      await message.delete();
      await message.channel.send(stompMessage);
    } catch(err) {
      if(err) console.error(err);
    }
  }
}