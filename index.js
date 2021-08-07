const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
require('dotenv').config()
const { DISCORD_TOKEN, PREFIX } = process.env
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const client = new Discord.Client({
    disableMentions: 'everyone'
})

client.login(DISCORD_TOKEN);
client.commands = new Discord.Collection();
client.prefix = PREFIX;

client.on("ready", () => {
    console.log(`${client.user.username} ready!`);
    client.user.setActivity(`for ${PREFIX}help`, { type: "WATCHING" });
});

const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

process.colors = {
    DEFAULT: 0x000000,
    WHITE: 0xffffff,
    AQUA: 0x1abc9c,
    GREEN: 0x2ecc71,
    BLUE: 0x3498db,
    YELLOW: 0xffff00,
    PURPLE: 0x9b59b6,
    LUMINOUS_VIVID_PINK: 0xe91e63,
    GOLD: 0xf1c40f,
    ORANGE: 0xe67e22,
    RED: 0xe74c3c,
    GREY: 0x95a5a6,
    NAVY: 0x34495e,
    DARK_AQUA: 0x11806a,
    DARK_GREEN: 0x1f8b4c,
    DARK_BLUE: 0x206694,
    DARK_PURPLE: 0x71368a,
    DARK_VIVID_PINK: 0xad1457,
    DARK_GOLD: 0xc27c0e,
    DARK_ORANGE: 0xa84300,
    DARK_RED: 0x992d22,
    DARK_GREY: 0x979c9f,
    DARKER_GREY: 0x7f8c8d,
    LIGHT_GREY: 0xbcc0c0,
    DARK_NAVY: 0x2c3e50,
    BLURPLE: 0x7289da,
    GREYPLE: 0x99aab5,
    DARK_BUT_NOT_BLACK: 0x2c2f33,
    NOT_QUITE_BLACK: 0x23272a
};

client.on("message", async (message) => {
    // command handler taken from evobot
    if (message.author.bot) return;
    if (!message.guild) return;

    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);

    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command =
        client.commands.get(commandName) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply('Command not found').catch(console.error);
    }
});
