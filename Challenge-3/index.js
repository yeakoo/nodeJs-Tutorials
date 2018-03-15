const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
const Twitter = require('twitter');

const T = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

const getFollowers = ({guild, channel}, arg, name) => {
  T.get('users/show', {screen_name: name}, (error, {followers_count}, response) => {
    if (!error) {
      let followers = followers_count;
      let members = guild.memberCount;
      let ms = "```\n";
      ms += `Using @${name} Twitter account\n`;
      ms += `${followers} / ${members} = ${Math.round(followers / members)}\n`;
      ms += `${Math.round(followers / members)} / ${arg} = ${Math.round(Math.round(followers / members) / arg)}\n`;
      channel.send(`${ms}\`\`\``);
    } else { 
       channel.send(error[0].message);
    }
  });
}

client.on('ready', () => {
  console.log(`I'm fucking ready... name is ${client.user.username}`);
});

client.on('message', msg => {
  let arg = (msg.content.split(" ")[2] != undefined && !isNaN(msg.content.split(" ")[2])) ? msg.content.split(" ")[2] : 50;
  let name = (msg.content.split(" ")[1] != undefined) ? msg.content.split(" ")[1] : "brawlhalla";
  if (msg.content.toLowerCase().startsWith('--hi')) getFollowers(msg, arg, name);
});
client.login('TOKEN');
