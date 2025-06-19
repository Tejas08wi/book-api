# 📚 Book API Server

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage a collection of books. This API supports full **CRUD operations** and is ideal for learning or extending into a full-stack application.

---
``

## 🚀 APIs Created and Their Functionality

| Method | Endpoint              | Description                      |
|--------|------------------------|----------------------------------|
| GET    | `/api/books`           | Fetch all books                  |
| GET    | `/api/books/:id`       | Fetch a single book by ID        |
| POST   | `/api/books`           | Add a new book                   |
| PUT    | `/api/books/:id`       | Update an existing book by ID    |
| DELETE | `/api/books/:id`       | Delete a book by ID              |


## 🧩 Database Used

**MongoDB** was used as the database, and it was integrated using the **Mongoose ODM**.

### 🔌 Integration Steps:
- Installed Mongoose via `npm install mongoose`
- Connected MongoDB to the server using the URI:

```js
mongoose.connect('mongodb://127.0.0.1:27017/bookdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
````

* Created a `Book` model schema to represent documents in the `bookdb` collection.

---

## ⚙️ How to Run the Server Locally

### ✅ Prerequisites

* Node.js installed
* MongoDB installed and running locally

### 📦 Installation Steps

```bash
```
# Clone the repository
git clone https://github.com/Tejas08wi/book-api.git
cd book-api

# Install dependencies
npm install

# Start the server
node server.js
```

> The server will run on: `http://localhost:5000`

---

## 💻 How to Interact with the API

You can use **Postman**, **curl**, or any REST client.

---

### 🔹 1. Add a New Book

* **Method**: `POST`
* **Endpoint**: `/api/books`
* **Request Body**:

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}
```

* **Response**:

```json
{
  "_id": "60f...",
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "createdAt": "2025-06-19T18:00:00.000Z"
}
```

---

### 🔹 2. Get All Books

* **Method**: `GET`
* **Endpoint**: `/api/books`

---

### 🔹 3. Get a Book by ID

* **Method**: `GET`
* **Endpoint**: `/api/books/:id`

---

### 🔹 4. Update a Book

* **Method**: `PUT`
* **Endpoint**: `/api/books/:id`
* **Request Body**:

```json
{
  "title": "The Alchemist - Updated",
  "author": "P. Coelho"
}
```

---

### 🔹 5. Delete a Book

* **Method**: `DELETE`
* **Endpoint**: `/api/books/:id`

---

## 📁 Project Structure

```
```
book-api/
├── models/
│   └── Book.js
├── routes/
│   └── books.js
├── server.js
├── package.json
└── README.md
```
```

## 📬 Contact

Made with ❤️ by [Tejaswi Kumar](https://github.com/Tejas08wi)

---

