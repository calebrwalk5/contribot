const Discord = require("discord.js");

module.exports = {
    name: "contribute",
    description: 'Gives you the link to contribute to the bot.',
    execute(message, args) {

        let contributeEmbed = new Discord.MessageEmbed()
            .setTitle('Contribute:')
            .setDescription('https://github.com/Deniied/contribot/pulls')
            .setColor(process.colors.DARKER_GRAY);

        contributeEmbed.setTimestamp();

        return message.channel.send(contributeEmbed).catch(console.error);
    }
};
