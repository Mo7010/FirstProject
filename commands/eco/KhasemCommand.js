const { Client, Message, EmbedBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const points = require('../../models/points');

module.exports = class KhasemCommand extends BaseCommand {
  constructor() {
    super('خصم-نقاط', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(message.author.id != "1166193339914272882") return
    let member = message.mentions.members?.first()
    if(!member) return
    await points.deleteOne({user : member.id})
    message.reply({content : " | تم تصفير الإداري بنجاح"})
    client.channels.cache.get("1133733685531791480").send({
      embeds : [
        new EmbedBuilder()
        .setColor("Random")
        .setTimestamp()
        .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
        .setDescription(`
تم تصفير نقاط

الإداري : ${member}
        
السبب : تصفير من اونر
`)
      ]
    })
  }
}