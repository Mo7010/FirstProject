// @ts-nocheck
const { Client, Message, EmbedBuilder } = require('discord.js');
const bank = require('../../models/bank');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TransCommand extends BaseCommand {
  constructor() {
    super('سحب', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
   
      if(message.channel.id != "1166195329700483152") return message.reply({content : "الرجاء الذهاب الى روم : <#1166195329700483152>"})
    if(!args[0]) return message.reply({content :"قم بادخال مبلغ"})

    if(isNaN(args[0]) || parseInt(args[0])<=0 ) return message.reply({content :"رجاء قم بتحديد رقم صالح"}) 
    let sender= await bank.findOne({user:message.member?.id})
    if(sender?.bank < parseInt(args[0])) return message.reply({content : `رصيدك غير كافي لهذه العملية`})

    sender.amount += parseInt(args[0])
    sender.bank -= parseInt(args[0])
    await sender.save()
    let embe = new EmbedBuilder()
    .setColor("Gold")
    .setTitle("سحب مبلغ")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL())
    .setDescription(`**مصرف الراجحي | **

    **سحب مبلغ | 
        
        العميل : ${message.member} | 

        المبلغ الذي تم سحبه : ${args[0]} |  **`)
await message.channel.send({embeds: [embe]})

  }
}