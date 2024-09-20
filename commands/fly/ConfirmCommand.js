const { Client, Message, EmbedBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require("../../config");
const proDb = require('pro.db');
const points = require('../../models/points');
module.exports = class ConfirmCommand extends BaseCommand {
  constructor() {
    super('تاكيد', 'fly', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    
    if(!message.member?.roles.cache.has(config.fgRoleID) &&  message.author.id != "1168136920153464872") return message.reply({content:`:x: | لا تمتلك صلاحية لتأكيد قيم`})
      if(message.channel.id != "1166195244669349899" && message.author.id != "1168136920153464872") return message.reply({content : `لاستخدام الامر الرجاء الذهاب الى : <#1166195244669349899>`})
    let filter = (m) => m.author.id == message.author.id
    let q1 = await message.reply({content :"موعد الرحلة : "})
    let a1 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a1.first()) return
    let capId = a1.first()
    capId.delete()
    await q1.delete()
    let q2 = await message.reply({content :"موعد انتهى الرحلة : "})
    let a2 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a2.first()) return
    let cocapId = a2.first()
    cocapId.delete()
    await q2.delete()
    let q3 = await message.reply({content :"قائد الرحلة: "})
    let a3 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a3.first()) return
    let time = a3.first()
    time.delete()
    await q3.delete()
    let q4 = await message.reply({content :"مساعد قائد الرحلة : "})
    let a4 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a4.first()) return
    let stime = a4.first()
    stime.delete()
    await q4.delete()
     let q5 = await message.reply({content :"الرقابة : "})
    let a5 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a5.first()) return
    let atime = a5.first()
    atime.delete()
    await q5.delete()
    let q6 = await message.reply({content :"طاقم المساعدة : "})
    let a6 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a6.first()) return
    let ftime = a6.first()
    ftime.delete()
    await q6.delete()
    message.channel.send({
      content:`**__
تـأكيـد إقـلاع طـائرة لـمـديـنـه | 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘.

موعد الرحلة| ${capId}

موعد انتهى الرحلة | ${cocapId}
      
قائد الرحلة | ${time}
      
مساعد قائد الرحلة | ${stime}
      
الرقابة | ${atime}
      
رقم الرحلة| ${proDb.get("nnny")}
      
طاقم المساعدة | ${ftime}

مـلاحـظات مـهـمة 

1 - فـي حـال مـواجهـتك لمـشكلة قـم بالأتـصال بالطاقم

2 - فـي حـال واجـهة مخـرب أو مـخالف للرول بلاي عـدم إكـثار الكلام معه وإحضـار الأدلـة الـكـافـية وإرسـالها في 

3 - يرجـى مراجـعة القوانين لتجنـب مخـالفـتك

4 - عـدم الـتخريـب فـي حـال وجود مـخـرب وخروجـك من القـيم

نـرجـوا إسـتـمـتاعكم في دولـة 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘.
@everyone 
__**
`
    })
    message.channel.send({content: ""})
    async function addPoints(id,type){
      let data = await points.findOne({user : id})
      if(!data) data = new points({user : id})
      data[type] +=1;
      await data.save()
    }
    await addPoints(message.author.id,"game")
    await addPoints(atime?.mentions.members?.first()?.id,"gms")
    client.channels.cache.get("1133733685531791480").send({
      embeds : [
        new EmbedBuilder()
        .setColor("Random")
        .setTimestamp()
        .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
        .setDescription(`
تم اضافه نقاط

الإداري : ${message.member}
        
السبب : فتح قيم
`)
      ]
    })
    client.channels.cache.get("1133733685531791480").send({
      embeds : [
        new EmbedBuilder()
        .setColor("Random")
        .setTimestamp()
        .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
        .setDescription(`
تم اضافه نقاط

الإداري : ${atime?.mentions.members?.first()}
        
السبب : رقابة قيم
`)
      ]
    })
  }
}