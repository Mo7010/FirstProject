const { Client, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A3lameCommand extends BaseCommand {
  constructor() {
    super('طلب', 'sub', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
 async run(client, message, args) {
          function sendEmbed(text,message){
    message.channel.send({embeds :[new Discord.EmbedBuilder()
          .setColor("White")
          .setDescription(text)
			.setThumbnail(client.user.displayAvatarURL())]})
}
  let filter = (m) => m.author.id == message.author.id
  let q1 = await message.reply({content :"أسمك ؟"})
  let a1 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a1.first()) return
  let capId = a1.first()
  capId.delete()
  await q1.delete()
  let q2 = await message.reply({content :"رتبتك العسكرية ؟ "})
  let a2 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a2.first()) return
  let cocapId = a2.first()
  cocapId.delete()
  await q2.delete()
  let q3 = await message.reply({content :"قطاعك ؟"})
  let a3 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a3.first()) return
  let time = a3.first()
  time.delete()
  await q3.delete()
  let q4 = await message.reply({content :"منشن العضو ؟"})
  let a4 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a4.first()) return
  let time3 = a4.first()
  time3.delete()
  await q4.delete()
     
       let q5 = await message.reply({content :"المبلغ ؟ "})
  let a5 = await message.channel.awaitMessages({filter:filter,max:1})
  if(!a5.first()) return
  let time5 = a5.first()
  time5.delete()
  await q5.delete()
     
let q6 = await message.reply({content :"السبب ؟ "})

  let a6 = await message.channel.awaitMessages({filter:filter,max:1})

  if(!a6.first()) return

  let time6 = a6.first()

  time6.delete()

  await q6.delete()


  message.channel.send({content :`

__**استبيان طلب شيك

أسمك  | ${capId}

رتبتك العسكرية| ${cocapId}

قطاعك  | ${time}

منشن العضو | ${time3}

المبلغ | ${time5}

السبب | ${time6}

ملاحظة : في حال التلاعب سيتم محاسبت الطرفين

<@&987375450256994395>**__
`})
message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
    message.channel.send({content : "لـ طلب شيك اكتب `-طلب` واجب على الاسئله التالية"})

  }
}