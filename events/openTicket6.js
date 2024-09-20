//@ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { Client, PermissionFlagsBits, ButtonStyle } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
const s = require('../config');
const { catgs4 } = require('../config');
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
    let sri = "1133733111172169861" //ايدي رتبة السبورت
    if (interaction.customId == "open6") {
        db.add("www7",1)
      let ch = await interaction.guild?.channels.create({
        name: `تذكرة تقديم -${db.get("www7")}`,
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
        parent: "1133733349513506866"
      })
      ch.send({
        content: `
__**${interaction.member} - <@&${sri}>

استبيان للتقديم على ادارة ثري تاون

- أسمك الثنائي | 

- عمرك | 

- المنطقة | 
 
- خبراتك الادارية | 

- مدة تفاعلك | 

- هل انت اداري او اونر في سيرفر ثاني | 

- لديك خبرة في التفعيل الكتابي | 

- كم شخص تفعل في اليوم | 

- تحضر اجتماعات إدارة | 

- تعرف تنشر | 

- كيف تفاعلك في الأقيام | 

- تحضر حملات نشر | 

انتضر الرد من  : <@&1133733111172169861>

ملاحظة : يجب أن يكون عمر حسابك فالديسكورد شهر فما فوق

ملاحظة هامة : اذ تفاعلك قليل الرجاء منك عدم التقديم

 - متمنين لكم اوقات ممتعه في سيرفر THREE TOWN 
 **__`,
        embeds: [new EmbedBuilder()
          .setTitle(`تقديم ادارة`)
          .setTimestamp()
          .setColor(0xEAE843)
          .setDescription(`**__  -  مرحبا بك عزيزي العضو في قسم تقديم إدارة 

 - نرجو منك عزيزي العضو إنتضار إستلام التكت من قبل الاونر __**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim6")
              .setStyle(ButtonStyle.Success)
              .setLabel("استلام"),
            new ButtonBuilder()
              .setCustomId("trk6")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("ترك"),
            new ButtonBuilder()
              .setCustomId("delete6")
              .setStyle(ButtonStyle.Danger)
              .setLabel("حذف")
          )]
      })
      interaction.reply({ content: `${ch}`, ephemeral: true })
    }
  }
}