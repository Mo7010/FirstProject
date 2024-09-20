// @ts-nocheck
const { Client, Message, EmbedBuilder } = require('discord.js');
const bank = require('../../models/bank');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class balCommand extends BaseCommand {
  constructor() {
    super('فلوسي', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(message.channel.id != "1166195329700483152") return message.reply({content : "الرجاء الذهاب الى روم : <#1166195329700483152>"})
      let member = message.mentions.members.first() || message.member
      let data = await bank.findOne({user: member.id})
    if(!data) return message.reply({content: "انت لا تمتلك حساب بنكي"})
    let embe = new EmbedBuilder()
    .setColor("DarkOrange")
    .setThumbnail(client.user?.avatarURL())
    .setTimestamp()
    .setDescription(`__**مصرف الراجحي | 

العميل : ${member} | 

رصيدك في البنك : ${data.bank} | 

رصيدك في الكاش :  ${data.amount} | 

مجموع رصيدك : ${data.amount + data.bank} |  **__`)
.setFooter({
  text : message.guild.name,
  iconURL : message.guild.iconURL()
})
    message.reply({
      embeds : [embe]
    })
  }
}