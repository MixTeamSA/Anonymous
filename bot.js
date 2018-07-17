const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "ar";
client.on('message', message => {
    var prefix = "ar";

      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 279701627902885908) return;


    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '279701627902885908') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else


    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '279701627902885908') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/HP");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else

    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '279701627902885908') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else

    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '279701627902885908') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    }



     });



client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
