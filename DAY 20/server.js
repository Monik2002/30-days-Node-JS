const express = require('express');
const bodyParser = require('body-parser');
const averageAgeRoute = require('./averageAgeRoute');
require('dotenv').config();
const path = require('path');
const User = require('./userModel'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addUserwithAge.html'));
});

app.post('/addUser', async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const newUser = new User({ name, email, age });
    await newUser.save();

    res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.use('/average-age', averageAgeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
