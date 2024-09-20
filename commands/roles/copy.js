const { ActionRowBuilder, StringSelectMenuBuilder } = require('@discordjs/builders');
const { Client, Message, SelectMenuOptionBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
let rolesDb = [
  ["1039298039141105674","1080456799439822879","1030144674746351697","1039464460080926750"],
  ["1030144674746351697","1080456799439822879","1039298039141105674","1068914996978917456"],
  ["1061213182494003221","1030927461480935465"],
  ["1030927461480935465","1069225529988878387"],
  ["1078680530087845979","1030927461480935465"],
  ["1073868439069925416","1073868784600887347"],
  ["1066734164591775755","1066734837538508850"],
  ["1066735301453688862","1066734164591775755"],
      ["1039298039141105674","1090388713151926402","1080456799439822879","1030144674746351697"]

]
module.exports = class AcceptCommand extends BaseCommand {
  constructor() {
    super('موقفزي', 'roles', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.member?.roles.cache.has("987310088681299999")) return message.reply({content:"لاتملك صلاحية استخدام هذا الامر"})
    let ob = [
      {
        name : "الامن العام",
        id :"0"
      },
      {
        name : "القوات الخاصة",
        id :"1"
      },{
          name : "المباحث العامة",
          id : "8"
      }
    ]
    let ob2 = [{
      name : "Grove street",
      id : "2"
    },{
      name : "TRICKSTER",
      id : "3"
    },{
      name : "The Blood",
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
      message.mentions.members.first()?.roles.remove(k).catch(null)
    })
    collected.reply({content : `
تم سحب رتب | ${message.mentions.members.first()}

في وظيفة | ${collected.component.options.find(x=> x.value == collected.values[0]).label}

المسؤول عن القبول | ${message.member}`})
    let ob77 = ob.concat(ob2,ob3)
    
    client.channels.cache.get("1084245536850313357").send({
      content : `
تم سحب رتب العضو : ${message.mentions.members.first()}
بواسطة الادمن : ${message.member}
كـ : ${ob77.find(k=>k.id == collected.values[0])?.name}
`
    })
    }
}