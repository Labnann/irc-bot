const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var irc = require('irc');
var client = new irc.Client('irc://irc.oftc.net:6667', 'myNick', {
    channels: ['#special-irc-323'],
});


