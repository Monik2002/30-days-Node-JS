// app.js (or index.js)
const express = require('express');
const http = require('http');
const setupWebSocketServer = require('./websocket');

const app = express();
const server = http.createServer(app);

// Setting up WebSocket server
setupWebSocketServer(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
