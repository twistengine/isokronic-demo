var http = require('http');
var path = require('path');

var ik = require('isokronic');
ik.setCredentials({
  email: "mathieu.cazelle@twistengine.com",
  secretAccessKey: "cs9BeFkuTV9ZOlctKE4MX_O5zP1Zkfh36xO8M_5HCT6",
  // secretAccessKey: "srIj7Ud2CqCbYPj7904akG9Fq3jLwjzwjVotmJ-YLn-"
});

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));

var sockets = [];

io.on('connection', function(socket) {
  
  sockets.push(socket);

  socket.on('message', function(msg) {

    ik.setProjectId(msg.projectId);
    ik.sendCommand(msg.command, function(error, result) {

      if (error !== undefined) socket.emit('error', { command: msg.command.name, error: error });

      else socket.emit('result', { command: msg.command.name, result: result });

    });
  });
});

server.listen(3002, "127.0.0.1", function() {
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
