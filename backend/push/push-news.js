var request = require('request');
var baseUrl = 'http://216.120.248.192:3000/api/news/';

// ------------------------
// Get the number of news 
// in the system
// -------------------------
request(baseUrl + "count", function (error, response, body) {
        if (!error && response.statusCode == 200) {
                    var res = JSON.parse(body);

                    // Skip 0 to count-1 record randomly
                    var id = Math.floor(Math.random() * res.count);   
                    console.log("Skipping " + id + " record(s)");

                    // Received the total number of news            
                    request(baseUrl + "findOne?filter[skip]=" + id, function (err, resp, contents) {
                            if (!err && resp.statusCode == 200) {
                                // Post the contents to the server
                                console.log("Sending news to server");
                                console.log(contents);
								request({
								   		url: "http://216.120.248.192:8585", // Middleware server address
								   		method: "POST",
								   		json: true,
								   		body: {"news":JSON.parse(contents)}
								});
							}
                    });          
        }
});
