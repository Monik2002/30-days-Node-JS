const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { 
      type: String,
      required: true 
    },
  email: { 
    type: String,
    required: true 
  }
});

// Creating the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
