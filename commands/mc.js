module.exports = {
  name: 'mc',
  description: 'Display the member count of a server!',
  async execute(message, args, client){
    
    try {
      message.channel.send(`${message.guild.memberCount} members!`);
    } catch(err) {
      throw err;
    }
  }
}