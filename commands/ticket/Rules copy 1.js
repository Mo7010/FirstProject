// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('rols1', 'ticket', []);
  }
  /**
   * 
   * @param {Discord.Client} client 
   * @param {Discord.Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender)) return
    message.channel.send({
      embeds: [
    {
      "title":  "لغة السيرفر",
      "description": "__1 - مات : [فقد الوعي] \n\n 2 - صوته مو واضح : [ لسانك مو في شي؟ ]\n\n 3 - لاق / ملقلق : [صداع / مصدع]\n\n 4 - طلع من القيم : [سافر] \n\n 5 -   الديسكورد : [برنامج الدولة]\n\n 6 - إعلانات المدينة : [تويتر المدينة]\n\n 7 - عندي لاق [فيني صداع]\n\n 8 -  بروح وبجي [باخذ غفوة]\n\n 9 - بطلع من القيم [بسافر]\n\n 10 - قلتش [سحر اسود]\n\n 11 - فلان ذبحني [فلان أصابني]\n\n 12 - انا مت [جاتني إصابة]\n\n 13 - يمنع مناداة الشخص عن طريق ايديه [يا مواطن او يا عسكري]\n\n 14 - عط نفسك ميوت [اسكت او قفل احبالك الصوتية]\n\n 15 - عندك صدا [احبالك الصوتية مزعجه]\n\n 16 - طفت اليدة [تشنجت] \n\n ملاحظة : مخالفتك لأحد القوانين يؤدي ألى مخالفتك__",
      "color": 15434501
    }
  ]
    })
  }
}