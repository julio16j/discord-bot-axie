const express = require('express')
const app = express()
app.get('/', (request, response) => {
  let random = Math.floor(Math.random() * (101))
  console.log('Ping recebido ' + random)
  response.sendStatus(200)
})
app.listen(process.env.PORT)

const Discord = require("discord.js-12")
const client = new Discord.Client()
const config = require('./config.json')
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return
  
  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g)
  const command = args.shift().toLowerCase()
  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {
    console.error("Erro:" + err)
  }
})
client.login(process.env.TOKEN)