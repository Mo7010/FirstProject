// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { Client, ModalSubmitInteraction } = require('discord.js');
const profile = require('../models/profile');
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class InteractionCreateEvent extends BaseEvent {
  constructor() {
    super('interactionCreate');
  }
  /**
   * 
   * @param {Client} client 
   * @param {ModalSubmitInteraction} interaction 
   */
  async run(client, interaction) {
    if(!interaction.isModalSubmit()) return
     let data = await profile.findOne({user: interaction.customId})
     if(!data){
      interaction.reply({content: ":x:",ephemeral : true})
      interaction.message?.delete()
      return
     }
     data.Sawabek = interaction.fields.getTextInputValue("s")
     data.jailTimes = interaction.fields.getTextInputValue("n")
     data.job = interaction.fields.getTextInputValue("j")
     data.HalaJenea = interaction.fields.getTextInputValue("h")
     await data.save()
     interaction.reply({content :"تم انشاء السجل بنجاح ✅"})
            interaction.message?.delete()

  }
}
  