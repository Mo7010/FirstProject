const { Client, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const bank = require("../../models/bank")
module.exports = class AddCommand extends BaseCommand {
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
    let admins = ["1104325758572314634","1067749404439760896","1027963715221475408"]
    if(!admins.includes(message.member?.id)) return message.reply({content :`:x: | لايمكنك اضافة نقود`})
    if(!args[1] || !message.mentions.members?.first()) return message.reply({content : "-زيد @منشن المبلغ"})
    let data = await bank.findOne({user:message.mentions.members.first()?.id})
    data.amount += parseInt(args[1])
    await data.save()
    message.reply({content : "✅ | تمت اضافة المبلغ بنجاح"})
      message.guild?.channels.cache.find(x=>x.id == "1143528555448385647").send({
          content : `
تمت اضافة مبلغ ${args[1]}
للعضو : ${message.mentions.members.first()}
بواسطة الادمن : ${message.member}`
        })
  }
}