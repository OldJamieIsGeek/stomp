module.exports = {
  name: 'cat',
  description: 'cat',
  execute(message, args) {
    message.delete()
    message.channel.send("<a:catBonk:873316363358318622>")
  }
}