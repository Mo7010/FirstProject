const { Client, Message, EmbedBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const points = require('../../models/points');

module.exports = class NeqateCommand extends BaseCommand {
  constructor() {
    super('نقاطي', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.member?.roles.cache.has("1168136920153464872")) return
    let member = message.mentions.members?.first() || message.member;
    let data = await points.findOne({user : member.id})
    if(!data) return message.reply({embeds :[new EmbedBuilder()
      .setTitle("كشف نقاط")
      .setColor("Random")
      .setFooter({iconURL : client.user?.displayAvatarURL(),text: client.user?.username})
      .setTimestamp()
      .setDescription(`
  __**نقاط الإداري ${member}
  
  التكتات | 0
      
  التفعيل | 0
      
  الاضافية | 0
  
  الاجمالي | 0
  **__
  `)]})
    let mebed = new EmbedBuilder()
    .setTitle("كشف نقاط")
    .setColor("Random")
    .setFooter({iconURL : client.user?.displayAvatarURL(),text: client.user?.username})
    .setTimestamp()
    .setDescription(`
__**نقاط الإداري ${member}

التكتات | ${data.ticket}
    
التفعيل | ${data.tafeel}

الاضافية | ${data.plus}

الاجمالي | ${data.ticket + data.tafeel + data.game + data.join + data.gms + data.plus}

**__
`)
message.reply({embeds : [mebed]})
  }
}