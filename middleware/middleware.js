var express     = require("express");
var bodyParser  = require("body-parser");
var app         = express();
var http 		= require('http')
var server      = http.createServer(app)
var io 			= require("socket.io").listen(server);

var ip = require('os').networkInterfaces().eth0[0].address;
var PORT = 8181;

// parse application/json
app.use(bodyParser.json())

var numClients = 0;

// -----------------
// Forecast module
// -----------------
// Require the module
var Forecast = require('forecast');

// Initialize
var forecast = new Forecast({
  service: 'forecast.io',
  key: '67206ed637c3cf8f7124cf6725090294',
  units: 'Fahrenheit', // Only the first letter is parsed
  cache: false,      // Cache API requests?
  ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
    minutes: 10,
    seconds: 30
    }
});



// -----------------------------
// Retrieve weather information, 
// ignoring the cache
// -----------------------------
setInterval(function() {
     forecast.get([36.103814, -86.798959], true, function(err, weather) {
		 if(err) return console.dir(err);
		 console.dir(weather.currently);
		 io.sockets.emit('weather', weather.currently);
     });
 }, 60000); // every 1 min
 //  }, 300000); // every 5 minutes



// -----------------
// Post request
// -----------------
app.use(function (req, res, next) {
	//console.log(req.body) // populated!
	if ("news" in req.body) {
		console.log(" --- NEWS START-----")
		console.log(req.body.news) // populated!
		io.sockets.emit('news', req.body.news);
		console.log(" --- NEWS END -----")
		
	}
	
	if ("events" in req.body) {
		console.log(" --- EVENTS START-----")
		console.log(req.body.events) // populated!
		io.sockets.emit('events', req.body.events);
		console.log(" --- EVENTS END -----")
	}
	
	if ("posters" in req.body) {
		console.log(" --- POSTER START-----")
		console.log(req.body.posters) // populated!
		io.sockets.emit('posters', req.body.posters);
		console.log(" --- POSTERS END -----")
	}
	
	
	if ("videos" in req.body) {
		console.log(" --- VIDEOS START-----")
		console.log(req.body.videos) // populated!
		io.sockets.emit('videos', req.body.videos);
		console.log(" --- VIDEOS END -----")
	}
	
	if ("items" in req.body) {
		console.log(" --- ITEMS START-----")
		console.log(req.body.items) // populated!
		io.sockets.emit('items', req.body.items);
		console.log(" --- ITEMS END -----")
	}
	
	if ("screen" in req.body) {
		console.log(" --- screen code start -----")
		console.log(req.body.screen) // populated!
		io.sockets.emit('screen', req.body.screen);
		console.log(" --- SCREEN END -----")
	}
	
    next()
})


// -------------------------
// On connection
// --------------------------
io.sockets.on('connection', function(socket) {
   numClients++;
   console.log('Client #' + numClients + ' is connected.');
   socket.emit('message', {
     	message: 'Client #' + numClients + ', you are connected to the SCI backend through the socket!'
   });
});


// -------------------------
// On disconnection
// --------------------------
io.sockets.on('disconnect', function(socket) {
   numClients--;
   console.log('Client #' + numClients + ' has disconnected.');
});


//app.listen(8089,function(){
server.listen(PORT,function(){
  console.log("Started at http://" + ip +  ":" +PORT);
})
