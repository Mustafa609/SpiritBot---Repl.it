const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'moderation', []);
  }

  async run(client, message, args) {
    
    const PingEmbed = new Discord.MessageEmbed()
      
      .setColor("PURPLE")
      .setTitle('My Command Latency')
      .setDescription(`My Current Command Latency Is \`${client.ws.ping}\` ms!`)
      
      .setTimestamp();

      message.channel.send(PingEmbed)
  }
}