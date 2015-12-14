var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('retrieve-channels', function(){
    io.emit('retrieve-channels', {});
  });
  
  socket.on('channels-list', function(channels){
	//console.log(channels);
	io.emit('channels-list', channels);
  });

  socket.on('zap', function(zapInfo){
	 console.log(zapInfo);
	io.emit('zap', zapInfo);
  });
     
    
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});