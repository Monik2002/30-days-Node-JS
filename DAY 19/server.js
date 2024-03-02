const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const addUserWithValidation = require('./utils/validation');
const path = require('path');

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addUser.html'));
});

app.post('/addUser', async (req, res) => {
  const { username, email } = req.body;
  try {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (isEmailValid) {
      await addUserWithValidation({ username, email });
      res.status(200).json({ message: 'User added successfully' });
    } else {
      res.status(400).json({ message: 'Invalid email address' });
    }
  } catch (error) {
    console.error('Error adding user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
