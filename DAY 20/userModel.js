const mongoose = require('./db');

const userSchema = new mongoose.Schema({
  name: String,
    email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
