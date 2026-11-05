const express = require('express');
const router = express.Router();

// GET /books - Return a list of books message
router.get('/', (req, res) => {
  console.log('GET /books endpoint hit');
  res.send('Here is the list of books!');
});

// POST /books - Log the book data and confirm addition
router.post('/', (req, res) => {
  const bookData = req.body;
  console.log('Book data received:', bookData);
  res.send('Book has been added!');
});

module.exports = router;
