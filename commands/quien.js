const { SlashCommandBuilder } = require("discord.js");

const Options = ["Juan Cruz", "Cecilia", "Los dos", "Ninguno"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("quien")
    .setDescription("¿Quién hace (cosa) más?")
    .addStringOption((option) =>
      option.setName("input").setDescription("La cosa que querés preguntar")
    ),

  async execute(interaction) {
    if (interaction.commandName === "quien") {
      const randomIndex = Math.floor(Math.random() * Options.length);
      const choice = Options[randomIndex];

      await interaction.reply(`**${choice}**`);
    }
  },
};
