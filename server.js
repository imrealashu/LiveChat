//initializing the express app
var express = require('express');
var mongoose = require('mongoose');
var app = express();
//setting up static directory
app.use("/", express.static(__dirname + '/'));

var Schema = mongoose.Schema;

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('App listening at http://%s:%s', host, port)
});