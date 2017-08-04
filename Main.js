const Discord = require('discord.js');
const client = new Discord.Client();
const Playing = "say jeff";

client.on('ready', () => {
  console.log('I am ready!');
});

client.User.setGame(Playing);

client.on('message', message => {
  if (message.content === 'jeff') {
    message.channel.sendMessage('My name is Jeff!');
  }
});

client.login(process.env.TOKEN);
