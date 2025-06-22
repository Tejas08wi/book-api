const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('../routes/book');
const Book = require('../models/Book');
const { connect, closeDatabase, clearDatabase } = require('./setup');

const app = express();
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

beforeAll(async () => await connect());
afterEach(async () => await clearDatabase());
afterAll(async () => await closeDatabase());

describe('Book API', () => {

  it('should create a book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'Test Book', author: 'John Doe' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toBe('Test Book');
  });

  it('should get all books', async () => {
    await Book.create({ title: 'Book 1', author: 'Author 1' });
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should get a book by ID', async () => {
    const book = await Book.create({ title: 'Book 2', author: 'Author 2' });
    const res = await request(app).get(`/api/books/${book._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Book 2');
  });

  it('should update a book', async () => {
    const book = await Book.create({ title: 'Old Title', author: 'Old Author' });
    const res = await request(app)
      .put(`/api/books/${book._id}`)
      .send({ title: 'New Title', author: 'New Author' });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('New Title');
  });

  it('should delete a book', async () => {
    const book = await Book.create({ title: 'Book to Delete', author: 'Author' });
    const res = await request(app).delete(`/api/books/${book._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Book deleted');
  });
  it('should return 400 for invalid ID', async () => {
  const res = await request(app).get('/api/books/invalid-id');
  expect(res.statusCode).toBe(400);
});
it('should return 404 if book not found', async () => {
  const fakeId = '64a97b5671c00e2f9e111111'; 
  const res = await request(app).get(`/api/books/${fakeId}`);
  expect(res.statusCode).toBe(404);
});

});
