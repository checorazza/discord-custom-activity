require("dotenv").config();

const RPC = require("discord-rpc");
const rpc = new RPC.Client({ transport: "ipc" });

const applicationId = process.env.APPLICATION_ID;
RPC.register(applicationId);

async function setActivity() {
  if (!rpc) return;

  rpc.setActivity({
    details: "Programando con mi lindo novio",
    state: "Alejense putas",

    buttons: [
      {
        label: "hola chango",
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
