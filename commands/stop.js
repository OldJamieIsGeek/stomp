module.exports = {
  name: 'stop',
  description: 'Stops the bot (OWNER ONLY)',
  async execute(message, args, client) {
    if(message.author.id != process.env.ownerID) return;
    if(!args[0]) return message.reply("Please provid the password!");
    if(args[0] != process.env.password) return message.reply('Invalid Password!');

    await message.delete();
    await message.channel.send(`Shutting down: ${client.user.username}`);
    console.log("Shutdown request recieved");
    process.exit();
  }
}