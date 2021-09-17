import { Message } from "discord.js";
import { pingCommand } from "../commands/ping";
import { testCommand } from "../commands/test";
import * as config from '../config.json';
import client from "../index";

export function messageHandler(message: Message) {
    // Check if message is from author and contains prefix
    if(message.author.bot || !message.content.startsWith(config.prefix)) return;

    // Remove the prefix from the message.content
    message.content = message.content.replace(`${config.prefix}`, '');

    // Get the command name and replace content in string
    const commandName: string = message.content.split(' ')[0];
    const args: string[] = message.content.split(' ');

    switch(commandName)
    {
        case pingCommand.name || pingCommand.aliases:
            pingCommand.run(client, message);
            break;
        case testCommand.name || testCommand.aliases:
            testCommand.run(client, message, args);
    }
}