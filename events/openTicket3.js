//@ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { Client, PermissionFlagsBits, ButtonStyle } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
const s = require('../config');
const { catgs3 } = require('../config');
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
    let sri = s.helpRole //ايدي رتبة السبورت
    if (interaction.customId == "open3") {
        db.add("www4",1)
      let ch = await interaction.guild?.channels.create({
        name: `تذكرة مساعدة-${db.get("www4")}`,
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
        parent: catgs3
      })
      ch.send({
        content: `
${interaction.member} - <@&${sri}>`,
        embeds: [new EmbedBuilder()
          .setTitle(`طلب مساعدة`)
          .setTimestamp()
          .setColor(0xEAE843)
          .setDescription(`**__- مــرحــبــا بك عـزيـزي الـعـضـو فـي قـسـم الـشـكـاوي الـعـامـة .__

__- نـرجـو مـنـك عـزيـزي الـعـضـو إنـتـظـار إسـتـلام تـذكرتـك من أحد طـاقـم الإدارة__**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim3")
              .setStyle(ButtonStyle.Success)
              .setLabel("استلام"),
            new ButtonBuilder()
              .setCustomId("trk3")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("ترك"),
            new ButtonBuilder()
              .setCustomId("delete3")
              .setStyle(ButtonStyle.Danger)
              .setLabel("حذف")
          )]
      })
      interaction.reply({ content: `${ch}`, ephemeral: true })
    }
  }
}