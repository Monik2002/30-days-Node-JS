const express = require('express');
const authenticationMiddleware = require('./authenticationMiddleware');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const app = express();

const generateToken = (user) => {
  return jwt.sign({user}, process.env.JWT_SECRET , { expiresIn: '1h' });
};

app.post("/login", (req, res) => {
    const user = {
        id: 1,
        username: "test",
        email: "meow@gmail.com"
    }
  const token = generateToken(user);
  res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/profile', authenticationMiddleware , (req, res) => {
  res.send('Hello, world!');
});
