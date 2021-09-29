const Discord = require("discord.js");
const RICK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

module.exports = {
    name: "anus",
    execute(message, args) {
        return message.reply(RICK).catch(console.error);
    }
};
