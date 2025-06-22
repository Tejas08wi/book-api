---

# 📚 Book API Server

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage a collection of books. This API supports full **CRUD operations** and is ideal for learning or extending into a full-stack application.

---

## 🚀 APIs Created and Their Functionality

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | `/api/books`     | Fetch all books               |
| GET    | `/api/books/:id` | Fetch a single book by ID     |
| POST   | `/api/books`     | Add a new book                |
| PUT    | `/api/books/:id` | Update an existing book by ID |
| DELETE | `/api/books/:id` | Delete a book by ID           |

---

## 🧩 Database Used

**MongoDB** was used as the database, and it was integrated using the **Mongoose ODM**.

### 🔌 Integration Steps:

* Installed Mongoose via `npm install mongoose`
* Connected MongoDB to the server using the URI:

```js
mongoose.connect('mongodb://127.0.0.1:27017/bookdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

* Created a `Book` model schema to represent documents in the `bookdb` collection.

---

## ⚙️ How to Run the Server Locally

### ✅ Prerequisites

* Node.js installed
* MongoDB installed and running locally

### 📦 Installation Steps

```bash
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

## 🧪 Testing the API

This project includes **unit**, **integration**, and **API tests** using modern testing frameworks.

### 🛠️ Testing Tools Used

| Tool                      | Purpose                                 |
| ------------------------- | --------------------------------------- |
| **Jest**                  | Test runner and assertion library       |
| **Supertest**             | API endpoint testing                    |
| **mongodb-memory-server** | In-memory MongoDB for integration tests |

---

### 🔍 Running Tests

```bash
npm test
```

This will:

* Run all tests (unit, integration, API)
* Generate a detailed coverage report
* Output a summary in the terminal
* Create a `coverage/` folder with an HTML report

---

### 📸 Test Coverage Screenshot

After running tests, open the coverage report:

start coverage/lcov-report/index.html

![Screenshot 2025-06-22 164226](https://github.com/user-attachments/assets/2782a25a-1091-4daa-b6e6-03cabec4a954)

📌 Example:
![Screenshot 2025-06-22 162724](https://github.com/user-attachments/assets/726a9426-38fa-4322-a705-4effdf6d39ed)

``

📌 **Example:**

![Test Coverage](./screenshots/coverage.png)

---

## 📁 Project Structure

``
book-api/
├── models/
│   └── Book.js
├── routes/
│   └── books.js
├── tests/
│   ├── book.test.js
│   └── setup.js
├── server.js
├── package.json
├── .env
└── README.md
```

```

## 📬 Contact

Made with ❤️ by [Tejaswi Kumar](https://github.com/Tejas08wi)

---
