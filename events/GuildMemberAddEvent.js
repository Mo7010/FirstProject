// @ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const { Client, GuildMember } = require('discord.js');
const jail = require('../models/jail');
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  /**
   * 
   * @param {Client} client 
   * @param {GuildMember} member 
   */
  async run(client, member) {
    let data = await jail.findOne({ user: member.id })
    if (!data) return
    member.roles?.cache?.forEach(role=>{
      if(role.id == member.guild.id) return
      member.roles.remove(role.id)
    })
    member.setNickname(data.reason)
    member.roles.add(require("../config").blackListRoleId)
  }
}