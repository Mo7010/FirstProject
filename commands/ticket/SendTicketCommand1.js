// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket1', 'ticket', []);
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
          .setCustomId('open1')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تذكرة - اعلان`)
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('58b9ff')
      .setTitle("قسم الاعلان")
      .setDescription(`**__  - طلب اعلان

      
      - مرحبآ بك عزيزي العضو فـي سيرفر 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘. لطلب اعلان قم بفتح تذكره    
      
       - ملاحظة

      
       1 - يرجى اختيار نوع الاعلان

      
       2 - بعد اختيار الاعلان قم ب انتضار الاداره بدون ازعاج 

      
       - إدارة 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘. تحت خدمتكم__**`)


    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}