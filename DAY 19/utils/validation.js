const User = require('../models/user');

// Function to add a new user with validation
async function addUserWithValidation(user) {
  try {
    const newUser = new User(user);
    await newUser.save();
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error.message);
  }
}

module.exports = addUserWithValidation;

