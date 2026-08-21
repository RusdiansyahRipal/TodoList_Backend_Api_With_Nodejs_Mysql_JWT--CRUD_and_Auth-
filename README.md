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

### Authentication

| Method | Endpoint | Deskripsi | Authentication |
|---|---|---|---|
| POST | `/register` | Membuat akun pengguna baru | Tidak |
| POST | `/login` | Login pengguna dan mendapatkan JWT | Tidak |

### Task

| Method | Endpoint | Deskripsi | Authentication |
|---|---|---|---|
| POST | `/tasks` | Membuat todo baru | Ya |
| GET | `/tasks` | Mengambil daftar todo milik user | Ya |
| PUT | `/tasks/:id` | Mengubah todo milik user | Ya |
| DELETE | `/tasks/:id` | Menghapus todo milik user | Ya |

## 🔐 Authentication Flow

Project ini menggunakan JWT (JSON Web Token) untuk melakukan autentikasi pengguna.

### Alur Authentication

1. User melakukan registrasi melalui endpoint `/register`.
2. User melakukan login melalui endpoint `/login` menggunakan email dan password.
3. Server memvalidasi email dan password.
4. Jika login berhasil, server membuat JWT menggunakan `jwt.sign()`.
5. JWT dikirimkan kepada client.
6. Client mengirimkan JWT pada request yang membutuhkan autentikasi melalui header `Authorization`.
7. `authMiddleware` mengambil token dan melakukan verifikasi menggunakan `jwt.verify()`.
8. Jika token valid, data user dari token disimpan ke `req.user`.
9. Controller menggunakan `req.user.id` untuk mengetahui user yang sedang login.
10. Data todo kemudian diproses berdasarkan `user_id` milik user tersebut.

### Authorization Header

Request yang membutuhkan autentikasi harus menyertakan JWT pada header:

http
Authorization: Bearer <token>




### 🧠 Kenapa bagian ini penting?

README kita bukan cuma menjelaskan **"API ini punya JWT"**, tetapi menjelaskan **bagaimana JWT digunakan di proyek kita**.

Dan perhatikan kalimat nomor 8–10. Itu sebenarnya merangkum konsep yang kemarin membuatmu agak bingung:


JWT
 ↓
jwt.verify()
 ↓
decoded
 ↓
req.user
 ↓
req.user.id
 ↓
tasks.user_id

## ⚙️ Installation

Ikuti langkah-langkah berikut untuk menjalankan project Todo REST API di local environment.

### Prerequisites

Pastikan sudah menginstal:

- Node.js
- npm
- MySQL
- Git
- Postman (untuk testing API)

### 1. Clone Repository

Clone repository dari GitHub:

``bash
git clone https://github.com/RusdiansyahRipal/TodoList_Backend_Api_With_Nodejs_Mysql_JWT--CRUD_and_Auth-

masuk ke folder project

cd TodoList_Backend_Api_With_Nodejs_Mysql_JWT--CRUD_and_Auth-

### 2. Install Dependencies
npm install

### 3. Konfigurasi Database

Project ini menggunakan MySQL sebagai database.
Buat database dengan nama:

CREATE DATABASE task_api;

Kemudian buat tabel users dan tasks sesuai dengan struktur database yang digunakan pada project.
Sesuaikan konfigurasi koneksi database pada file connection.js dengan konfigurasi MySQL pada local environment.

Contoh:

const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_api'
});


module.exports = db;

### 4. Jalankan Server

Jalankan server menggunakan perintah:

node index.js

Jika server berhasil dijalankan, API dapat diakses melalui:

http://localhost:3000

### 5. Testing API

API dapat diuji menggunakan Postman dengan endpoint berikut:

POST   /register
POST   /login
POST   /tasks
GET    /tasks
PUT    /tasks/:id
DELETE /tasks/:id

Endpoint yang membutuhkan autentikasi harus menyertakan JWT pada header:

Authorization: Bearer <token>

Token diperoleh setelah user berhasil melakukan login melalui endpoint:

POST /login


## 👨‍💻 Author

**Ripal Rusdiansyah**

Backend Developer Enthusiast

- GitHub: https://github.com/RusdiansyahRipal
- LinkedIn: www.linkedin.com/in/ripal-rusdiansyah

## 🚀 Future Improvements

Beberapa pengembangan yang dapat ditambahkan pada project ini:

- Menggunakan `.env` untuk menyimpan konfigurasi database dan JWT secret.
- Menambahkan pagination pada daftar todo.
- Menambahkan fitur pencarian todo berdasarkan judul.
- Menambahkan filter todo berdasarkan status.
- Menambahkan sorting berdasarkan waktu pembuatan atau status.
- Menggunakan Express Validator untuk validasi request yang lebih terstruktur.
- Menambahkan dokumentasi API menggunakan Swagger/OpenAPI.
- Menambahkan unit testing dan integration testing.
- Melakukan deployment API agar dapat diakses secara online.