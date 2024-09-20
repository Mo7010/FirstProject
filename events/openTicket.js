//@ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { Client, PermissionFlagsBits, ButtonStyle } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
const s = require('../config');
const { catg } = require('../config');
const db = require("pro.db")
module.exports = class InteractionCreateEvent extends BaseEvent {
  constructor() {
    super('interactionCreate');
  }
  /**
   * 
   * @param {Client} client 
   * @param {import('discord.js').Interaction} interaction 
   */
  async run(client, interaction) {
    if (!interaction.isButton()) return
    let sri = s.supportId //ايدي رتبة السبورت
    if (interaction.customId == "open") {
        db.add("www1",1)
      let ch = await interaction.guild?.channels.create({
        name: `تذكرة تفعيل-${db.get("www1")}`,
        permissionOverwrites: [
          {
            id: interaction.guildId,
            deny: PermissionFlagsBits.ViewChannel
          },
          {
            id: interaction.member.id,
            allow: [PermissionFlagsBits.ViewChannel,PermissionFlagsBits.MentionEveryone,PermissionFlagsBits.AttachFiles]
          },
          {
            id: sri,
            allow: PermissionFlagsBits.ViewChannel
          }
        ],
        parent: catg
      })
      ch.send({content : `
<@&${sri}> - ${interaction.member}
      __**أسئلة المقابلات في سيرفر رعد  سيتي
اسمك :

عمرك :

ايديك :

1 - عرف لي الرول بلاي : 
الجواب:

2 - ماهو ال RDM
الجواب: 

3 - ماهو ال VDM
الجواب : 

4 - ماهو ال LAR 
الجواب :

5 - هل يمديك القتل بالامنه؟ 
الجواب :

6 - اذا مت وانت بحرب هل يمديك ترجع مكان الحرب وتقتلهم
الجواب :

7 - يمديك تداهم مركز الشرطة 
الجواب :  

8 - كم كفر يتفقع عشان توقف 
الجواب :

9 - هل يمديك تخطف بلمنطقة الامنة
الجواب :

10 - هل تقدر تبدل ملابسك بمكان عام
الجواب :

 - متمنين لكم اوقات ممتعه في سيرفر R3D CITY 
 **__
`,
    embeds : [new EmbedBuilder()
      .setTitle(`التغعيل`)
      .setTimestamp()
      .setColor(0xEAE843)
      .setDescription(`**__  -  مرحبا بك عزيزي العضو في قسم التفعيل   .

 - نرجو منك عزيزي العضو إنتضار إستلام التكت من قبل الادارة __**`)],
components : [new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
      .setCustomId("claim")
      .setStyle(ButtonStyle.Success)
      .setLabel("استلام"),
    new ButtonBuilder()
      .setCustomId("trk")
      .setStyle(ButtonStyle.Secondary)
      .setLabel("ترك"),
    new ButtonBuilder()
      .setCustomId("delete")
      .setStyle(ButtonStyle.Danger)
      .setLabel("حذف")
  )]})
  interaction.reply({content: `${ch}`,ephemeral:true})
    }
  }
}