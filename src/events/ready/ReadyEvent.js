const { Client } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    
    client.user.setUsername('[>] SpiritBot')
    client.user.setPresence({ activity: { name: 'Scarlet\'s Dream World' }, status: 'dnd' }, { type: "WATCHING"})
    console.log('SpiritBot Has Logged In')
  }
}