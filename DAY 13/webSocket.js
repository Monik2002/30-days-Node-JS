const WebSocket = require('ws');

function setupWebSocket(server) {
const wss = new WebSocket.Server({ server }); // Creating a new WebSocket server and attach it to the HTTP server

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      // Echo the received message back to the client
      console.log('Received:', message.toString('utf-8'));
      ws.send(message.toString('utf-8'));
    });
  });
}

module.exports = setupWebSocket;
