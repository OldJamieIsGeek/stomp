const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'help',
  description: 'Brings up a help menu',
  async execute(message, client) {
    if(message.author.id == process.env.ownerID) {
      const menu = new MessageEmbed()
      .setTitle(`<:stomplove:955654541653708860> | Stomp Help Menu`)
      .setDescription("`Prefix: .`\n\n**.help**\nBrings up this menu!\n\n**.avatar**\nGet the avatar of someone!\n\n**.cat**\nCat.\n\n**.f**\nGet people to pay their respects!\n\n**.goose**\nShow goose!\n\n**.hug**\nGet a well needed hug from stomp!\n\n**.j2**\nYou da best Jackie!\n\n**.mc**\nShow the current member count!\n\n**.oliver**\nShow oliver!\n\n**.ping**\nPing stomp.\n\n**.pp**\nGet a very accurate representation\n\n**.remindme**\nSet a reminder\n\n**.uptime**\nCheck how long stomp has been online!\n\n**.stop**\nShutdown stomp\n\n**.eval**\nRun code directly from stomp\n\n**.suggest**\nSuggest a feature to be added to stomp!")
      .setColor('#1DB0A0')

      message.channel.send({
        embeds: [menu]
      })
      return;
    }

    const menu = new MessageEmbed()
    .setTitle(`<:stomplove:955654541653708860> | Stomp Help Menu`)
    .setDescription("`Prefix: .`\n\n**.help**\nBrings up this menu!\n\n**.avatar**\nGet the avatar of someone!\n\n**.cat**\nCat.\n\n**.f**\nGet people to pay their respects!\n\n**.goose**\nShow goose!\n\n**.hug**\nGet a well needed hug from stomp!\n\n**.j2**\nYou da best Jackie!\n\n**.mc**\nShow the current member count!\n\n**.oliver**\nShow oliver!\n\n**.ping**\nPing stomp.\n\n**.pp**\nGet a very accurate representation\n\n**.remindme**\nSet a reminder\n\n**.uptime**\nCheck how long stomp has been online!\n\n**.suggest**\nSuggest a feature to be added to stomp!")
    .setColor('#1DB0A0')

    message.channel.send({
      embeds: [menu]
    })
  }
}