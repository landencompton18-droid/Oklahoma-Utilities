import {
ActionRowBuilder,
ModalBuilder,
TextInputBuilder,
TextInputStyle
} from 'discord.js';

export async function handleSubmitInquiry(interaction) {
try {
const modal = new ModalBuilder()
.setCustomId('inquiry_modal')
.setTitle('Submit Your Inquiry');

const inquiryInput = new TextInputBuilder()
.setCustomId('inquiry')
.setLabel('What do you need help with?')
.setStyle(TextInputStyle.Paragraph)
.setPlaceholder('Please explain what you need help with...')
.setRequired(true)
.setMaxLength(4000);

const row = new ActionRowBuilder()
.addComponents(inquiryInput);

modal.addComponents(row);

await interaction.showModal(modal);

} catch (error) {
console.error('Error opening inquiry modal:', error);

if (!interaction.replied && !interaction.deferred) {
await interaction.reply({
content: 'There was an error opening the inquiry form.',
ephemeral: true
});
}
}
}

export default {
customId: 'submit_inquiry',
execute: handleSubmitInquiry
};
