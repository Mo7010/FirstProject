// @ts-nocheck
const { Client, Message, EmbedBuilder } = require('discord.js');
const { blackListAdmin, blackListRoleId, blackListlogChannel } = require('../../config');
const BaseCommand = require('../../utils/structures/BaseCommand');
const jail = require("../../models/jail")
module.exports = class Mo5alefCommand extends BaseCommand {
  constructor() {
    super('مخالف', 'roles', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if (!message.member.roles.cache.has(blackListAdmin)) return
    if (!message.mentions.members.first()) return message.reply(":x: | منشن عضو")
    if (!args[1]) return message.reply(":x: | حدد سبب")
    let member = message.mentions.members.first()
    member.setNickname(args[1])
    member.roles.cache.forEach(async x => {
      if(x.id == member.guild.id) return
      await member.roles.remove(x.id)
    })
    await member.roles.add(blackListRoleId)
    client.channels.cache.find(x => x.id == blackListlogChannel).send({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setTimestamp()
          .setFooter({
            text: member.guild.name,
            iconURL: member.guild.iconURL()
          })
          .setDescription(`
لقد قام الادمن : ${message.member}
بسجن العضو : ${member}
بسبب : ${args[1]}
في تاريخ : <t:${Math.floor(Date.now() / 1000)}:R>`)
      ]
    })
    ////
    await jail.findOneAndDelete({ user: member.id })
    let data = new jail({
      user: member.id,
      reason : args[1]
    })
    await data.save()
    message.reply({
      content: `تم سجن العضو بنجاح `
    })
  }
}