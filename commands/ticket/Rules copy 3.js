// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('rols3', 'ticket', []);
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
      "title":  "المناطق الامنة",
      "description": "1 - مراكز الشرطة\n\n 2 - المستشفيات\n\n 3 - البيوت او الشقق\n\n 4 - الحديقة العامة\n\n 5 - ورشات التصليح\n\n 6 - مبنى وزارة العدل كامل\n\n 7 - مركز الوظائف\n\n 8 - المراكز الحكوميه\n\n 9 - ايكيا\n\n 10 - اماكن تجمع مواطنين\n\n ملاحظة : مخالفتك لأحد القوانين يؤدي ألى مخالفتك",
      "color": 15434501
    }
  ]
    })
  }
}