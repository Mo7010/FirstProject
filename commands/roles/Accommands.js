const { ActionRowBuilder, StringSelectMenuBuilder } = require('@discordjs/builders');
const { Client, Message, SelectMenuOptionBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
let rolesDb = [
  ["1122984567981224017","1122984565733073087","1122984563036143696","1122984500696207361"],
  ["1122984493045792968","1122984563036143696","1122984565733073087","1122984567981224017"],
  ["",""],
  ["",""],
  ["1122984585928654849","1122984599451095071"],
  ["1122984632946806794","1122984622821740806"],
  ["1122984684360577125","1122984695068639392"],
  ["",""],
  ["","","",""]
]
module.exports = class AcceptCommand extends BaseCommand {
  constructor() {
    super('توظيف', 'roles', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.member?.roles.cache.has("1122984417867079700") && message.member.id != "489501373499572224") return message.reply({content:"لاتملك صلاحية استخدام هذا الامر"})
    let ob = [
      {
        name : "الامن العام",
        id :"0"
      },
      {
        name : "القوات الخاصة",
        id :"1"
      },
      {
        name : "لا يوجد مؤقتا",
        id :"8"
      }
    ]
    let ob2 = [{
      name : "لا يوجد",
      id : "2"
    },{
      name : "البلود",
      id : "3"
    },{
      name : "حزب الإطاليين",
      id : "4"
    }]
    let ob3 = [{
      name : "اعلامي",
      id: "5"
    },{
      name :"محامي",
      id : "6"
    },{
      name : "قاضي",
      id : "7"
    }]
    if(!message.mentions.members?.first()) return message.reply({content : "الرجاء منشن عضو"})
    let s = new StringSelectMenuBuilder()
    .setCustomId("kia3at")
    .setMaxValues(1)
    .setPlaceholder("القطاعات الحكومية")
    ob.forEach(x=>{
      s.addOptions([new SelectMenuOptionBuilder().setLabel(x.name).setValue(x.id)])
    })
    let s2 = new StringSelectMenuBuilder()
    .setCustomId("esabat")
    .setMaxValues(1)
    .setPlaceholder("العصابات")
    ob2.forEach(x=>{
      s2.addOptions([new SelectMenuOptionBuilder().setLabel(x.name).setValue(x.id)])
    })
    let s3 =   new StringSelectMenuBuilder()
    .setCustomId("other")
    .setMaxValues(1)
    .setPlaceholder("وظائف اخرى")
    ob3.forEach(x=>{
      s3.addOptions([new SelectMenuOptionBuilder().setLabel(x.name).setValue(x.id)])
    })
    let rowq = new ActionRowBuilder()
    .addComponents(
      s
    )
    let rowq2 = new ActionRowBuilder()
    .addComponents(
      s2
    )
    let rowq3 = new ActionRowBuilder()
    .addComponents(
      s3
    )
   let dk = await  message.reply({components :[rowq,rowq2,rowq3]})
    const filter = (interaction) => interaction.user.id == message.author.id;

    let collected = await dk.awaitMessageComponent({ filter, time: 15_000}).catch((c) =>{
        console.log(`After five seconds, ${c.size} messages are collected.`)
        message.channel.send(":x: | تم الغاء الامر لعدم التفاعل")
    });
      if(!collected) return
    rolesDb[Number(collected.values[0])].forEach(k=>{
      message.mentions.members.first()?.roles.add(k).catch(null)
    })
    collected.reply({content : `
تم قبول | ${message.mentions.members.first()}

في وظيفة | ${collected.component.options.find(x=> x.value == collected.values[0]).label}

المسؤول عن القبول | ${message.member}`})
    let ob77 = ob.concat(ob2,ob3)
    
    client.channels.cache.get("1084245536850313357").send({
      content : `
تم قبول العضو : ${message.mentions.members.first()}
بواسطة الادمن : ${message.member}
كـ : ${ob77.find(k=>k.id == collected.values[0])?.name}
`
    })
    }
}