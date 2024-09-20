// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
let bank = require("../../models/bank")
const s = require("../../config");
const { logChannel } = require('../../config');
module.exports = class AccCommand extends BaseCommand {
  constructor() {
    super('حساب', 'roles', []);
  }
  /**
   * 
   * @param {Discord.Client} client 
   * @param {Discord.Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.role)) return message.reply({content : "لاتمتلك صلاحية استخدام هذا الامر"})
    if (!message.mentions.members.first()) return message.reply({content : "منشن عضو"})
    let mem = message.mentions?.members?.first();
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
      amount: 2500,
      createdAt: Date.now()
    })
    await data.save()
      message.guild?.channels.cache.find(x=>x.id == "1122985190499823797").send({
          content : `
تم انشاء حساب
بواسطة الادمن : ${message.member}
للعضو : ${mem}`
        })
  }
}