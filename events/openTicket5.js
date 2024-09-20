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
    let sri = "1133733128679211050" //ايدي رتبة السبورت
    if (interaction.customId == "open5") {
        db.add("www6",1)
      let ch = await interaction.guild?.channels.create({
        name: `تذكرة عضويات-${db.get("www6")}`,
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
        parent: "1133733338620903434"
      })
      ch.send({
        content: `
**${interaction.member} - <@&${sri}>

 - مرحبآ بك عزيزي العضو في تكت طلب عضوية

اسم العضوية : 
    
 - إدارة ثري تاون في خدمتكم**
`,
        embeds: [new EmbedBuilder()
          .setTitle(`طلب عضوية`)
          .setTimestamp()
          .setColor(0xEAE843)
          .setDescription(`**__  -  مرحبا بك عزيزي العضو في قسم طلب عضوية 

 - نرجو منك عزيزي العضو إنتضار إستلام التكت من قبل الإدارة __**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim5")
              .setStyle(ButtonStyle.Success)
              .setLabel("استلام"),
            new ButtonBuilder()
              .setCustomId("trk5")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("ترك"),
            new ButtonBuilder()
              .setCustomId("delete5")
              .setStyle(ButtonStyle.Danger)
              .setLabel("حذف")
          )]
      })
      interaction.reply({ content: `${ch}`, ephemeral: true })
    }
  }
}