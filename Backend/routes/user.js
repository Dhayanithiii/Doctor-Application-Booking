const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ================= REGISTER =================
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// ================= GET ALL USERS =================
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ================= LOGIN =================
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (user) {
      res.json(user);
    } else {
      res.json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;
