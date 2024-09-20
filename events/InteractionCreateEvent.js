// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { Client, ButtonInteraction, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const history = require('../models/history');
const profile = require('../models/profile');
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class InteractionCreateEvent extends BaseEvent {
  constructor() {
    super('interactionCreate');
  }
  /**
   * 
   * @param {Client} client 
   * @param {ButtonInteraction} interaction 
   */
  async run(client, interaction) {
    if(!interaction.customId.startsWith("modal")) return
    let args = interaction.customId.split("_")
    if(interaction.user.id != args[2]) return interaction.reply({content: "لايمكنك استخدام هذا الزر",ephemeral :true})
    let d =await profile.findOne({user : args[1]})
    if(!d){
      d = new profile({
      user : args[1],
      HalaJenea : "لايوجد",
      jailTimes : "0",
      job : "عاطل عن العمل",
      Sawabek : "لايوجد",
      fhess :0
    })
    await d.save()
  }
  const modal = new ModalBuilder()
			.setCustomId(args[1])
			.setTitle('انشاء سجل');
      const Sawabek = new TextInputBuilder()
			.setCustomId('s')
			.setLabel("السوابق الجنائية : ")
			.setStyle(TextInputStyle.Paragraph);
      const Num = new TextInputBuilder()
			.setCustomId('n')
			.setLabel("عدد مرات دخول السجن : ")
			.setStyle(TextInputStyle.Paragraph);
      const Hala = new TextInputBuilder()
			.setCustomId('h')
			.setLabel("الحالة الجنائية : ")
			.setStyle(TextInputStyle.Paragraph);
      const Job = new TextInputBuilder()
			.setCustomId('j')
			.setLabel("الوظيفة : ")
			.setStyle(TextInputStyle.Short);
      const firstActionRow = new ActionRowBuilder().addComponents(Sawabek);
		const secondActionRow = new ActionRowBuilder().addComponents(Num);
		const ThirdActionRow = new ActionRowBuilder().addComponents(Hala);
		const fourthActionRow = new ActionRowBuilder().addComponents(Job);
    // @ts-ignore
    modal.addComponents(firstActionRow, secondActionRow,ThirdActionRow,fourthActionRow);
    interaction.showModal(modal)

  }
}
  