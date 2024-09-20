// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket4', 'ticket', []);
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
          .setCustomId('open4')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تذكرة - شكوى`)
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('58b9ff')
      .setTitle("قسم الشكاوي")
      .setDescription(`**__  - رفع شكوى

- مرحبآ بك عزيزي العضو في سيرفر Gold Life لرفع شكوى قم بفتح تكت     
      
 - ملاحظة

      
1 - يرجى عدم فتح تذكره على اسباب تافهه 

      
 2 - يرجى تعبئه الاستبيان كامل 

      
3 - بعد تعبئه الاستبيان انتظر الرد من قبل الادارة بدون ازعاج  

      
 - ادارة سيرفر Gold Life تحت خدمتكم __**`)


    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}