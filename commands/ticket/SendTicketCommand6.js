// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket6', 'ticket', []);
  }
  /**
   * 
   * @param {Discord.Client} client 
   * @param {Discord.Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender) && message.author.id != "772082329866862604") return
    let button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('open6')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تذكرة - تقديم`)
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('58b9ff')
      .setTitle("قسم التقديم")
      .setDescription(`**  - تكت تقديم إدارة


 - مرحبآ بك عزيزي العضو في سيرفر رعد سيتي للتقديم على إدارة رعد سيتي قم بفتح تكت

      
 - ملاحظة

      
1 - يرجى تعبئه الاستبيان كامل 

      
2 - اذا تم قبولك يرجى التوجه لـ روم القسم 

      
3 - اذا تم قبولك يرجى الالتزام ب القوانين كامله


 - متمنين لكم اوقات ممتعه في R3D CITY __**`)


    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}