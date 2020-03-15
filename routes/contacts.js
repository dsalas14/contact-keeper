const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', (re, res) => {
  res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (re, res) => {
  res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (re, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (re, res) => {
  res.send('Delete contact');
});

module.exports = router;
