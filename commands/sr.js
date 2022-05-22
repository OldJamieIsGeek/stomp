const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
  name: "sr",
  description: "This is a selfrole command",
  async execute(message, args, client, color) {
    
    if(args[0] === 'remove') {
      var role = args[1]
    } else if(args[0] != 'remove') {
      var role = args[0]
    }
    const user = message.author
    
    const list = new MessageEmbed()
    .setTitle("Selfroles")
    .setDescription("**Here is a list of all self roles:** \nshe/her\nhe/him\nthey/them\nshe/they\nit/its\nwe/us\nhe/they\nneo\nask\nany\ntesting\nmcevent\n\nTo add a role to yourself, do `^role <role>`\n\nIf you wish to remove a self role, type `^role remove <role>`.\n\n*Please note: Only Jamie can create/delete self roles*")
    .setColor(color)

    if(!role) return message.channel.send({embeds: [list]})

    /*
    Define all the roles that can be applied
    */
    const she = message.guild.roles.cache.get('858469573329289246')
    const he = message.guild.roles.cache.get('858469573778210846')
    const they = message.guild.roles.cache.get('858469572930830376')
    const st = message.guild.roles.cache.get('858469572930830376')
    const it = message.guild.roles.cache.get('858470998412361769')
    const we = message.guild.roles.cache.get('923737049482268733')
    const neo = message.guild.roles.cache.get('858471187906035803')
    const ht = message.guild.roles.cache.get('870665820831887390')
    const any = message.guild.roles.cache.get('858469572189093898')
    const ask = message.guild.roles.cache.get('858469572571430933')
    const testers = message.guild.roles.cache.get('970663380320911410')
    const mcEvent = message.guild.roles.cache.get('971823395673100318')
    /*
    All roles defined - Main Code!
    */

    if(args[0] === 'mcevent') {
      const success = new MessageEmbed()
      .setDescription("Applied the role `MC Event` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(mcEvent)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'testing') {
      const success = new MessageEmbed()
      .setDescription("Applied the role `Testing Peeps :)` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(testers)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'she/they') {
      const success = new MessageEmbed()
      .setDescription("Applied the role `She/They` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(st)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'it') {
      const success = new MessageEmbed()
      .setDescription("Applied the role `It/Its` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(it)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'we') {
      const success = new MessageEmbed()
      .setDescription("Applied the role `We/Us` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(we)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'neo') {
      const success = new MessageEmbed()
      .setDescription("Applied the role `Neo Pronouns` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(neo)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'he/they') {
      const success = new MessageEmbed()
      .setDescription("Applied the role `He/They` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(ht)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }


    
    if(args[0] === 'she/her'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `She/Her` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(she)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'he/him'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `He/Him` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(he)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'they/them'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `They/Them` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(they)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'any'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `Any pronouns` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(any)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'ask'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `Ask for pronouns` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(ask)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }


    /*
    This part of the code removes the role from the person
    */

    if(args[0] === 'remove') {

      if(role === 'testing') {
      const success = new MessageEmbed()
      .setDescription("Removed the role `Testing Peeps :)` from " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.remove(testers)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

      if(role === 'mcevent'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `MC Event` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(mcEvent)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }
      
      if(role === 'she/her'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `She/Her` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(she)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'he/him'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `He/Him` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(he)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'they/them'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `They/Them` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(they)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'any'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `Any pronouns` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(any)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'ask'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `Ask for pronouns` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(ask)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }
    }
  }
}