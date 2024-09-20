//@ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { Client, PermissionFlagsBits, ButtonStyle } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
const s = require('../config');
const db = require("pro.db")

const { catgs1 } = require('../config');
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
    let sri = s.adsRole //ايدي رتبة السبورت
    if (interaction.customId == "open1") {
        db.add("www2",1)
      let ch = await interaction.guild?.channels.create({
        name: `تذكرة إعلانات-${db.get("www2")}`,
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
        parent: catgs1
      })
      ch.send({
        content: `
${interaction.member} - <@&${sri}>

**  - مرحبآ بك عزيزي العضو في تكت طلب اعلان

نوع الاعلان :
      
إضافات على الإعلان في حال لايوجد اكتب لايوجد :
      
 - اداره رعد لايف في خدمتكم**
`,
        embeds: [new EmbedBuilder()
          .setTitle(`الاعلان`)
          .setTimestamp()
          .setColor(0xEAE843)
          .setDescription(`**__  -  مرحبا بك عزيزي العضو في قسم طلب اعلان 

 - نرجو منك عزيزي العضو إنتضار إستلام التكت من قبل الادارة __**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim1")
              .setStyle(ButtonStyle.Success)
              .setLabel("استلام"),
            new ButtonBuilder()
              .setCustomId("trk1")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("ترك"),
            new ButtonBuilder()
              .setCustomId("delete1")
              .setStyle(ButtonStyle.Danger)
              .setLabel("حذف")
          )]
      })
      interaction.reply({ content: `${ch}`, ephemeral: true })
    }
  }
}