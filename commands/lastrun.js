const Discord = require("discord.js");

module.exports = {
    name: "lastrun",
    description: 'Gets when the bot was last restarted',
    execute(message, args) {

        var date = new Date(process.env.TimeStarted * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        let LastRestartEmbed = new Discord.MessageEmbed()
            .setTitle('Last restart')
            .setDescription('Bot last restarted at\nunix time stamp: ' + process.env.TimeStarted + '\nTime: ' + formattedTime)
            .setColor(process.colors.DARKER_GRAY);

        LastRestartEmbed.setTimestamp();

        return message.reply(LastRestartEmbed).catch(console.error);
    }
};