const Discord = require("discord.js");

module.exports = {
    name: "argtest",
    description: 'Command for testing arguments.',
    execute(message, args) {
        let commands = message.client.commands.array();

        inv.setTimestamp();

        return message.channel.send(args[1]).catch(console.error);
    }
};
