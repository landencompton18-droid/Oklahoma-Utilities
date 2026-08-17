import { EmbedBuilder } from 'discord.js';

export async function handleInquiryModal(interaction) {
try {
const inquiry = interaction.fields.getTextInputValue('inquiry');

const embed = new EmbedBuilder()
.setTitle('📩 New Inquiry')
.setColor(0x5865F2)
.addFields(
{
name: 'Submitted By',
value: `${interaction.user}`,
inline: false
},
{
name: 'Inquiry',
value: inquiry,
inline: false
}
)
.setTimestamp();

await interaction.channel.send({
embeds: [embed]
});

await interaction.reply({
content: '✅ Your inquiry has been submitted!',
ephemeral: true
});

} catch (error) {
console.error('Error processing inquiry:', error);

if (!interaction.replied && !interaction.deferred) {
await interaction.reply({
content: 'There was an error submitting your inquiry.',
ephemeral: true
});
}
}
}

export default {
customId: 'inquiry_modal',
execute: handleInquiryModal
};
