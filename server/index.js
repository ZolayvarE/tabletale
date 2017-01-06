const app = require('./config/socket.js');

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Now listening on port:\t' + port);
});

