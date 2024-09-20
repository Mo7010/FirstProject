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
    let sri = s.roel4 //ايدي رتبة السبورت
    if (interaction.customId == "open4") {
        db.add("www5",1)
      let ch = await interaction.guild?.channels.create({
        name: `تذكرة شكاوي-${db.get("www5")}`,
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
        parent: catgs4
      })
      ch.send({
        content: `
${interaction.member} - <@&${sri}>

**__  - مرحبآ بك عزيزي العضو في تكت رفع شكوى

اكمل الاستبيان الاتي

اداري / عضو | 

منشن الشخص | 

سبب الشكوى | 

يرجى ارفاق دليل صارم

 - ادارة - 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘  . في خدمتكم__**
`,
        embeds: [new EmbedBuilder()
          .setTitle(`رفع شكوى`)
          .setTimestamp()
          .setColor(0xEAE843)
          .setDescription(`**__  -  مرحبا بك عزيزي العضو في قسم رفع شكوى 

 - نرجو منك عزيزي العضو إنتضار إستلام التكت من قبل الادارة __**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim4")
              .setStyle(ButtonStyle.Success)
              .setLabel("استلام"),
            new ButtonBuilder()
              .setCustomId("trk4")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("ترك"),
            new ButtonBuilder()
              .setCustomId("delete4")
              .setStyle(ButtonStyle.Danger)
              .setLabel("حذف")
          )]
      })
      interaction.reply({ content: `${ch}`, ephemeral: true })
    }
  }
}