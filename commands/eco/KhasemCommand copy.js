const { Client, Message, EmbedBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const points = require('../../models/points');

module.exports = class KhasemCommand extends BaseCommand {
  constructor() {
    super('خصم-الكل', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(message.author.id != "1166193339914272882") return
    await points.deleteMany()
    message.reply({content : ":white_check_mark: | تم تصفير الكل بنجاح"})
    client.channels.cache.get("1133733685531791480").send({
      embeds : [
        new EmbedBuilder()
        .setColor("Random")
        .setTimestamp()
        .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
        .setDescription(`
تم خصم نقاط

الإداري : الجميع
        
السبب : تصفير الكل
`)
      ]
    })
  }
}