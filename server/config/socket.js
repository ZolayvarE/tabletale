const app = require('./endpoints.js');
const io = require('socket.io')(app);

io.on('connect', function (socket) {
  console.log('Socket: "' + socket + '" connected!');

  socket.on('snarf', function (data) {
    console.log(data);
  });

  socket.on('snoof', function () {
    data.console.log(data);
  })
});






module.exports = app;









