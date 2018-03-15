const Discord = require('discord.js');
const client = new Discord.Client();

const combine = ({guild}, x) => {
    let name = [];
    guild.members.forEach(({user}) => {
        if(user.bot) return;
        let letter = (user.username.split("")[x - 1]) ? user.username.split("")[x - 1] : "z";
        name.push(letter);
    });
    return name.join("");
}
client.on('ready', () => {
  console.log(`I'm fucking ready... name is ${client.user.username}`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase().startsWith('--combine')){
      let arg = (msg.content.split(" ")[1]) ? msg.content.split(" ")[1] : 1;
      msg.channel.send(combine(msg, arg));
  }
});
client.login('TOKEN');
