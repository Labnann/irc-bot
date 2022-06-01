import express from 'express'
import discordIRC from 'discord-irc'
const app = express()
const port = process.env.PORT;





app.get('/', (req, res) => {
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let channelMap = {};
channelMap[process.env.DISCORD_CHANNEL]=process.env.IRC_CHANNEL

let config = [
  // Bot 1 (minimal configuration):
  {
    "nickname": "mt",
    "server": "irc.oftc.net",
    "discordToken": process.env.APP_TOKEN,
    "channelMapping": channelMap

  }];


discordIRC(config);

