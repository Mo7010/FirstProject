const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('messageCreate');
  }
  
  async run(client, message) {
    if(message.content == "خط"){
      if(!message.member.roles.cache.has("1122984417867079700") && message.author.id != client.user.id) return
      message.delete()
      message.channel.send({content : "https://cdn.discordapp.com/attachments/1122985187379257517/1143873381700223116/Picsart_23-08-21_15-04-09-300.png"})
      return
  }
    if (message.author.bot) return;

    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}