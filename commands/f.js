const ms = require('ms')

module.exports = {
  name: 'f',
  description: 'f',
  async execute(message, args){
    const fMember = args.join(' ')
    if(!fMember) return message.reply("Please give a member to pay respects to!")

    const respect = await message.channel.send(`Press :regional_indicator_f: to pay respects to ${fMember}`)
    await respect.react('🇫');

    setTimeout(function () {
      const filter = (reaction, user) => reaction.emoji.name === '🇫';
      const collector = respect.createReactionCollector({ filter, time: 15000 });
      collector.on('collect', (reaction, user) => message.channel.send(`**${user.username}** has paid their respects`))
      collector.on('end', collected => message.channel.send(`**${respect.reactions.cache.get('🇫').count - 1}** people paid their respect`))  
    }, ms('0.1s'))
  }
}