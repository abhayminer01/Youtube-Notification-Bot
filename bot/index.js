const { Client } = require('discord.js');
const ytnotifier = require('youtube-notification-module');
const { token, notificationChannel, hashtag, videoFormat } = require('./config.json');

const client = new Client({
    intents:[
        "Guilds",
        "GuildMessages"
    ]
});

client.on('ready', () => {
    console.log(`Successfully Logged in as ${client.user.tag}`)
});

const notifier = new ytnotifier({
    channels:[
        "channel ID ",
        "Another Channel ID"
        // Add more here
    ],
    checkInterval: 50    //Time intervel to check latest video on channels
});

Notifier.on('video', video => {
    console.log(video)

    if(video.title.includes(hashtag)){
        const channel = client.channel.cache.get(notificationChannel)
        channel.send(videoFormat)
    }
});

client.login(token);