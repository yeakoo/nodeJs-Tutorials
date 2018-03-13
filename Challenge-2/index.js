const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('Bot_Token_Here');

bot.on('ready', () => {
   console.log("Hi, I'm a bot.");
});
app.get('/', function(req, res) {
    let send = bot.guilds.get('419281558453747722');
    res.render("index", { guild: send });
})

app.listen(8080);
