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
bot.once('ready', (bot) => {
    console.log('Bot is ready!');
    /* const whatFarmingDoYoutPlayChannel = bot.channels.cache.get(
      '913450870295904297'
    ) as TextChannel
  
    const row1 = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel('FS 2008')
        .setCustomId('911318731437781032')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 2009')
        .setCustomId('911319310734073887')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 11')
        .setCustomId('911319805338984488')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 12')
        .setCustomId('911320047262236712')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 13')
        .setCustomId('911320198135550072')
        .setStyle('PRIMARY')
    )
  
    const row2 = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel('FS 14')
        .setCustomId('911320305845297202')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 15')
        .setCustomId('911320395171393546')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 16')
        .setCustomId('911321831095562240')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 17')
        .setCustomId('911322800990613568')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 18')
        .setCustomId('911322894456467466')
        .setStyle('PRIMARY')
    )
  
    const row3 = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel('FS 19')
        .setCustomId('911323125088673802')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 20')
        .setCustomId('911323361945219102')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setLabel('FS 22')
        .setCustomId('911323899885654056')
        .setStyle('PRIMARY')
    )
  
    whatFarmingDoYoutPlayChannel.send({
      embeds: [
        {
          title:
            'Qual(is) Farming Simulator você joga? (Pode escolher mais de um)',
        },
      ],
      components: [row1, row2, row3],
    }) */
});
bot.on('guildMemberAdd', (member) => {
    member.roles.add(env_1.env.MEMBER_DEFAULT_ROLE);
});
bot.on('interactionCreate', (interaction) => {
    if (!interaction.isButton())
        return;
    if (!(interaction.member.roles instanceof discord_js_1.GuildMemberRoleManager))
        return;
    if (!(interaction.message instanceof discord_js_1.Message))
        return;
    if (interaction.message.id === '913784514000588870') {
        if (interaction.member.roles.cache.has(interaction.customId)) {
            interaction.member.roles.remove(interaction.customId);
            interaction.reply({
                content: `Você deixou de ser um jogador de ${interaction.message.guild.roles.cache.get(interaction.customId).name}`,
                ephemeral: true,
            });
        }
        else {
            interaction.member.roles.add(interaction.customId);
            interaction.reply({
                content: `Você agora é oficialmente um jogador de ${interaction.message.guild.roles.cache.get(interaction.customId).name}`,
                ephemeral: true,
            });
        }
    }
});
bot.login(env_1.env.TOKEN);
