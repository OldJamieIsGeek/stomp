const fs = require('fs');

module.exports = {
  name: 'suggest',
  description: 'Request a feature to be added to stomp!',
  async execute(message, args, client) {

    const submissionUser = "\n" + message.author.username + ` (${message.author.id})`;
    const submission = args.join(' ') + "\n";

    const toFile = `${submissionUser}\n` + submission;

    fs.appendFile('./suggestions.txt', toFile, err => {
      fs.close('./suggestions.txt', (err) => {
        if(err) {
          console.error(err) 
        }
      });
      if(err) {
        throw err;
      }
    })

    message.reply("Thank you for the suggestion!\n\nThanks for contributing to the development of Stomp! :)")
  }
}