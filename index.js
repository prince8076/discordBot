const { Client , GatewayIntentBits} = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ] // giving permission
});

client.on('messageCreate',(message)=>{
    // console.log(message); // it will give your user detail, who send you message
    // console.log(message.content); // it will give you that message
    if(message.author.bot) return; //if we don't do that it will reply for there own message
    if(message.content.startsWith('create')){
        const url =message.content.split('create')[1];
        return message.reply({
            content: "Generating Short ID for" + url,
        })
    }
    message.reply({
        content:'Hi From Bot'
    });
});

client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply("pong!!");
})

client.login('MTI0MjgxMjk1NDgzMTg4MDM5Ng.GmLFtv.TDtCO7EZl01FxYuCOlE4CQW6gSJJ3Ho_bo4SAE');

