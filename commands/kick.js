const Discord = require("discord.js");

module.exports = {
    name: "kick",
    description: 'Kick a user.',
    execute(message, args) {

        let member = message.mentions.members.first();
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You cannot kick members')
        if (!member) return message.reply("Please mention a valid member of this server");
        if (!member.kickable) return message.reply("I cannot kick this member!");

        member.kick();

        let kickResp = new Discord.MessageEmbed()
            .setTitle('Kicked')
            .setDescription('Kicked user ' + args[0])
            .setColor(process.colors.DARKER_GRAY);

        kickResp.setTimestamp();

        return message.channel.send(kickResp).catch(console.error);
    }
};