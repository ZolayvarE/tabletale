const app = require('./endpoints.js');
const io = require('socket.io')(app);
const rooms = io.sockets.adapter.rooms;
io.on('connect', function (socket) {
  console.log('Socket: "' + socket.id + '" connected!');
  console.log(rooms)
  socket.on('snarf', function (data) {
    console.log(data);
  });

  socket.on('snoof', function (data) {
    data.console.log(data);
  });
});


module.exports = app;









