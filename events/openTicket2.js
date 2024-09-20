//@ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { Client, PermissionFlagsBits, ButtonStyle } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
const s = require('../config');
const { catgs2 } = require('../config');
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
    let sri = s.ownersRole //ايدي رتبة السبورت
    if (interaction.customId == "open2") {
        db.add("www3",1)
      let ch = await interaction.guild?.channels.create({
        name: `تذكرة اونر-${db.get("www3")}`,
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
        parent: catgs2
      })
      ch.send({
        content: `
${interaction.member} - <@&${sri}>

**__  - مرحبآ بك عزيزي العضو في تكت طلب اونر

تفضل اكتب ما تريده وانتضر الرد من قبل الاونر بدون ازعاج 


 - اونرز - 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘  . في خدمتكم__**
`,
        embeds: [new EmbedBuilder()
          .setTitle(`طلب اونر`)
          .setTimestamp()
          .setColor(0xEAE843)
          .setDescription(`**__  -  مرحبا بك عزيزي العضو في قسم طلب اونر 

 - نرجو منك عزيزي العضو إنتضار إستلام التكت من قبل الاونر __**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim2")
              .setStyle(ButtonStyle.Success)
              .setLabel("استلام"),
            new ButtonBuilder()
              .setCustomId("trk2")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("ترك"),
            new ButtonBuilder()
              .setCustomId("delete2")
              .setStyle(ButtonStyle.Danger)
              .setLabel("حذف")
          )]
      })
      interaction.reply({ content: `${ch}`, ephemeral: true })
    }
  }
}