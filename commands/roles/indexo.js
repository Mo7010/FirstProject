// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class AccCommand extends BaseCommand {
  constructor() {
    super('بينق', 'roles', []);
  }
  /**
   * 
   * @param {Discord.Client} client 
   * @param {Discord.Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
  
   message.reply({content : `${client.ws.ping} :ping_pong:`})
  }
}