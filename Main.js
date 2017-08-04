const Discord = require('discord.js');
const client = new Discord.Client();
Game Playing = new Game(gameName, GameType.Default, "say jeff");

client.on('ready', () => {
  console.log('I am ready!');
});
string gameName = "yourGame";
discordClient.SetGame(Playing);

client.on('message', message => {
  if (message.content === 'jeff') {
    message.channel.sendMessage('My name is Jeff!');
  }
});

client.login(process.env.TOKEN);
