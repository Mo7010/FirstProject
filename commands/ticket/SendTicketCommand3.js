// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket3', 'ticket', []);
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
          .setCustomId('open3')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تذكرة - مساعدة`)
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('58b9ff')
      .setTitle("**__قسم المساعدة__**")
      .setDescription(`**__قسم -- المساعدة__
 - في حال لديك مشكلة أو استفسار قم بفتح تكت . .

__ :ويـرجـى الإلـتـزام بالـتـالـي.__

__ -إحترام الإداري
 -شـرح مـشـكـلـتـك بالـتـفـصـيـل
 -عـدم إكـثـار الـمـنـشـن بالـتـكـت.__

 - نتمنى الإلتزام باللائحة وعدم مخالفتها 

(مع تمنياتنا لكم بالتوفيق)__**`)


    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}