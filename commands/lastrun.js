const Discord = require("discord.js");

module.exports = {
    name: "lastrun",
    description: 'Gets when the bot was last restarted',
    execute(message, args) {
        let LastRestartEmbed = new Discord.MessageEmbed()
            .setTitle('Last restart')
            .setDescription('Bot last restarted at ' + process.env.TimeStarted)
            .setColor(process.colors.DARKER_GRAY);

        LastRestartEmbed.setTimestamp();

        return message.reply(LastRestartEmbed).catch(console.error);
    }
};