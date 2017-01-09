const app = require('./endpoints.js');
const io = require('socket.io')(app);
const rooms = io.sockets.adapter.rooms;

io.on('connect', function (socket) {

  socket.on('join', function (roomName) {
    socket.join(roomName);
  });

  socket.on('message', function (message) {

  });

});


module.exports = app;









