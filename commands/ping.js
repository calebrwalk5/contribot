const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: 'A ping command.',
    execute(message, args) {
        return message.reply("Pong!").catch(console.error);
    }
};