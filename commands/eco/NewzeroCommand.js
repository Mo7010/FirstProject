const { Client, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const bank = require("../../models/bank")
module.exports = class newZeroCommand extends BaseCommand {
  constructor() {
    super('', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    let admins = ["1027963715221475408","1067749404439760896",""]
    if(!admins.includes(message.member?.id)) return message.reply({content :`:x: | لايمكنك تصفير النقود`})
      if(message.channel.id != "1122985691186466927") return message.reply({content : "الرجاء الذهاب الى روم : <#112298569118646692>"})
      if(!message.mentions.members.first()) return
      let d = await bank.findOne({user : message.mentions.members.first().id})
      if(!d) return message.reply({content : "لا يملك العضو حساب بنكي"})
      d.amount = 0
            d.bank = 0

      await d.save()
      message.reply({content : "✅ | تم تصفير العضو بنجاح"})
      message.guild?.channels.cache.find(x=>x.id == "1133733685531791480").send({
          content : `
تم تصفير العضو : ${message.mentions.members.first()}
بواسطة الادمن : ${message.member}`
        })
  }
}