const ms = require('ms');

module.exports = {
  name: 'fix',
  description: 'fix',
  async execute(message, client) {
    message.channel.messages.fetch({limit: 1}).then(messages => {
      message.channel.bulkDelete(messages)
    })
  }
}