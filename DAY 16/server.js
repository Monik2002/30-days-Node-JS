const express = require('express');
require('dotenv').config();
const connectToMongoDB = require('./connectToMongoDB');
const app = express();

// Connecting to MongoDB
connectToMongoDB();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
