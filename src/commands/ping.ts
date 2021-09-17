import { Command } from './commands';

export const pingCommand: Command = {
    name: 'ping',
    aliases: 'p',
    description: 'Checks to see if the bot is alive',
    run: async (client, message, args) => {
        var start = new Date().getTime();
        var msg = await message.channel.send(`\`DWSP latency: ${client.ws.ping}ms\``);
        var elapsed = new Date().getTime() - start;
        msg.edit(`\`DWSP latency: ${client.ws.ping}ms\` \`Response time: ${elapsed}ms\``);
    }
}
