const Discord = require("discord.js");
const client = new Discord.Client();
const cfg = require("./config.json");

client.once("ready", () => {
	console.log(`${client.user.username}#${client.user.discriminator} is now online.`);
});

client.login(cfg.token);

module.exports = { client, prefix: cfg.prefix };