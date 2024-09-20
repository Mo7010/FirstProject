const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('messageCreate');
  }

  async run(client, message) {
    if (message.content === "-ارسال") {
      if (!message.member.roles.cache.has("1053317581043404871") && message.author.id !== client.user.id) return;
      message.delete();
      message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      message.channel.send({
        content: `**
\` # \` تم وصول طائرة وندر سيتي الجوية ✈️ ,

\` # \` الرجاء من حجز تذكرة الركوب للطائرة تم فتح أبواب الطائرة من قبل ,

\` # \` نرجو من الجميع الانتباه وعدم ازعاج الهوست وقراءة: <#1041042263263948961>

\` # \` لتجنب المشاكل والتحذيرات وشكراً لكم

-
~~ <@&1039273369696223273> ~~
**
 `});
      message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      return;
    }

    if (message.content === "-تصويت") {
      if (!message.member.roles.cache.has("1122984428361240577") && message.author.id !== client.user.id) return;
      message.delete();
      message.channel.send({content: "https://cdn.discordapp.com/attachments/1122985187379257517/1143873381700223116/Picsart_23-08-21_15-04-09-300.png"})
      message.channel.send({
        content: `**
\` # \` تـم فـتـح شـراء تـذكـرة لـدولـة 
\` # \` \` Aeth 𝘾𝙞𝙩𝙮 | ايــتــش سـيـتـي \` \` # \`

\` # \` <#1122985591546585219> 
\` # \` <#1122985591546585219> 
\` # \` <#1122985591546585219> 

\` # \`مـن أراد ركـوب الـطـائـرة الـرجـاء شراء تـذكـرة والأسـتعداد للـرحلـة ومـراجـعـة جـميع القـوانـين 
-
~~ <@&1143242729380401275> ~~
**`
      });
      message.channel.send({content: "https://cdn.discordapp.com/attachments/1122985187379257517/1143873381700223116/Picsart_23-08-21_15-04-09-300.png"})
      return;
    }

if (message.content === "-تم") {
  if (!message.member.roles.cache.has("1053317581043404871") && message.author.id !== client.user.id) return;
  message.delete();
  message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
  message.channel.send({
    content: `**
\` # \`تم فحص جميع الركاب بنجاح ✅

\` # \` يرجى الأن كتابة لبدء القيم :   \` -بدء \`
-
\` الاداري: \`  ${message.author}
**
`
  });
  message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
  return;
}


    if (message.content === "-بدء") {
      if (!message.member.roles.cache.has("1053317581043404871") && message.author.id !== client.user.id) return;
      message.delete();
      message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      message.channel.send({
        content: `**
\` # \` تم فحص جميع ركاب الطائرة للمطار الدولي وتم حجز جميع التذاكر ✅ نرجو من الجميع الانتباه وربط الاحزمة وقراءة :

\` # \` <#1041042263263948961>
    
\` # \` لتجنب المشاكل والتحذيرات وشكراً لكم
-
~~ <@&1039273369696223273> ~~
**`
      });
      message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      return;
    }

    if (message.content === "-تجوين") {
      if (!message.member.roles.cache.has("1053317581043404871") && message.author.id !== client.user.id) return;
      message.delete();
      message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      message.channel.send({
        content: `**
\` # \` يرجى من جميع المواطنين المشترين تذاكر التجوين علي ${message.author} , نرجو من الجميع الانتباه وربط الاحزمة وقراءة :

\` # \` <#1041042263263948961>
    
\` # \` لتجنب المشاكل والتحذيرات وشكراً لكم
-
~~ <@&1039273369696223273> ~~
**`
      });
      message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      return;
    }

    if (message.content === "ق" || message.content === "قفل") {
      if (!message.member.roles.cache.has("1053317581043404871") && message.author.id !== client.user.id) return;
      message.delete();
message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      message.channel.send({
        content: `**
تـم اغـلاق الـشـات  <a:pp643:967627080995070014> 

{ ويـرجـى مـن جـمـيـع مـن لـديـهـم الـصـلاحـيـات عـدم الـكـتابـة بـدون سـبـب حـتى لايـتـم مـعـاقـبـتـهـم وشـكـراً لـكــم <a:pp643:967627080995070014> }


\` # \`  تم قفل الشات من قِبل الاداري:
${message.author}
**`
       });
 message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})

      return;
    }

        if (message.content === "ف" || message.content === "ففل") {
      if (!message.member.roles.cache.has("1053317581043404871") && message.author.id !== client.user.id) return;
      message.delete();
message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      message.channel.send({
        content: `**
تـم فتـح الـشـات ✅

{ ويـرجـى مـن جـمـيـع المـواطـنيـن الاحـتـرام والـتقـديـر المـتـبـادل وعـدم المـشاكل والـحـقـد والـعـنـصـريـة نـحن عـائـلـة مـش مـجـرد سـيـرفـر ✅ }

\` # \`  تم فتح الشات من قِبل الاداري:
${message.author}
**`
       });
 message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})

      return;
    }

    if (message.content === "اوامر الاداره" || message.content === "اوامر الادارة") {
      if (!message.member.roles.cache.has("1053317581043404871") && message.author.id !== client.user.id) return;
message.reply(`**

\` # \`
 اوامر <@&987310088681299999>
\` # \`


\` -تصويت \`
_اول ما تنزل قيم اكتب هذا مره وحده فقط في <#1080508937935274104>_


\` -ارسال \`
_اول ما يجي موعد التجوين نزل هذا الامر مره وحده فقط في <#1080508937935274104>_


\` -تجوين \`
_وبعديها بخمس دقايق تكون فتحت الماب وظبط كل شي نزل هذا الامر مره وحده فقط في <#1080508937935274104>_


\` -تم \`
_استخدم هذا الامر قبل ان تبدا القيم في <#1080444463387787364>_


\` -بدء \`
_هذا الامر استخدمه في <#1080444388834033694> وبعديها تبدا القيم_


\` القوانين \`
_لارسال قوانين القيم _


\` قفل ، ق  \`
_لقفل الروم وارسال رسالة القفل_

-

 \` ملاحظة \`:   الاوامر كلها تستخدم مره وحده فقط 

-

\` امر من: \`
${message.author}

**
~~ <@&987310088681299999>  ~~

`
       );
 message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})

      
      return;
    }  
    
    if (message.content === "القوانين") {
      if (!message.member.roles.cache.has("1053317581043404871") && message.author.id !== client.user.id) return;
      message.delete();
message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      message.channel.send({
        content: `**
# السلام عليكم ورحمة الله وبركاته #

__ منورين سيرفر وندر سيتي حياكم الله __

\` 1- \` اول شي اتمنى الجميع يراجع القوانين

\` 2- \` اول 10 ثواني لاحد يتحرك

\` 3- \` اول 10 دقايق ممنوع تروح المركز

\` 4- \` تروح كراج توقف عند سياره توقف وما تتحرك اذا تحركت راح تأخذ تحذير اول

\` 5- \` ممنوع اي عصابه اول 10 دقايق يسوي حاله اجراميه

\` 6- \` ممنوع اي مواطن ياخذ سياره عسكري تحذير اول

\` 7- \` اي عسكري ياخذ سيارة مواطن تحذير اول و تنزيل رتبه

\` 8- \` ممنوع التدخل الخارجي 

__ رحلة جميلة انشاء الله __
~~ # <@&1039273369696223273> # ~~
**`
      });
message.channel.send({content: "https://media.discordapp.net/attachments/1064519307679244299/1100857369287733338/29_.png"})
      return;
    }

    if (message.author.bot) return;
  }
};
