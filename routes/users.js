const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (re, res) => {
  res.send('Register a user');
});

module.exports = router;
