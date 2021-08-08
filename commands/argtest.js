const Discord = require("discord.js");

module.exports = {
    name: "argtest",
    description: 'Command for testing arguments.',
    execute(message, args) {
        return message.channel.send(args[0]).catch(console.error);
    }
};
