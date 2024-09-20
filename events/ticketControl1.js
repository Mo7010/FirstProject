// @ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { Client, EmbedBuilder } = require('discord.js');
const { adsRole } = require('../config');
const BaseEvent = require('../utils/structures/BaseEvent');
const points = require('../models/points');
module.exports = class InteractionCreateEvent extends BaseEvent {
  constructor() {
    super('interactionCreate');
  }
  /**
   * 
   * @param {Client} client 
   * @param {import('discord.js').Interaction} interaction 
   */
  async run(client, interaction) {
    if (!interaction.isButton()) return
    if (interaction.customId == "claim1") {
      if (!interaction.member.roles.cache.has(adsRole)) return
        if(await client.n38th.get(interaction.channelId)) return interaction.reply({content : "التكت مستلمة بالفعل",ephemeral : true})
      client.n38th.set(interaction.channelId,interaction.user.id)
      async function addPoints(id){
        let data = await points.findOne({user : id})
        if(!data) data = new points({user : id})
        data.ticket +=1;
        await data.save()
      }
      await addPoints(interaction.user.id)
      interaction.channel.permissionOverwrites.edit(interaction.user.id, {
        ViewChannel: true
      })

      interaction.channel.permissionOverwrites.edit(adsRole, {
        ViewChannel: false
      })
      interaction.reply({ content: "✅",ephemeral: true})
      interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor("EAE843")
            .setDescription(`**__ - مرحبآ بك عزيزي العضو  

 - تـم إسـتـلام تـذكـرتـك مـن قـبـل الإداري  : __** ${interaction.member}`)
            .setTimestamp()

        ]
      })
      client.channels.cache.get("1097438413713571901").send({
        embeds : [
          new EmbedBuilder()
          .setColor("Random")
          .setTimestamp()
          .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
          .setDescription(`
  تم اضافه نقاط
  
  الإداري : ${interaction.member}
          
  السبب : استلام تكت
  `)
        ]
      })
    }
    if (interaction.customId == "trk1") {
      if (!interaction.member.roles.cache.has(adsRole)) return
        if(!await client.n38th.get(interaction.channelId)) return interaction.reply({content : "التكت غير مستلمة",ephemeral : true})
      if(await client.n38th.get(interaction.channelId) != interaction.user.id) return interaction.reply({content : "لست مالك التكت",ephemeral : true})
            await client.n38th.delete(interaction.channelId)
      async function addPoints(id){
        let data = await points.findOne({user : id})
        if(!data) data = new points({user : id})
        data.ticket -=1;
        await data.save()
      }
      await addPoints(interaction.user.id)
      interaction.channel.permissionOverwrites.edit(adsRole, {
        ViewChannel: true
      })
                    interaction.channel.permissionOverwrites.edit(interaction.member.id, {
        ViewChannel: null
      })
      interaction.reply({ content: "✅" ,ephemeral: true})
                interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor("EAE843")
            .setDescription(`**__ - مرحبآ بك عزيزي العضو  


 - تـم ترك تـذكـرتـك مـن قـبـل الإداري  : __** ${interaction.member}`)
            .setTimestamp()

        ]
      })
      client.channels.cache.get("1097438413713571901").send({
        embeds : [
          new EmbedBuilder()
          .setColor("Random")
          .setTimestamp()
          .setFooter({iconURL : client.user?.displayAvatarURL(),text : client.user?.username})
          .setDescription(`
  تم خصم نقاط
  
  الإداري : ${interaction.member}
          
  السبب : ترك تكت
  `)
        ]
      })
    }
    if (interaction.customId == "delete1") {
      if (!interaction.member.roles.cache.has(adsRole)) return
      interaction.channel.delete()
    }
  }
}