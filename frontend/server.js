var express = require('express');
var app     = express();
var path    = require('path');

var ip = require('os').networkInterfaces().eth0[0].address;

app.use('/images',express.static(path.join(__dirname, '/images')));
app.use('/js',express.static(path.join(__dirname, '/js')));
app.use('/css',express.static(path.join(__dirname, '/css')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));	
});

var PORT = 8282;

app.listen(PORT);

console.log("runninng a webserver at  http://" + ip + ":" + PORT);
