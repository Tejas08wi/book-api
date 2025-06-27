const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: Success
 */
// GET all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// GET a book by ID
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books by id
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  } catch (err) {
    res.status(400).send('Invalid ID');
  }
});

// POST create new book
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  try {
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update a book
router.put('/:id', async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send('Book not found');
    res.json(updated);
  } catch (err) {
    res.status(400).send('Invalid ID');
  }
});

// DELETE a book
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send('Book not found');
    res.send('Book deleted');
  } catch (err) {
    res.status(400).send('Invalid ID');
  }
});

module.exports = router;
