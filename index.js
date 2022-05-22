const Discord = require("discord.js");
const { Client, Intents, Permissions } = require('discord.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS)
const client = new Discord.Client({ intents: myIntents });

const { MessageEmbed } = require("discord.js")

const prefix = process.env.prefix

var http = require('http');

const fs = require('fs');
const ms = require('ms');
const color = 0x027e84

http.createServer(function(req, res) {
  res.write("I'm better than you :D");
  res.end();
}).listen(8000);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

commandTotal = 0
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command)

  commandTotal = commandTotal + 1
  
  console.log(`Resistered command: ${command.name}`)
}

client.once('ready', () => {
  console.log("")
  console.log(`Registered ${commandTotal} commands`)
  console.log("")
  console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+")
  console.log(`${client.user.tag} is ONLINE!`)
  console.log("Owner: JamieIsGeek#5647")
  console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+")

  client.user.setActivity(`stomp`, { type: 'LISTENING'})
  console.log("")
  console.log("Activity Set")

  var date = new Date();
  var date = new Date(date.setHours(date.getHours() + 1));

  var postDate = date.toString().replace(" GMT+0000 (Coordinated Universal Time)","");
  console.log("Stomp is ready as of " + postDate);  
})

client.on('disconnect', function(event) {
  console.log('The bot has disconnected')
})


client.on('messageCreate', message => {

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix) || message.author.bot) return;
  

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'ping'){
    client.commands.get('ping').execute(message, args, client, color);
  } else if (command == 'restart'){
      if(message.author.id != '338063500616138752') return message.reply("No")

      message.channel.send("Restarting...")
      console.log(`Restart requested by: ${message.author.tag}`)
      client.destroy()
      client.login(process.env.token)

      message.channel.send("Successfully Restarted!")
  } else if (command == 'eval'){
    client.commands.get('eval').execute(message, args, client, color)
  } else if (command == 'avatar'){
    client.commands.get('avatar').execute(message, args, color)
  } else if (command == 'remindme'){
    client.commands.get('remindme').execute(message, client, args, color)
  } else if (command == 'j2'){
    client.commands.get('j2').execute(message)
  } else if (command == 'f'){
    client.commands.get('f').execute(message, args)
  } else if (command == 'cat'){
    client.commands.get('cat').execute(message, args)
  } else if (command == 'hug'){
    client.commands.get('hug').execute(message, args)
  } else if (command == 'goose'){
    client.commands.get('goosepic').execute(message, args, client)
  } else if (command == 'oliver'){
    client.commands.get('oliverpic').execute(message, args, client)
  } else if (command == 'mc'){
    client.commands.get('mc').execute(message, args, client)
  } else if (command == 'pp'){
    client.commands.get('pp').execute(message, client, args)
  } else if (command == 'uptime'){
    client.commands.get('uptime').execute(message, args, client)
  } else if (command == 'stop'){
    client.commands.get('stop').execute(message, args, client)
  } else if (command == 'help'){
    client.commands.get('help').execute(message, client)
  } else if (command == 'say'){
    client.commands.get('say').execute(message, args, client, color)
  } else if (command == 'sr') {
    client.commands.get('sr').execute(message, args, client, color)
  } else if (command == 'suggest') {
    client.commands.get('suggest').execute(message, args, client)
  } else if (command == 'access') {
    client.commands.get('access').execute(message, args, client, color)
  }
});

client.login(process.env.token);