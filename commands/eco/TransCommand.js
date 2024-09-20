// @ts-nocheck
const { Client, Message, EmbedBuilder } = require('discord.js');
const bank = require('../../models/bank');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TransCommand extends BaseCommand {
  constructor() {
    super('تحويل', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.mentions.members.first()) return message.reply({content : '** منشن العضو **'})
      if(message.channel.id != "1166195329700483152") return message.reply({content : "الرجاء الذهاب الى روم : <#1166195329700483152>"})
    if(!args[1]) return message.reply({content :"قم بادخال مبلغ"})
    // @ts-ignore
    if(message.mentions.members.first().id == message.author.id) return message.reply({content: 'لا يمكنك التحويل لنفسك'})
    if(isNaN(args[1]) || parseInt(args[1])<=0 ) return message.reply({content :"رجاء قم بتحديد رقم صالح"}) 
    let sender= await bank.findOne({user:message.member?.id})
    if(sender?.amount < parseInt(args[1])) return message.reply({content : `رصيدك غير كافي لهذه العملية`})
    let reciver = await bank.findOne({user: message.mentions.members.first()?.id})
    let randInt = Math.floor(Math.random()* 4000) + 1000;
    message.reply({
      content :`لتاكيد العملية الرجاء ارسال الرقم التالي : \`${randInt}\` `
    })
    const msg_filter = (m) => m.author.id === message.author.id && m.content == randInt.toString();
    let col = await message.channel.awaitMessages({filter : msg_filter,max:1})
    if(!col) return
    if(!col.first()) return message.reply({content : ":x: | رقم خاطئ"})
    sender.amount -= parseInt(args[1])
    reciver.bank += parseInt(args[1])
    await sender.save()
    await reciver.save()
    let embe = new EmbedBuilder()
    .setColor("Gold")
    .setTitle("حوالة")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL())
    .setDescription(`**مصرف الراجحي | **

    **تحويل مبلغ | 
        
        العميل : ${message.member} | 
        
        العميل الذي تم التحويل له : <@${message.mentions.members.first()?.id}> | 
        
        المبلغ الذي تم تحويله : ${args[1]} |  **`)
await message.channel.send({embeds: [embe]})
message.mentions.members.first().send({
  content : `
  __**مصرف الراجحي | **__

__**حواله صادره من : ${message.member} | **__

__**بقيمة : \`${args[1]}\` |  **__
  `
}).catch(null)
  }
}