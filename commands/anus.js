const Discord = require("discord.js");
const RICK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

module.exports = {
    name: "rickroll",
    description: 'Sends you the link for the "Never Gonna Give You Up" music video by Rick Astley',
    execute(message, args) {
        return message.reply(RICK).catch(console.error);
    }
};
