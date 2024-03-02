const express = require('express');
const loggingMiddleware = require('./loggingMiddleware');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// middleware
app.use(loggingMiddleware);
// Defining the route handlers
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/submit-data', (req, res) => {
   const { name, email, message } = req.body;
    console.log('Received data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    res.send('Data has been submitted');
    }
);

app.put('/update-data', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Updated data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    res.send('Data has been updated');
});


app.delete('/delete-data', (req, res) => {
    console.log('Data deletion requested');
    const { name, email, message } = req.body;
    console.log('Deleted data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    res.send('Data has been deleted');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
