const Discord = require('discord.js');
const client = new Discord.Client();
const Playing = "say jeff";

client.on('ready', () => {
  console.log('I am ready!');
});

bot.user.setGame('GAME HERE');

client.on('message', message => {
  if (message.content === 'jeff') {
    message.channel.sendMessage('My name is Jeff!');
  }
});

client.login(process.env.TOKEN);
