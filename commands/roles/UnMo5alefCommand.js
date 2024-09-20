// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client, Message, EmbedBuilder } = require('discord.js');
const { blackListAdmin, blackListRoleId, blackListlogChannel } = require('../../config');
const jail = require("../../models/jail")

module.exports = class UnMo5alefCommand extends BaseCommand {
  constructor() {
    super('فك', 'roles', []);
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
    let member = message.mentions.members.first()
    member.setNickname("")
      //
    await member.roles.remove(blackListRoleId)
      await member.roles.add("987310273528475648")
    client.channels.cache.find(x => x.id == blackListlogChannel).send({
      embeds: [
        new EmbedBuilder()
          .setColor("Green")
          .setTimestamp()
          .setFooter({
            text: member.guild.name,
            iconURL: member.guild.iconURL()
          })
          .setDescription(`
لقد قام الادمن : ${message.member}
بفك سجن العضو : ${member}
في تاريخ : <t:${Math.floor(Date.now() / 1000)}:R>`)
      ]
    })
    await jail.findOneAndDelete({ user: member.id })
    message.reply({
      content: `تم فك سجن العضو بنجاح `
    })
  }
}
