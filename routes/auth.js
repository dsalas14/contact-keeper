const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get looged in user
// @access  Private
router.get('/', (re, res) => {
  res.send('Get looged in user');
});

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', (re, res) => {
  res.send('Log in user');
});

module.exports = router;
