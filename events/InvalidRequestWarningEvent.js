// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-invalidRequestWarning
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class InvalidRequestWarningEvent extends BaseEvent {
  constructor() {
    super('invalidRequestWarning');
  }

  async run(client, invalidRequestWarningData) {
    console.log(invalidRequestWarningData);
  }
}
  