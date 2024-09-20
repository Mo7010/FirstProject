// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class AccCommand extends BaseCommand {
  constructor() {
    super('بينق-مراقبة', 'roles', []);
  }
  /**
   * 
   * @param {Discord.Client} client 
   * @param {Discord.Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
      let i = 0
     let x = setInterval(()=>{
          i++;
             message.reply({content : `${client.ws.ping} :ping_pong:`})
          if(i== 10) clearInterval(x)
      },10000)
  }
}