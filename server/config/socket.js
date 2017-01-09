const app = require('./endpoints.js');
const io = require('socket.io')(app);
const rooms = io.sockets.adapter.rooms;

io.on('connect', function (socket) {
  let room;
  socket.on('join', function (roomName) {
    room = roomName;
    socket.join(roomName);

  });

  socket.on('message', function (message) {
    socket.broadcast.emit('message', message);
  });

});


module.exports = app;









