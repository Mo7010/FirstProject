// @ts-nocheck
const BaseEvent = require('../../utils/structures/BaseEvent');
const cron = require('cron').CronJob;
const roles = require("../../roateb");
const { Client } = require('discord.js');
const bank = require("../../models/bank")
const { guildId, roatebId } = require('../../config');
module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('راتب');
  }
  /**
   * 
   * @param {Client} client 
   */
  async run (client) {
      client.user.setPresence({
  activities: [{ name: ` 𝗖𝗜𝗧𝗬`, type:0 }],
  status: 'streaming',
});
    console.log(client.user.tag + ' has logged in.');
    let job = new cron("0 0 * * 5",async ()=>{
      let keys = Object.keys(roles)
      keys.forEach(async (key,ii) =>{
       setTimeout(async ()=>{
        let guild = await client.guilds.cache.find(x=>x.id == guildId)
        let role = await guild?.roles.fetch(key)
        let amount = roles[key]
                 let vals = Array.from(role?.members.values());
   
        vals.forEach(async (m,i)=>{
          setTimeout(async ()=>{
              let data = await bank.findOne({user: m.id})
          if(!data) data = new bank({user:m.id,amount:0,createdAt:Date.now()})
          data.bank += amount
          await data.save()
            console.log(m.user.tag)
          },i*2000)
        })
        guild?.channels.cache.find(x=>x.id == roatebId).send({
          content : `__**مصرف الراجحي | <:emoji_215:1073167524750962809>**__

__**تم إيداع الراتب : ${amount} | <:pp889:1069608352096735343>**__
          
__** الرتبة : ${role}| <:WONDERCITY:1079589268319645716>**__`
        })
          
          guild?.channels.cache.find(x=>x.id == "1080448527769022464").send({
          content : `__**مصرف الراجحي | <:emoji_215:1073167524750962809>**__

__**تم إيداع الراتب :${amount}  | <:pp889:1069608352096735343>**__
          
__** الرتبة : ${role}| <:WONDERCITY:1079589268319645716>**__`
        })
       
      },ii*10000)
    })
    },
    null,
    true,
    'Asia/Riyadh')
  }
}