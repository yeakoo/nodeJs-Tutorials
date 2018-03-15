const Discord = require('discord.js');
const client = new Discord.Client();

const getImg = ({members}, letter) => {
    const images = members.filter(({user}) => {
        return user.username[0].toLowerCase() === letter.toLowerCase();
    });
    return images;
}

client.on('ready', () => { console.log(`I'm fucking ready... name is ${client.user.username}`); });

client.on('message', ({content, guild, channel}) => {
    if (content.toLowerCase().startsWith('--getimg')) {
        let arg = (content.split(" ")[1]) ? content.split(" ")[1] : "y";
        let img = getImg(guild, arg);
        img.forEach(user => {
            if (user.user.avatarURL != undefined) {
                channel.send(`User: \`\`${user.user.username}\`\``, {
                    embed: {
                        thumbnail: {
                            url: user.user.avatarURL
                        }
                    }
                });
            }
            else {
                channel.send(`\`\`No profile picture found for ${user.user.username}\`\``)
            }
        });
    }
});
client.login('TOKEN');