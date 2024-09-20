// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
let bank = require("../../models/bank")
const s = require("../../config");
const { logChannel } = require('../../config');
const points = require('../../models/points');
module.exports = class Taf3rlCommand extends BaseCommand {
  constructor() {
    super('تفعيل', 'roles', []);
  }
  /**
   * 
   * @param {Discord.Client} client 
   * @param {Discord.Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.role) && message.author.id != "1166193495527137340") return message.reply({content : "لاتمتلك صلاحية استخدام هذا الامر"})
      if(message.channel.id != "1166195354119700480" && message.author.id != "1168136920153464872") return message.reply({content : `لاستخدام الامر الرجاء الذهاب الى :  الروم<#1166195354119700480>`})
    let deleteRoles = s.deleteRoles
    let addRoles = s.addRoles
    if (!message.mentions.members.first()) return message.reply({content : "منشن عضو"})
    if (!args[1]) return message.reply({content : "ايدي؟"})
    let mem = message.mentions?.members?.first();
    let ID = args[1]
    mem?.setNickname(ID)
    deleteRoles.forEach(x => {
      mem.roles.remove(x)
    })
    addRoles.forEach(x => {
      mem.roles.add(x)
    })

    message.guild.channels.cache.find(c=>c.id == logChannel).send({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor("Green")
          .setTimestamp()
          .setFooter({
            text: message.guild.name,
            iconURL: message.guild.iconURL()
          })
          .setTitle("تفعيل عضو")
          .setDescription(`
 | تم تفعيل العضو : ${mem}
 | في الساعة : <t:${Math.floor(Date.now() / 1000)}:R>
 | بواسطة الاداري : ${message.member}
 | الايدي : ${ID}`)
      ]
    })

    message.channel.send({
      content: `__**– عـزيـزي الإداري .${message.member}

 - تـم تـفـعـيـل الـعـضـو بـنـجـاح .

- الـعـضـو : ${mem} .

 - ( وشـكـرآ لـك )**__`
    })
    let x = {
      "title": "مصرف الراجحي",
      "description": `** || عزيزي المواطن : ${mem} **\n\n**__تم تفعيل حسابك البنكي بنجاح __ **\n\n**وزارة المالية**`
    }
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor("White")
          .setTitle(x.title)
          .setDescription(x.description)
          .setFooter({
            text: `Bank Al-Rajihi`,
            iconURL: client.user.avatarURL()
          })
      ]
    })
    let check = await bank.findOne({ user: mem.id })
    if (check) return
    let data = new bank({
      user: mem.id,
      amount: 5000,
      createdAt: Date.now()
    })
    await data.save()
    mem.send({
      content : `
 **|| عزيزي المواطن : ${mem} **
       
**__تم إيداع ( 5000 ) لحسابك البنكي __**
      
 **|| وزارة الـمـالـيـة **`
    }).catch(null)
    async function addPoints(id){
      let data = await points.findOne({user : id})
      if(!data) data = new points({user : id})
      data.tafeel +=1;
      await data.save()
    }
    await addPoints(message.member.id)
    client.channels.cache.get("1122985190499823797").send({
      embeds : [
        new Discord.EmbedBuilder()
        .setColor("Random")
        .setTimestamp()
        .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
        .setDescription(`
تم اضافه نقاط

الإداري : ${message.member}
        
السبب : تفعيل عضو
`)
      ]
    })
  }
}