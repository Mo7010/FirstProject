// @ts-nocheck
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('rols', 'ticket', []);
  }
  /**
   * 
   * @param {Discord.Client} client 
   * @param {Discord.Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender)) return
    message.channel.send({
      embeds: [
    {
      "title": "قيمة المخالفات في دولة ثري تاون",
      "description": "**تفحيط : __1000 ريال__\n\nسرعه عاليه : __100 ريال__\n\nالاصطدام بمركبه حكوميه : __250 ريال__ \n\nوقوف خاطئ : __250 ريال__\n\nازعاج السلطات : __500 ريال__\n\nهروب من الشرطه : __1000 ريال__ \n\nعكس سير : __1500 ريال__\n\nالاستهزاء برجل الأمن : __100 ريال__\n\nوقوف المركبة او تحركها فوق الرصيف : __1000 ريال__\n      \nتخريب الممتلكات العامة : __400 ريال__\n\nتضليل المركبة : __300 ريال__\n\nقطع الاشارة الضوئية : __2000 ريال__\n\nعدم وجود لوحة خلفية : __2500 ريال__\n\nتشوه بصري : __200 ريال__\n \nسوء استخدام منبه المركبة ( البوري) : __100 ريال__\n\nوضع تجاليد على المركبة : __150 ريال__\n\n وضع اشياء داخل المركبة تعيق رؤية السائق : __50 ريال__\n      \nعدم وجود هوية وطنية : __500 ريال__\n\nتعديل على هيكل المركبة : __250 ريال__\n\nرشوة موضف حكومي : __2000 ريال__\n\nالقيادة تحت تآثير مسكر : __1500 ريال__**",
      "color": 14013909
    }
  ]
    })
  }
}