const { Client, Message,EmbedBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A3lameCommand extends BaseCommand {
  constructor() {
    super('', 'sub', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
 async run(client, message, args) {
          function sendEmbed(text,message){
    message.channel.send({embeds :[new EmbedBuilder()
          .setColor("White")
          .setDescription(text)
			.setThumbnail(client.user.displayAvatarURL())]})
}
  let filter = (m) => m.author.id == message.author.id
  let q1 = await message.reply({content :"اسمك ؟"})
  let a1 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a1.first()) return
  let capId = a1.first()
  capId.delete()
  await q1.delete()
  let q2 = await message.reply({content :"عمرك ؟ "})
  let a2 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a2.first()) return
  let cocapId = a2.first()
  cocapId.delete()
  await q2.delete()
  let q3 = await message.reply({content :"خبراتك في وزارة العدل ؟"})
  let a3 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a3.first()) return
  let time = a3.first()
  time.delete()
  await q3.delete()
  let q4 = await message.reply({content :"ماذا سوف تقدم لي دولة GOAT Cita ؟"})
  let a4 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a4.first()) return
  let time3 = a4.first()
  time3.delete()
  await q4.delete()
     
       let q5 = await message.reply({content :"سوف تحكم في العدل ؟"})
  let a5 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a5.first()) return
  let time5 = a5.first()
  time5.delete()
  await q5.delete()
            let q6 = await message.reply({content :"قاضي,محامي ؟"})
  let a6 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a6.first()) return
  let time6 = a6.first()
  time6.delete()
  await q6.delete()
  sendEmbed(`__**اسمك | ${capId}

عمرك | ${cocapId}
  
خبراتك في وزارة العدل |  ${time}
  
ماذا سوف تقدم لي دولة GOAT Cita |  ${time3}
  
سوف تحكم في العدل | ${time5}

قاضي ، محامي |  ${time6}
انتظر القبول من 



**__`,message)
message.channel.send({content: ""})
message.channel.send({content : "لـ تقديم على العدل اكتب `-العدل` واجب على الاسئله التالية"})
  }
}