const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("SoftwareX-Plus bot is started")
})

app.listen(3000, () => {
 console.log("Whatever you want to put here")
})

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})

client.on('ready', () => {
 client.user.setActivity("SoftwareX Plus", { type: "WATCHING" })
}) 

client.on("message", (message) => {
  if (message.content === ">test") {
    message.channel.send("I'm Online");
  }
})

client.login(process.env.token)
