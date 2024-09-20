// @ts-nocheck
const { Client, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require("../../config");
const proDb = require('pro.db');
module.exports = class GameCommand extends BaseCommand {
  constructor() {
    super('قيم', 'fly', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.member?.roles.cache.has(config.fgRoleID) &&  message.author.id != "1168136920153464872") return message.reply({content:`:x: | لا تمتلك صلاحية لبدأ قيم`})
      if(message.channel.id != "1166195239044788274" && message.author.id != "1168136920153464872") return message.reply({content : `لاستخدام الامر الرجاء الذهاب الى : <#1166195239044788274>`})
    let filter = (m) => m.author.id == message.author.id
    let q1 = await message.reply({content :"ايدي كابتن الرحلة : "})
    let a1 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a1.first()) return
    let capId = a1.first()
    capId.delete()
    await q1.delete()
    let q2 = await message.reply({content :"ايدي مساعد كابتن الرحلة : "})
    let a2 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a2.first()) return
    let cocapId = a2.first()
    cocapId.delete()
    await q2.delete()
    let q3 = await message.reply({content :"وقت الرحلة: "})
    let a3 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a3.first()) return
    let time = a3.first()
    time.delete()
    await q3.delete()
    let q4 = await message.reply({content :"وقت الارسال: "})
    let a4 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a4.first()) return
    let stime = a4.first()
    stime.delete()
    await q4.delete()
     let q5 = await message.reply({content :"وقت الاقلاع: "})
    let a5 = await message.channel.awaitMessages({filter:filter,max:1})
    if(!a5.first()) return
    let atime = a5.first()
    atime.delete()
    await q5.delete()
    proDb.add("nnny",1)
    message.channel.send({
      content:`**__ إعـلان رحـلـة / 𝗚𝗢𝗔𝗧 𝗟𝗜𝗙𝗘.

 قائد الـرحـلـة | ${capId.content}

 ايـدي قائد الرحلة  | ${capId.content}

 ايدي مـسـاعـد الـرحـلـة | ${cocapId.content}

رقم الـرحـلـة | ${proDb.get("nnny")}

وقـت الـرحـلة | ${time.content}

وقـت الارسال | ${stime.content}

وقـت الاقــلاع | ${atime.content}

[اذا التصويت اقل من ال 𝟣𝟢 يلتغي القيم ]


__**
@everyone
`
    })
    message.channel.send({content: ""})
  }
}