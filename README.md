# Todo REST API with Node.js, Express.js, MySQL & JWT Authentication

## 📌 Description
Todo REST API adalah backend API untuk mengelola data tugas pengguna. 
Project ini dibangun menggunakan Node.js, Express.js, dan MySQL dengan 
JWT Authentication untuk autentikasi dan authorization.

API ini menyediakan fitur registrasi, login, serta CRUD task, dengan 
setiap pengguna hanya dapat mengakses dan mengelola task miliknya sendiri.

## 🚀 Features

- User Registration
- User Login
- Password Hashing with bcrypt
- JWT Authentication
- Authorization Middleware
- Input Validation
- Create Task
- Get User's Tasks
- Update Task
- Delete Task
- User-based Task Authorization

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- JWT
- bcrypt

## 🧰 Development Tools

- Postman
- Git
- GitHub

## 📁 Folder Structure

APITODO/
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── connection.js
├── index.js
├── response.js
├── package.json
├── package-lock.json
└── README.md

## 🗄 Database Schema

Project ini menggunakan MySQL sebagai database relasional.

### Tabel `users`

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | INT(11) | Primary Key, Auto Increment |
| `username` | VARCHAR(255) | Username pengguna |
| `email` | VARCHAR(100) | Email pengguna, Unique |
| `password` | VARCHAR(255) | Password yang telah di-hash |
| `created_at` | TIMESTAMP | Waktu user dibuat |

### Tabel `tasks`

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | INT(11) | Primary Key, Auto Increment |
| `user_id` | INT(11) | ID user pemilik todo |
| `title` | VARCHAR(255) | Judul todo |
| `status` | ENUM('pending', 'done') | Status todo |
| `created_at` | TIMESTAMP | Waktu todo dibuat |

### Relasi

- Satu user dapat memiliki banyak todo.
- Setiap todo dimiliki oleh seorang user.
- `tasks.user_id` digunakan untuk menghubungkan todo dengan user yang login.
- Data todo difilter berdasarkan `user_id` dari user yang telah terautentikasi.

## 📌 API Endpoints

## 🔐 Authentication Flow

## ⚙️ Installation

## 👨‍💻 Author

## 🚀 Future Improvements