const { Client, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const bank = require("../../models/bank")
module.exports = class ZeroCommand extends BaseCommand {
  constructor() {
    super('تصفير-الكل', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    let admins = ["1067749404439760896","1027963715221475408"]
    if(message.channel.id != "1122985691186466927") return message.reply({content : "الرجاء الذهاب الى روم : <#1122985691186466927>"})
    if(!admins.includes(message.member?.id)) return message.reply({content :`:x: | لايمكنك تصفير النقود`})
      let d = await bank.find({})
      if(!d)return
      if(!d[0]) return
      d.forEach(async x=>{
          x.amount = 0
          x.bank = 0
          await x.save()
      })
      message.reply({content : "✅ | تم تصفير الجميع"})
      message.guild?.channels.cache.find(x=>x.id == "1143528555448385647").send({
          content : `
تم تصفير الكل
بواسطة الادمن : ${message.member}`
        })
  }
}