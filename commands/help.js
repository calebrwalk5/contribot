const Discord = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["h"],
    description: 'All the commands on the bot',
    execute(message, args) {
        let commands = message.client.commands.array();

        let helpEmbed = new Discord.MessageEmbed()
            .setTitle('Help:')
            .setDescription('All the commands on the bot')
            .setColor(process.colors.DARKER_GRAY);

        commands.forEach((cmd) => {
            helpEmbed.addField(
                `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases.join(', ')})` : ""}**`,
                `${cmd.description}`,
                true
            );
        });

        helpEmbed.setTimestamp();

        return message.channel.send(helpEmbed).catch(console.error);
    }
};
