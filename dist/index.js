"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const env_1 = require("./utils/env");
const bot = new discord_js_1.Client({
    intents: [
        'GUILDS',
        'DIRECT_MESSAGES',
        'GUILD_MESSAGES',
        'GUILD_BANS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'GUILD_PRESENCES',
        'GUILD_VOICE_STATES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_INVITES',
        'GUILD_MEMBERS',
        'GUILD_WEBHOOKS',
    ],
});
bot.once('ready', () => {
    console.log('Bot is ready!');
});
bot.on('guildMemberAdd', (member) => {
    member.roles.add(env_1.env.MEMBER_DEFAULT_ROLE);
});
bot.login(env_1.env.TOKEN);
