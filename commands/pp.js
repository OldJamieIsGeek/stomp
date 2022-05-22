module.exports = {
  name: 'pp',
  description: 'Find your PP size',
  execute(message, client, args){
    var ppsize = [
      "8=D",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8=======D",
      "8========D",
      "8=========D",
      "8==========D",
      "8===========D",
      "8============D",
      "8=============D",
      "8==============D",
      "8===============D",
    ];
    try {
      const ppUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      const ppSize = ppsize[Math.floor(Math.random() * ppsize.length)]

      if(!ppUser) {
        message.channel.send(`${message.author.username}'s pp: ${ppSize}`)
      } else {
        message.channel.send(`${ppUser.username}'s pp: ${ppSize}'`)      
      }
    } catch(err){
      console.log(err)
      message.channel.send("<@338063500616138752> an error has occoured, please check the logs!")
      message.channel.send("An error has occoured, please wait for Jamie to look into it!")
    }
  }
}