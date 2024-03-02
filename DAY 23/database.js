const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; 
  }
}

module.exports = { connect };
