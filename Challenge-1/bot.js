const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`I'm fucking ready... name is ${client.user.username}`);
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === '--bot') msg.channel.send(`Yes ${msg.author.username}?`);
  if(msg.content.toLowerCase() === '--botmention') msg.channel.send(`Yes ${msg.author.toString()}?`);
});
client.login('TOKEN');
