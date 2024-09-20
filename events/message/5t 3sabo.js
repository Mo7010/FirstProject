const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('messageCreate');
  }
  
  async run(client, message) {
    if(message.content == "د"){
      if(!message.member.roles.cache.has("1143925743454261390") && message.author.id != client.user.id) return
      message.delete()
      message.channel.send({content : "﷽\n\n\n\nتم تعيين<@1104325758572314634> برتبة وزير المالية سألين المولى التوفيق والنجاح \n\n\n <@&1143242327192764527>"})
      return
  }
    
  }
}