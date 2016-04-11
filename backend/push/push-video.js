var request = require('request');
var baseUrl = 'http://216.120.248.192:3000/api/videos/';

// ------------------------
// Get the number of videos 
// in the system
// -------------------------
request(baseUrl + "count", function (error, response, body) {
        if (!error && response.statusCode == 200) {
                    var res = JSON.parse(body);

                    // Skip 0 to count-1 record randomly
                    var id = Math.floor(Math.random() * res.count);   
                    console.log("Skipping " + id + " record(s)");

                    // Received the total number of videos            
                    request(baseUrl + "findOne?filter[skip]=" + id, function (err, resp, contents) {
                            if (!err && resp.statusCode == 200) {
                                // Post the contents to the server
                                console.log("Sending videos to server");
                                console.log(contents);
								request({
								   		url: "http://216.120.248.192:8585", // Middleware server address
								   		method: "POST",
								   		json: true,
								   		body: {"videos":JSON.parse(contents)}
								});
							}
                    });          
        }
});
