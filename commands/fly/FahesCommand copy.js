// @ts-nocheck
const { Client, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
module.exports = class FahesCommand extends BaseCommand {
  constructor() {
    super('نداء', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.member.roles.cache.has("1168136920153464872")) return
    if(!message.mentions.members.first()) return message.reply({
      content : `:x: | قم بمنشن عضو`
    })
    let m = message.mentions.members.first()
    message.reply({
      content : `تم نداء العضو`
    })
    m.send({content:`يا حلو الإداري  | ${message.member} يحتاجك 
${message.channel}`}).catch(e=>console.log(e))
  }
}