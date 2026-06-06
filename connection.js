const mysql = require ("mysql2");

const db = mysql.createConnection(
    {
        "host" : "localhost",
        "user" : "root",
        "password" : "",
        "database" : "task_api"
    }
);
db.connect((err) => {
        
    if(err) {
        console.log("Koneksi database Gagal")
    } 
    else {
        console.log("koneksi database berhasil")
    }
});

module.exports = db;
