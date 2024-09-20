// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket5', 'ticket', []);
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
          .setCustomId('open5')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تذكرة - عضويات`)
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('58b9ff')
      .setTitle("قسم العضويات")
      .setDescription(`**__  - طلب عضوية


 - مرحبآ بك عزيزي العضو فـي سيرفر ثري تاون لطلب عضوية قم بفتح تذكره    

      
 - ملاحظة

      
1 - يرجى اختيار العضوية 

      
2 - بعد اختيار العضوية قم ب انتضار الاداره بدون ازعاج 


      
 - إدارة رعد سيتي تحت خدمتكم__**`)


    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}