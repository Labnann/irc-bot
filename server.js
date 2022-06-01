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

let config = [
  // Bot 1 (minimal configuration):
  {
    "nickname": "mt",
    "server": "irc.oftc.net",
    "discordToken": process.env.APP_TOKEN,
    "channelMapping": {
      "981620682888736869": "#2323232323-kernel-mentees-23232322332"
    }

  }];


discordIRC(config);

