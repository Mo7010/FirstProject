const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('messageCreate');
  }
  
  async run(client, message) {
    if(message.content == "="){
      if(!message.member.roles.cache.has("1122984258353516605") && message.author.id != client.user.id) return
      message.delete()
      message.channel.send({content : "**__السلام عليكم\n\nنعتذر منكم أعزائي @⇁ ✥ كـبـار ايـتش ║—‏ 𖤐 هناك مشكلة في استضافة البوت واحتمال يتعطل لفترات ممكن من ساعة الا نص ساعة وهكذا راح نبذل قصارى جهدنا ليتم حل هذه المشكلة وشكرا__**"})
      return
  }
    if (message.author.bot) return;

  
  }
}