#Documentation

In this folder, you will find examples of nodejs script that can be
used to push data to the middleware server, which will forward it
to all front end clients that are listening to the same socket.io
js.

Requirements:
 + A running  API server  (loopback IO). Take a look at the
middleware folder on how to run an API server.

+ modify all the push files: push-news.js, push-event.js, 
and push-video.js. change the middleware server port number
at the bottom of the files to the port you used for the
middleware.js (Line #9)

Usage:
 + To push a news:  
   node push-news.js

 + To push an item:
   node push-item.js

 + To push a video:
   node push-video.js
 
 + To push a poster:
   node push-poster.js
