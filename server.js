//initializing the express app
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require("body-parser");

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use("/", express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({strict: false}));

var Schema = mongoose.Schema;

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/auth',function(req, res){
	res.json('success');
	console.log('success');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});