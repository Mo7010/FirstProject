const { Client, Message, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const profile = require('../../models/profile');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CreateCommand extends BaseCommand {
  constructor() {
    super('انشاء', 'jails', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
   
  if(message.channel.id != "1143564388595400786") return
      if(!message.member?.roles.cache.has("1122984567981224017") &&  message.author.id != "489501373499572224") return
    let m = message.mentions.members?.first()
    if(!m) return message.reply({content :":x: | منشن عضو"})
    let row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
      .setStyle(ButtonStyle.Primary)
      .setLabel("استبيان")
      .setCustomId(`modal_${m.id}_${message.member?.id}`)
    )
    message.reply({
      content : "يرجى تعبئة الاستبيان من الاسفل بالضغط على الزر الازرق",
      components : [row]
    })
    }
}