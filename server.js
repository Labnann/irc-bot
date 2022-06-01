const express = require('express')
const app = express()
const port = process.env.PORT;
const discordIRC = require ('discord-irc');



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let config = [
  // Bot 1 (minimal configuration):
  {
    "nickname": "test2",
    "server": "irc://irc.oftc.net:6667",
    "discordToken": "OTgxNjIwODc4MjUxMDI0NDI0.GpDMSG.Y5IL8zAKX7eXi9BH-YHAD4aKVZzOe35KakS09w",
    "channelMapping": {
      "#a-channel": "#special-irc-323"
    }
  }];




