module.exports = {
  name: 'j2',
  description: 'jackie best',
  execute(message) {
    if(message.author.id !== '602702602668343297') return message.channel.send("Fuck you!")

    message.channel.send(`You are the best, Jackie! <a:catlickfast:865679417383845888>`)
  }
}