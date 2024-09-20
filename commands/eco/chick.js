const { Client, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const bank = require("../../models/bank")
let {ch}= require("../../config")
module.exports = class AddCommand extends BaseCommand {
  constructor() {
    super('شيك', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
      
  if(message.channel.id != "1166195329700483152" && message.author.id != "1166193339914272882") return

      if(!message.member.roles.cache.has(ch) && message.author.id != "1166193339914272882") return
    if(!args[1] || !message.mentions.members?.first()) return message.reply({content : "-شيك @منشن المبلغ"})
    let data = await bank.findOne({user:message.mentions.members.first()?.id})
    data.bank += parseInt(args[1])
    await data.save()
    message.reply({content : "✅ | تمت اضافة المبلغ بنجاح"})
      message.guild?.channels.cache.find(x=>x.id == "1133733685531791480").send({
          content : `
تمت اضافة مبلغ ${args[1]}
للعضو : ${message.mentions.members.first()}
بواسطة الادمن : ${message.member}
باستخدام امر شيك `
        })
  }
}