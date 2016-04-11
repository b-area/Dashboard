var request = require('request');
var baseUrl = 'http://159.203.172.229:8080/api/videos/'; // TODO -- Change to the address of the backend + PORT number

// ------------------------
// Get the number of videos 
// in the backend DB/file
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
                                console.log("Sending videos to server");
                                console.log(contents);
								request({
                                    url: "http://159.203.172.229:8181", // TODO -- Change to the middleware server address + PORT number
								   		method: "POST",
								   		json: true,
								   		body: {"videos":JSON.parse(contents)}
								});
							}
                    });          
        }
});
