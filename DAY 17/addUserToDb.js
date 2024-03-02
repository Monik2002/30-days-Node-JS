const User = require('./UserModel');

/**
 * Adds a new user to the MongoDB database
 * @param {Object} user - User object with properties username and email
*/
async function addUserToDatabase(user) {
  try {
    const newUser = new User(user);
    // Saving the user to the database
    await newUser.save();
    console.log('User added successfully:', newUser);
  } catch (error) {
    console.error('Error adding user to the database:', error);
  }
}

module.exports = addUserToDatabase;
