require("dotenv").config();

const RPC = require("discord-rpc");
const rpc = new RPC.Client({ transport: "ipc" });

const applicationId = process.env.APPLICATION_ID;
RPC.register(applicationId);

const { Client, GatewayIntentBits } = require("discord.js");
const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  StreamType,
} = require("@discordjs/voice");
const { spawn } = require("child_process");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

client.once("clientReady", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

async function setActivity() {
  if (!rpc) return;

  rpc.setActivity({
    details: "Amo a mi lindo novio",
    state: "Alejense putas",

    buttons: [
      {
        label: "Proyecto",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],

    startTimestamp: Date.now(),

    instance: false,
  });
}

rpc.on("ready", () => {
  console.log("está andando esto xd");
  setActivity();

  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});

rpc.login({ clientId: applicationId }).catch(console.error);

client.login(process.env.APPLICATION_TOKEN);
