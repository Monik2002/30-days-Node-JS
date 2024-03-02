const mongoose = require('mongoose');
require('dotenv').config();
const addUserToDatabase = require('./addUserToDb');

const conn = mongoose.connect(process.env.CONNECTION_STRING);
// , { useNewUrlParser: true, useUnifiedTopology: true })
  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.once('open', () => {
    console.log('Connected to MongoDB');
  // });
    addUserToDatabase({ username: '<Leon/>', email: 'leon@gmail.com' });
  });
