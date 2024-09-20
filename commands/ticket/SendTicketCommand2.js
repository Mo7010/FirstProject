// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket2', 'ticket', []);
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
          .setCustomId('open2')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تذكرة - اونر`)
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('58b9ff')
      .setTitle("**__قسم الأونرز__*")
      .setDescription(`**__لـطـلب أونـر قـم بـفتـح التـكـت الـتـالـي
      مـلاحـظـات مـهـمـة  

𝟭- يـمـنع فـتـح الـتـكت لأسـباب تـافهه ولاتـسـتـحق تـدخـل 
 .

𝟮 -يـمـنع إكـثار الـمـنـشن والإزعـاج فـالـتـكـت .


3 -فـي حـال لـديـك شـكـوى لـم تـحل يـجـب إرفـاق الأدلـة الكـافـية إلـى أن يـتـم الـرد عـلـيـك .  



4 –فـي حـال مـخـالفـتك لأحـد الـملاحـظـات مـيـوت سـاعـة .


– أونـرية  𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘. فـي خـدمـتـكـم دائـمـآ .  ( مـع تـمـنـيـاتـنـا لـكـم بـالـتـوفـيـق )__**`)


    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}