const express = require('express');
const http = require('http');
const path = require('path');
const setupWebSocket = require('./webSocket');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

app.get('/websocket', (req, res) => {
  res.sendFile(path.join(__dirname, 'public' , 'webSocket.html'));
});

// Setting up WebSocket server
setupWebSocket(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.use(express.static('public')); --> this line is used to serve the static files present in the public folder of the directory.This setup is commonly used to serve static assets such as HTML, CSS, JavaScript, images, and other files that don't require server-side processing. Placing static files in a dedicated directory like public helps organize the project structure and makes it easier to manage and serve static assets.

//app.get('/websocket', (req, res) => { res.sendFile(path.join(__dirname, 'public' , 'webSocket.html')); }); --> The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. The path.join() method is used to construct the path to the webSocket.html file, which is then sent to the client using the res.sendFile() method.

// In Node.js, the __dirname variable is a special global variable that represents the directory name of the current module. The double underscore (__) is a convention used in Node.js to denote special variables or properties that are provided by the Node.js runtime environment itself, rather than being part of the JavaScript language specification.