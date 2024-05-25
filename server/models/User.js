const mongoose = require('mongoose');
const db = require('../db'); // Import the db connection

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', userSchema);