const Discord = require("discord.js");

module.exports = {
    name: "timestamp",
    description: 'Gets the current unix time stamp.',
    execute(message, args) {

        let LastRestartEmbed = new Discord.MessageEmbed()
            .setTitle('Unix Time Stamp')
            .setDescription('Current Unix Time Stamp: ' + Date.now())
            .setColor(process.colors.DARKER_GRAY)
            .setFooter("Results may be off by a few seconds.");

        LastRestartEmbed.setTimestamp();

        return message.reply(LastRestartEmbed).catch(console.error);
    }
};