const { client, prefix } = require("./init");

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(" ");
	switch (args[0].toLowerCase()) {
	case "foo":
		message.reply("Bar");
		break;
	}
});