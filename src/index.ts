import { Client, Collection } from 'discord.js';
import { messageHandler } from './handlers/message';
import { readyHandler } from './handlers/ready';
import { readdirSync } from 'fs';
import * as config from './config.json';

const client = new Client();
const commands = new Collection();

client.login(config.token);

// const commandFiles = readdirSync('./commands/').filter(file => file.endsWith('.ts'));
// for(const file of commandFiles) {
//     const command = require(`./commands/${file}`);
//     commands.set(command.name, command);
// }

client.on('ready', readyHandler);
client.on('message', messageHandler);

export default client;

// yarn init -y
// tsc --init
// npm install --save-dev @types/node
// yarn add <package-name>