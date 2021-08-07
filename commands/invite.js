const Discord = require("discord.js");

module.exports = {
    name: "invite",
    description: 'Invite the bot',
    execute(message, args) {
        let commands = message.client.commands.array();

        let inv = new Discord.MessageEmbed()
            .setTitle('Invite:')
            .setDescription('https://discord.com/api/oauth2/authorize?client_id=873669781335707708&permissions=8&scope=bot')
            .setColor(process.colors.DARKER_GRAY);

        inv.setTimestamp();

        return message.channel.send(inv).catch(console.error);
    }
};
