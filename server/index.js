const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));



const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Now listening on port:', port);
});
