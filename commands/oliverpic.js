const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "oliverpic",
  description: "OLIBER",
  async execute(message, args, client) {
    if(message.channel.id != '944312204541444176' && message.channel.id != '847213225384083517') return;
    const oliber = ['https://media.discordapp.net/attachments/830479912895774780/884543726947536916/image7.jpg?width=324&height=432', 'https://media.discordapp.net/attachments/830479912895774780/884543725773135944/image4.jpg?width=324&height=432', 'https://media.discordapp.net/attachments/830479912895774780/884543725416616006/image3.jpg?width=324&height=432','https://media.discordapp.net/attachments/830479912895774780/884543724317724682/image0.jpg?width=324&height=432','https://media.discordapp.net/attachments/830479912895774780/884543726461026324/image6.jpg?width=324&height=432','https://media.discordapp.net/attachments/830479912895774780/884545841233297428/image0.png?width=298&height=432','https://media.discordapp.net/attachments/830479912895774780/884545841501700157/image1.png?width=452&height=432','https://media.discordapp.net/attachments/830479912895774780/884545842780962816/image5.png?width=380&height=431','https://media.discordapp.net/attachments/830479912895774780/884546280871850004/image0.png?width=427&height=432','https://media.discordapp.net/attachments/830479912895774780/884546281224155210/image1.png?width=417&height=432']

    const oliversend = oliber[Math.floor(Math.random() * oliber.length)];

    const oliberEmbed = new MessageEmbed()
    .setImage(`${oliversend}`)

    try {
      await message.channel.send({ embeds: [oliberEmbed]});
    } catch(err){
      console.log(err)
      message.channel.send("```" + err + "```")
    }
  }
}