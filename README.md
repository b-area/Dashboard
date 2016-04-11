#Pi Dashboard
This a project for creating a TV dashboard that
uses socket IO to connect clients to a backend server.
It also uses loopback IO to push/pull data (in JSON format)
to the server, which will broadcast them to the front end clients.
Take a look at examples folder on how to use this system

###Requirements:
 + Node JS
 + npm
 + mongo-db (optional)
 + strongloop
 + forever (install using npm install forever -g)


##Installation:

You can either run the **build.sh** script or follow these steps:

 1. Navigate to the backend folder, type the command:

 ```
    $> npm install
 ```

 2. navigate to middleware, type the command:
  ```
    $> npm install
  ```

 3. navigate to frontend, type the command:
  ```
    $> npm install
  ```

###Running:

 1. Run the backend loopback API server from the main folder (you can change port in config.json):

 ```
  $> node backend/server/server.js
 ```

 2. Run the middlwware server (you can change port number in middleware.js)

 ```
  $> node middleware/middleware.js
 ```

 3. Point the front end client socket.io javascript to the middleware web address by
 changing the address and port number in the **frontend** folder.

 4. Run the frontend server:

 ```
 $> node frontend/server.js
 ```

 5. Navigate to **localhost:PORT-NUMBER**
