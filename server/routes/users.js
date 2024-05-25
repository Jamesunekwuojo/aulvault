const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send('User registered successfully!');
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send('Email already in use');
    } else {
      res.status(500).send('Error registering user');
    }
  }
});

// This route is to show the users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});



// Delete multiple users by name
router.delete('/deleteByName', async (req, res) => {
  try {
    const name = req.body.name; // Assuming the name is passed in the request body
    const result = await User.deleteMany({ name: name });

    if (result.deletedCount === 0) {
      return res.status(404).send('No users found with that name');
    }

    res.send('Users deleted successfully');
  } catch (err) {
    res.status(500).send('Error deleting users');
  }
});


module.exports = router;