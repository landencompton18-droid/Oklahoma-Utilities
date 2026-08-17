import {
ChannelType,
PermissionFlagsBits,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle,
EmbedBuilder
} from 'discord.js';

const SUPPORT_CATEGORY_ID = '1538771702891151481';
const SUPPORT_ROLE_ID = '1536636200511733810';

export async function handleContactSupport(interaction, client) {
try {
if (!interaction.guild) {
return await interaction.reply({
content: 'This button can only be used inside a server.',
ephemeral: true
});
}

const guild = interaction.guild;
const user = interaction.user;

// Check if the user already has a ticket
const existingTicket = guild.channels.cache.find(
channel =>
channel.type === ChannelType.GuildText &&
channel.name === `support-${user.id}`
);

if (existingTicket) {
return await interaction.reply({
content: `You already have an open support ticket: ${existingTicket}`,
ephemeral: true
});
}

// Create the private ticket
const ticketChannel = await guild.channels.create({
name: `support-${user.id}`,
type: ChannelType.GuildText,
parent: SUPPORT_CATEGORY_ID,

permissionOverwrites: [
{
id: guild.roles.everyone.id,
deny: [PermissionFlagsBits.ViewChannel]
},
{
id: user.id,
allow: [
PermissionFlagsBits.ViewChannel,
PermissionFlagsBits.SendMessages,
PermissionFlagsBits.ReadMessageHistory
]
},
{
id: SUPPORT_ROLE_ID,
allow: [
PermissionFlagsBits.ViewChannel,
PermissionFlagsBits.SendMessages,
PermissionFlagsBits.ReadMessageHistory
]
}
]
});

// Submit Inquiry button
const inquiryButton = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setCustomId('submit_inquiry')
.setLabel('Submit an Inquiry')
.setStyle(ButtonStyle.Primary)
);

const embed = new EmbedBuilder()
.setTitle('👋 Hey there!')
.setDescription(
'We need some more information before we can help you.\n\n' +
'Click **Submit an Inquiry** below and tell us what you need help with.'
)
.setColor(0x5865F2);

await ticketChannel.send({
content: `${user}`,
embeds: [embed],
components: [inquiryButton]
});

await interaction.reply({
content: `Your support ticket has been created: ${ticketChannel}`,
ephemeral: true
});

} catch (error) {
console.error('Error creating support ticket:', error);

if (!interaction.replied && !interaction.deferred) {
await interaction.reply({
content: 'There was an error creating your support ticket.',
ephemeral: true
});
}
}
}

export default {
customId: 'contact_support',
execute: handleContactSupport
};
