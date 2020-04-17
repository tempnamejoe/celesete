const Discord = require('discord.js');
const bot = new Discord.Client();

const {token} = require('./config.json');

const PREFIX = '!';
//Channels 
var channel_generalID = '699325503437406251';
var user_BLATHERSID = '598007871720128544';
var serverID = '699325503437406248';
var askBlathersChannelID = '699346702183825440';

var blathersAwayMsgs= ["If you would like to speak to Blathers, you can find him in the <#699346702183825440> channel!", "Sorry, Blathers isn't in right now, but I last saw him sleeping in the <#699346702183825440> channel.", "Blathers is in his office at the moment. You can reach him in the <#699346702183825440> channel. Thanks!", "Oh man, oh man.. I wish I studied more. Blathers should know the answer, though. You can find him in the <#699346702183825440> channel!"];

bot.on('ready', () =>{
    console.log('This bot is online!');
    
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");
    //var newID = bot.channels.get(channel_generalID);
    //var newBID = bot.users.cache.get(user_BLATHERSID);

    if (message.channel.id !== askBlathersChannelID) {
        // Deal with command
        switch(args[0]){
            case 'lookup':
                //var newID = bot.channels.get(channel_generalID);
                var response = blathersAwayMsgs[Math.floor(Math.random()*blathersAwayMsgs.length)];
                //message.channel.send("If you like to speak to Blathers, please use the <#699346702183825440> channel!");
                //message.channel.send(response).then().catch(console.error);
                embed = new Discord.MessageEmbed()
                //.setAuthor(`TestA's Friend Code`, message.author.displayAvatarURL())
                //.setTitle('Successfully set your friend code!')
                .setColor('#ff5988')
                .setDescription(response);
                return message.channel.send(embed);

            break;
        }
    };

})

bot.login(token);

