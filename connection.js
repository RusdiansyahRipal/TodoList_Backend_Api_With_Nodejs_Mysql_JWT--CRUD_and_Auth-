
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = db;
db.connect((err) => {
        
    if(err) {
        console.log("Koneksi database Gagal")
    } 
    else {
        console.log("koneksi database berhasil")
    }
});

module.exports = db;
