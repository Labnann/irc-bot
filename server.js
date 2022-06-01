import express from 'express'
import discordIRC from 'discord-irc'
const app = express()
const port = process.env.PORT;





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let config = [
  // Bot 1 (minimal configuration):
  {
    "nickname": "TEST",
    "server": "irc://irc.oftc.net",
    "discordToken": "OTgxNjIwODc4MjUxMDI0NDI0.GpDMSG.Y5IL8zAKX7eXi9BH-YHAD4aKVZzOe35KakS09w",
    "channelMapping": {
      "#a-channel": "#special-irc-323"
    }
  }];


discordIRC(config);

