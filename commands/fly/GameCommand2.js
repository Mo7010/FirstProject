// @ts-nocheck
const { Client, Message, MessageActionRow, MessageButton } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require("../../config");

module.exports = class GameCommand extends BaseCommand {
  constructor() {
    super('', 'fly', []);
  }

  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if (!message.member?.roles.cache.has(config.fgRoleID) && message.author.id !== "227889974689660929") {
      return message.reply(":x: | لا تمتلك صلاحية لبدأ قيم");
    }

    if (message.channel.id !== "1110235648339738755" && message.author.id !== "227889974689660929") {
      return message.reply("لاستخدام الامر الرجاء الذهاب الى : <#1110235648339738755>");
    }

    const filter = (msg) => msg.author.id === message.author.id;

    let q, q2, q1;

    message.reply("**الرجاء اكتب ايديك**").then((msg) => {
      msg.channel
        .awaitMessages({ filter: filter, max: 1 })
        .then((clt) => {
          const collected = clt.first();
          collected.delete();
          q = collected.content;

          msg.edit("**الرجاء اكتب مساعد الهوست (اذا وجد)**").then(async (msg) => {
            msg.channel.awaitMessages({ filter: filter, max: 1 }).then(async (clt) => {
              const collected = clt.first();
              collected.delete();
              q2 = collected.content;

              msg.edit("**الرجاء اكتب توقيت القيم**").then(async (msg) => {
                msg.channel.awaitMessages({ filter: filter, max: 1 }).then(async (clt) => {
                  const collected = clt.first();
                  collected.delete();
                  q1 = collected.content;
                  let channel = message.guild.channels.cache.get("1110235648339738755");
                  msg.edit(`تم إرسال التصويت في: <#${channel.id}>`);
                  channel.send({
                    content: `**\`-\` ايـدي الـهـوسـت 「 ${q} 」\n\`-\` ايـدي الـمـساعد اذا وجـد「 ${q2} 」\n\`-\` وقـت ارسـال الـدعـوات:「 ${q1} 」\n\`-\` وقـت الاقـلاع 「 لايوجد وقت محدد 」\n\`-\` الـعـدد الـمـطـلـوب「 +10 」\n\`# -\` مـلاحـظه اذا وصـل الـعـدد ( 10 ) وفـوق راح نفتح قيم واذا لم يوصل العدد اكثر من 10 سوف يغلق القيم ..\nFor : @everyone ||**`,
                    components: [
                      new MessageActionRow().addComponents(
                        new MessageButton().setCustomId('pol').setLabel(`0`).setEmoji(`994638956597624884`).setStyle('PRIMARY'),
                        new MessageButton().setCustomId(`mot`).setLabel(`0`).setEmoji(`994639028651577404`).setStyle('PRIMARY'),
                        new MessageButton().setCustomId(`confirm`).setDisabled(true).setLabel(`0`).setEmoji(`983633132429410335`).setStyle('PRIMARY'),
                        new MessageButton().setCustomId("3dd").setLabel(`الركاب`).setStyle('PRIMARY')
                      )
                    ]
                  });
                });
              });
            });
          });
        });
    });
  }
};