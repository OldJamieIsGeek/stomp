const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "goosepic",
  description: "GOOSE",
  async execute(message, args, client) {
    if(message.channel.id != '944312204541444176' && message.channel.id != '847213225384083517') return;
    const goose = ['https://media.discordapp.net/attachments/830479912895774780/884543724661661696/image1.jpg?width=324&height=432','https://media.discordapp.net/attachments/830479912895774780/884543725005586523/image2.jpg?width=324&height=432','https://media.discordapp.net/attachments/830479912895774780/884543726028996639/image5.jpg?width=575&height=432','https://media.discordapp.net/attachments/830479912895774780/884543726461026324/image6.jpg?width=324&height=432','https://media.discordapp.net/attachments/830479912895774780/884543728151326750/image9.jpg?width=575&height=432','https://media.discordapp.net/attachments/830479912895774780/884545841757581362/image2.png?width=369&height=432','https://media.discordapp.net/attachments/830479912895774780/884545842030190602/image3.png?width=333&height=432','https://media.discordapp.net/attachments/830479912895774780/884545842462228550/image4.png?width=294&height=431','https://media.discordapp.net/attachments/830479912895774780/884545843074592838/image6.jpg?width=324&height=432']

    const goosesend = goose[Math.floor(Math.random() * goose.length)];

    const gooseEmbed = new MessageEmbed()
    .setImage(`${goosesend}`)

    try {
      await message.channel.send({ embeds: [gooseEmbed]});
    } catch(err){
      console.log(err)
      message.channel.send("```" + err + "```")
    }
  }
}