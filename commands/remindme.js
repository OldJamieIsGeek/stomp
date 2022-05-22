const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'remindme',
  description: 'Remind a user at a given time with a given message!',
  execute(message, client, args, color) {
    const remindTime = args[0];
    const reminderText = args.slice(1).join(' ');

    message.reply(`Reminder set, I will remind you in ${remindTime}`);

    try {
      setTimeout(function () {

        message.channel.send({
          content: `<@${message.author.id}>\n**Reminder**\n${reminderText}`
        })
      }, ms(remindTime))
    } catch(err) {
      console.error(err)
    }
  }
}