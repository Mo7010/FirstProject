const { Client, Message, EmbedBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const points = require('../../models/points');

module.exports = class AdafaCommand extends BaseCommand {
  constructor() {
    super('نقطه', 'eco', []);
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
    if(!args[1]) return
    if(isNaN(args[1])) return
    async function addPoints(id,am){
      let data = await points.findOne({user : id})
      if(!data) data = new points({user : id})
      data.plus +=am;
      await data.save()
    }
    await addPoints(member.id,parseInt(args[1]))
    message.reply({content : " | تمت اضافة النقاط الادارية بنجاح"})
    client.channels.cache.get("1133733685531791480").send({
      embeds : [
        new EmbedBuilder()
        .setColor("Random")
        .setTimestamp()
        .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
        .setDescription(`
تم اضافه نقاط

الإداري : ${member}
        
السبب : اضافة من اونر
`)
      ]
    })
  }
}