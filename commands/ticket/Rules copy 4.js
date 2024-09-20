// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('rols4', 'ticket', []);
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
      "title":  "انـظمـة الـجـمـس",
      "description": "__1 - ممنوع تعاند الجمس عقوباتها 14h\n\n 2 - ممنوع تذبح الجمس عقوباتها 3d\n\n 3 - ممنوع ترفع صوتك على الجمس عقوباتها 22h\n\n 4 - ممنوع تكذب على الجمس عقوباتها 24h\n\n 5 - ممنوع ترفع صوتك وانت راكب الجمس عقوباتها 10h\n\n 6 - ممنوع الطقطقه مع الجمس عقوباتها 8h\n\n 7 - ممنوع تتفاعل مع الجمس بدون مايطلب منك عقوباتها 30h__",
      "color": 15434501
    }
  ]
    })
  }
}