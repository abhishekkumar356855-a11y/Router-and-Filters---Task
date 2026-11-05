const express = require('express');
const booksRouter = require('./routes/books');

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Mount the books router at /books
app.use('/books', booksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Library server is running on http://localhost:${PORT}`);
});
