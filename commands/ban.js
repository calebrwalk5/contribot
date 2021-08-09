const Discord = require("discord.js");

module.exports = {
    name: "ban",
    description: 'Ban a user',
    execute(message, args) {

        let member = message.mentions.members.first();

        if (!member) {
            member = client.users.fetch(args[0])
        }

        //if (!member) return message.reply("Please mention a valid member of this server " + args[0])

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You cannot ban members')
        if (!member) return message.reply("Please mention a valid member of this server");
        if (!member.kickable) return message.reply("I cannot ban this member!");

        //member.ban();

        let BanResp = new Discord.MessageEmbed()
            .setTitle('Banned')
            .setDescription('Banned user ' + args[0])
            .setColor(process.colors.DARKER_GRAY);

        BanResp.setTimestamp();

        return message.channel.send(BanResp).catch(console.error);
    }
};