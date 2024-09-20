const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('messageCreate');
  }
  
  async run(client, message) {
    if(message.content == "خط الادارة"){
      if(!message.member.roles.cache.has("987310271087394857") && message.author.id != client.user.id) return
      message.delete()
      message.channel.send({content : "https://media.discordapp.net/attachments/1064519307679244299/1100983252463915118/149.png"})
      return
  }
    if (message.author.bot) return;

   
  }
}