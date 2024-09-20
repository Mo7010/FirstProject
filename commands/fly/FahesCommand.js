// @ts-nocheck
const { Client, Message, EmbedBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const bank = require("../../models/bank");
const db = require("pro.db")
const { fgRoleID } = require('../../config');
const profile = require('../../models/profile');
const points = require('../../models/points');
module.exports = class FahesCommand extends BaseCommand {
  constructor() {
    super('فحص', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.member.roles.cache.has(fgRoleID) && message.author.id != "1168136920153464872") return
      if(message.channel.id != "1166195242555416657" &&  message.author.id != "1168136920153464872") return message.reply({content : "لاستخدام امر فحص الرجاء الذهاب الى روم : <#1166195242555416657>"})
    if(!message.mentions.members.first()) return message.reply({
      content : `:x: | قم بمنشن عضو`
    })
    let m = message.mentions.members.first()
    let data = await bank.findOne({user:m.id})
    if(!data){return message.reply({content: "العضو لايملك حساب بنكي"})}
    data.amount -= 150
    await data.save()
    message.reply({
      content : `**__تم حجز مقعد لـ ${m}__** 
      `
    })
    m.send({content:`__**تم حجز مقعد في الرحله رقم :${db.get("nnny")} | 

تم سحب منك مبلغ 150 ريال | 

خطوط ايتش سيتي في خدمتكم | **__

`}).catch(e=>console.log(e))
      m.send({content : ""}).catch(e=>console.log(e))
 let d = await profile.findOne({user : m.id})
 if(!d) d = new profile({user : m.id,HalaJenea : "لايوجد",Sawabek :"لايوجد",jailTimes :"0",job :"عاطل عن العمل",fhess:0})
 d.fhess +=1;
 await d.save()
 if(m.roles.cache.has("1122984417867079700")){
  async function addPoints(id){
    let data = await points.findOne({user : id})
    if(!data) data = new points({user : id})
    data.join +=1;
    await data.save()
  }
  await addPoints(m.id)
  client.channels.cache.get("1133733685531791480").send({
    embeds : [
      new EmbedBuilder()
      .setColor("Random")
      .setTimestamp()
      .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
      .setDescription(`
تم اضافه نقاط

الإداري : ${m}
      
السبب : دخول قيم
`)
    ]
  })
 }
  }
}