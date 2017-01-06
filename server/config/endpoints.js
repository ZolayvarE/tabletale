const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const dice = require(path.join(__dirname, '../scripts/dice.js'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../client')));

app.get('/d/*', (req, res) => {
  var diceArguments = req.url.split('/');
  while (!Number(diceArguments[0])) {
    diceArguments.shift();
  }
  res.status(200).send(dice.apply(null, diceArguments));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});



module.exports = require('http').Server(app);






