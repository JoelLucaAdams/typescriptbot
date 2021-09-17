import { Client, Message } from 'discord.js';


interface Run {
    (client: Client, message: Message, args?: string[]): void;
}


export interface Command {
    name: string;
    description: string;
    aliases?: string;
    run: Run;
}