//discord bot
const Discord = require('discord.js');
const bot = new Discord.Client();
const screenshot = require('desktop-screenshot');
const private = require('./private');
const authorid = private.authorid;
const token= private.token;
bot.on('ready', () => {
    console.log('Booting up!');
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
        console.log('Ready!');
    bot.users.find('id',authorid).send('Your pc is now on! \n' + new Date().toString());
    });
});
bot.on('message', msg => {
    if (msg.author.id !== authorid){
        return ;
    }
    if(msg.content.toString().toUpperCase() === 'SHOT'){
        screenshot("snapshot.png", function(error, complete) {
    if(error)
        msg.channel.send("Screenshot failed");
    else
        msg.channel.send("Screenshot succeeded", {
            files: [
                "./snapshot.png"
            ]
        });
});
    }
//    console.log(msg.author.username + "-> " +  msg.content);
});
bot.login(token);