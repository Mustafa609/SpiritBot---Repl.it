const Discord = require('discord.js');
const ms = require('ms');

exports.run = async(client, message, args) => {
    if (message.author.bot) return;
    if (!message.member.haasPermission('ADMINISTRATOR')) return;
    var reason = args.slice(" ")
    var Duration = args.slice(" ")
    if (!reason) return message.reply('Please mention a reason for me to sleep')
    var sleepEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.displayAvatarURL({ dynamic: true }), client.user.tag)
      .setColor('FF0000')
      .setTitle(client.user.displayUsername, `I am asleep no commands would work for ${Duration}`)
      .setDescription(`The bot is asleep and wont work till the mentioned time please use the \`Wake\` command for the bot to wakeup warning: this command is in its beta situation thr bot isn't asleep you can use the commands :)`)
}