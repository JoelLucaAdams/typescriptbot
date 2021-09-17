import client from "../index";

export function readyHandler() {
    console.log(`${client.user?.tag} has logged in`);
    console.log('Connected to the following servers')
    client.guilds.cache.forEach(guild => {
        console.log(`${guild.name} | ${guild.id}`);
      })
}