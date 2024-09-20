// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket', 'ticket', []);
  }
  /**
   * 
   * @param {Discord.Client} client 
   * @param {Discord.Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender)) return
    let button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('open')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تذكرة - تفعيل`)
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('58b9ff')
      .setTitle("قسم التفعيل")
      .setDescription(`**__  - تكت التفعيل

 - مرحبآ بك عزيزي العضو في سيرفر 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘. لكي تتفعل قم بفتح تكت    
      
 - ملاحظة
      
1 - يرجى تعبئه الاستبيان كامل 
      
2 - بعد تعبئه الاستبيان يرجى منك التوجه ل روم لـ قول القسم
      
3 - اذا تم تفعيلك يرجى الالتزام ب القوانين كامله

 - متمنين لكم اوقات ممتعه في 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘.__**`)
    message.channel.send({embeds: [embed] , components: [button]})
  }
}