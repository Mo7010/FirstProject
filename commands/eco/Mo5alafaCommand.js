// @ts-nocheck
const { SelectMenuBuilder, SelectMenuOptionBuilder } = require('@discordjs/builders');
const { Client, Message, ActionRowBuilder } = require('discord.js');
const { mo5Role } = require('../../config');
const bank = require('../../models/bank');
const BaseCommand = require('../../utils/structures/BaseCommand');
const history = require("../../models/history")
module.exports = class Mo5alafaCommand extends BaseCommand {
  constructor() {
    super('مخالفة', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
      if(message.channel.id != "1166195308628299836" &&  message.author.id != "1166193430200864840") return message.reply({content : "لاستخدام الامر توجه الى : <#1166195308628299836>"})
    if(!message.member?.roles.cache.has(mo5Role) &&  message.author.id != "1166193495527137340") return message.reply({content :"لا تستطيع اعطاء مخالفات"})
    if(!message.mentions.members?.first()) return message.reply({content : ":x: | منشن عضو"})
    let member = message.mentions.members.first()
    let bankac = await bank.findOne({user:member?.id})
    let ob = [{
      name : "تفحيط",
      price : "1000"
    },{
      name : "سرعة عالية",
      price : "100"
    },{
      name : `الاصطدام بمركبة حكومية`,
      price : "250"
    },{
      name : "وقوف خاطئ",
      price : "250"
    },{
      name : "ازعاج السلطات",
      price : "500"
    },{
      name : "هروب من الشرطة",
      price : "1000"
    },{
      name : "عكس السير",
      price : "1500"
    },{
      name : "الاستهزاء برجل الامن",
      price : "100"
    },{
      name : "وقوف المركبة او تحركها فوق الرصيف",
      price : "1000"
    },{
      name : " تخريب الممتلكات العامة",
      price : "400"
    },{
      name : "تضليل المركبة",
      price : "300"
    },{
      name : " قطع الاشارة الضوئية",
      price : "2000"
    },{
      name : "عدم وجود لوحة خلفية",
      price : "2500"
    },{
      name :"تشوه بصري",
      price : "200"
    },{
      name : "سوء استخدام منبه المركبة ( البوري)",
      price : "100"
    },{
      name : "وضع تجاليد على المركبة",
      price : "150"
    },{
      name : "وضع اشياء داخل المركبة تعيق رؤية السائق",
      price : "50"
    },{
      name : "عدم وجود هوية وطنية",
      price : "500"
    },{
      name : "تعديل على هيكل المركبة",
      price : "250"
    },{
      name : "رشوة موضف حكومي",
      price : "2000"
    },{
      name : "القيادة تحت تآثير مسكر",
      price : "1500"
    }
  ]
    let neww = []
    ob.forEach((x,i)=>{
      let y = new SelectMenuOptionBuilder()
      .setLabel(x.name)
      .setValue(x.price+`_${i}`);
      neww.push(y)
    })
    
    let row = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
      .setMaxValues(1)
      .setCustomId("s1")
      .setPlaceholder("اختر نوع المخالفة")
      .addOptions(neww)
    )
    message.reply({components: [row]})
    const filter = (interaction) => interaction.customId === 's1' && interaction.user.id === message.author.id;
message.channel.awaitMessageComponent({ filter, time: 15000 })
  .then(async interaction =>{
    interaction.reply({embeds : [{
      "title": "مخالفة جديدة",
      "description": `**العميل : ${member}| \n    \nالمبلغ : ${interaction.values[0].split("_")[0]} | \n    \nتم إعطائه مخالفة بواسطة : ${message.member}| \n    \nسبب المخالفة : ${ob[interaction.values[0].split("_")[1]].name} | 📃**`,
      "color": 5131340
    }]})
    member.send({embeds : [{
      "title": "مخالفة جديدة",
      "description": `**العميل : ${member}| \n    \nالمبلغ : ${interaction.values[0].split("_")[0]} | \n    \nتم إعطائه مخالفة بواسطة : ${message.member}| \n    \nسبب المخالفة : ${ob[interaction.values[0].split("_")[1]].name} | 📃**`,
      "color": 5131340
    }]}).catch(console.log)
    bankac.bank -= parseInt(interaction.values[0].split("_")[0])
    await bankac.save()
      let d = new history({
    user : member.id,
    reason : ob[interaction.values[0].split("_")[1]].name
  })
  await d.save()
  })
  .catch(console.error);

  }
}