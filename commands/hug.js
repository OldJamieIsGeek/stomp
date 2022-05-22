module.exports = {
  name: 'hug',
  description: 'hug',
  async execute(message, args) {
    try {
      if(args[0]) {
        let huggedUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        await message.delete();
        await message.channel.send(`${huggedUser}, you have been hugged!\nhttps://tenor.com/view/hugs-sending-virtual-hugs-loading-gif-8158818`);
      } else {
        await message.delete();
        await message.channel.send("https://tenor.com/view/hugs-sending-virtual-hugs-loading-gif-8158818");
      }
    } catch(err) {
      if(err) throw err;
    }
  }
}