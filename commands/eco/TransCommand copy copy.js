// @ts-nocheck
const { Client, Message, EmbedBuilder } = require('discord.js');
const bank = require('../../models/bank');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TransCommand extends BaseCommand {
  constructor() {
    super('ايداع', 'eco', []);
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
    if(sender?.amount < parseInt(args[0])) return message.reply({content : `رصيدك غير كافي لهذه العملية`})

    sender.bank += parseInt(args[0])
    sender.amount -= parseInt(args[0])
    await sender.save()
    let embe = new EmbedBuilder()
    .setColor("Gold")
    .setTitle("ايداع مبلغ")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL())
    .setDescription(`**مصرف الراجحي | **

    **ايداع مبلغ | 
        
        العميل : ${message.member} | 

        المبلغ الذي تم ايداعه : ${args[0]} |  **`)
await message.channel.send({embeds: [embe]})

  }
}