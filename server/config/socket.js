const app = require('./endpoints.js');
const io = require('socket.io')(app);
const rooms = io.sockets.adapter.rooms;
io.on('connect', function (socket) {
  console.log('Socket: "' + socket.id + '" connected!');

  socket.on('join', function (roomName) {
    socket.join(roomName);
    console.log(rooms);
  });
});


module.exports = app;









