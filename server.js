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
    "server": "irc.oftc.net",
    "discordToken": "OTgxNjIwODc4MjUxMDI0NDI0.GpDMSG.Y5IL8zAKX7eXi9BH-YHAD4aKVZzOe35KakS09w",
    "channelMapping": {
      "#981620682888736869": "#special-irc-323"
    },
    "ircOptions": { // Optional node-irc options
      "floodProtection": false, // On by default
      "floodProtectionDelay": 1000, // 500 by default
      "port": "6697", // 6697 by default
      "secure": true, // enable SSL, false by default
      "sasl": true, // false by default
  
    }

  }];


discordIRC(config);

