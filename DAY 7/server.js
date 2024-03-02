const express = require('express');
const requestLoggerMiddleware = require('./middleware');

const app = express();

app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
    console.log('GET request received');
  res.send('GET request received');
});

// app.post('/', (req, res) => {
//   console.log(`${new Date()} - POST request received`);
//   console.log('Request body:', req.body);
//   res.send('POST request received');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// https://localhost:3000
