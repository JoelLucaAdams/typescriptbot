import { Command } from './commands';

export const testCommand: Command = {
    name: 'test',
    aliases: ['t'],
    description: 'test',
    run: async (client, message, args) => {
        args?.shift();
        message.channel.send(`This is a test response \`${args?.join(', ')}\``);
    }
}
