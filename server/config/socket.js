const app = require('./endpoints.js');
const io = require('socket.io')(app);

io.on('connect', function (socket) {
  console.log('Socket: "' + socket + '" connected!');
});






module.exports = app;









