const { MessageEmbed, Permissions } = require("discord.js")
module.exports = {
  name: "clear",
  description: "This is a ping command",
  execute(message, args) {
    if(message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
      if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear")

      if(isNaN(args[0])) return message.reply("Please enter a number")

      if(args[0] > 100) return message.reply("You must specify a number lower than `100`")
      if(args[0] < 1) return message.reply("You must specify a number above `1`")

      message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages)
        message.reply(`Successfully deleted ${args[0]} messages!`)
      })
    } else {
      message.channel.send("Error: You do not have permissions to run this command!")
    }
  }
}