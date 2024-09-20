const { ActionRowBuilder } = require('@discordjs/builders');
const { Client, Message, ButtonBuilder, ChannelFlagsBitField, EmbedBuilder } = require('discord.js');
const history = require('../../models/history');
const profile = require('../../models/profile');
const BaseCommand = require('../../utils/structures/BaseCommand');
module.exports = class HistoryCommand extends BaseCommand {
  constructor() {
    super('سجل', 'jails', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
  if(message.channel.id != "1122985715618304172") return
      if(!message.member?.roles.cache.has("1122984567981224017") &&  message.author.id != "489501373499572224") return
    let m = message.mentions.members?.first()
    if(!m) return message.reply({content :":x: | منشن عضو"})
    let d1 = await profile.findOne({user : m.id})
    let x = false
    if(!d1){
      x= true
      d1 = new profile({
        user : m.id,
        HalaJenea : "لايوجد",
        jailTimes : "0",
        Sawabek : "لايوجد",
        job : "عاطل عن العمل",
        fhess : 0
      })
    }
    let sisi = ``
    let d2= await history.find({user : m.id})
    if(!d2[0]) sisi = `لايوجد`
    else sisi = d2.map(x=>x.reason).join(",")
    let embed = new EmbedBuilder()
    .setColor("DarkRed")
    .setTitle(`السجل المدني للمواطن : ${m.user.tag}`)
    .setThumbnail(client.user?.displayAvatarURL())
    .setDescription(`
**السوابق الجنائية :** 
${d1.Sawabek}
**عدد مرات دخول السجن :** 
${d1.jailTimes}
**الحالة الجنائية :** 
${d1.HalaJenea}
**الوظيفة :** 
${d1.job}
**عدد رحلات السفر :**
${d1.fhess}
**المخالفات : **
${sisi}`)
if(x) await d1.save()
message.reply({embeds :[embed]}) 
  }
}