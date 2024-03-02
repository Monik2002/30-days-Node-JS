const WebSocket = require('ws');

function setupWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Client connected');

    // Handling the incoming messages from clients
    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);

      // Broadcasting the message to all clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    // Handles client disconnection
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
}

module.exports = setupWebSocketServer;
