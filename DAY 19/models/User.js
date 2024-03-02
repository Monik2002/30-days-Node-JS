const mongoose = require('mongoose');
const validator = require('validator');

// Defining user schema with validation
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        // Email validation regex
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
.test(v);
      // return validator.isEmail(value); // [ this line is used when a JavaScript library like validator is used (for now it gives error for me ) ]
      },
      message: props => `${props.value} is not a valid email address!`
    }
  }
});

// Creating user model
const User = mongoose.model('User', userSchema);

module.exports = User;
