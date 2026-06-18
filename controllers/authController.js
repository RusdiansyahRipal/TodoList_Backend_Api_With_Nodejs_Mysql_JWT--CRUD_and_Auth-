const response = require('../response');
const db = require('../connection.js');
const bcrypt = require ('bcrypt');
const jwt =  require('jsonwebtoken');

const SECRET_KEY = 'belajar_backend_bersama_ripal'

// 1. REGISTER =========================================================
const register = async (req,res)=>{

    // ambil data dar req.bod
    const { username, email, password} = req.body

    // validasi data tidak kosing
    if( !username || !email || !password) {
        return response(400,null,'Semua Data Wajib Di Isi',res)
    }    

    
    // query cek email
    const sqlCekEmail = 'SELECT * From users WHERE email = ?';
    // query inset user
    const sqlInsertUser = 'INSERT INTO users (email,username,password) VALUES (?,?,?)';
    

    // Menjalankan query cek email
    db.query(sqlCekEmail,[email], async (err,result)=>{
        // cek error quey
        if(err){
            return response(400,null,err.message,res);
        }

        // cek email
        if( result.length > 0 ) {
            return response(400,null,'Email Sudah Terdafatar',res)
        }

        // hash password
        let hashPassword;
        try{
             hashPassword = await bcrypt.hash(password,10)

        } catch (err){
            return response (
                500,
                null,
                err.message,
                res
            )

        }
        

        // menjalankan query insert users
    db.query(sqlInsertUser,[email,username,hashPassword],(err,result)=>{

        if(err){
            return response(500,null,err.message,res)
        }

        return response (
            201,
            result,
            'DATA BERHASIL DISIMPAN',
            res
        )
    })
    })
    
    


}
// 2. LOGIN===============================================================
const login = async(req,res)=>{
    const{email,password} = req.body;

    if (!email || !password) {
        return response(
            400,
            null,
            'DATA TIDAK BOLEH KOSONG',
            res
        )
    }

    const sqlCariEmail = 'SELECT * FROM users WHERE email = ?';
    db.query(sqlCariEmail,[email], async (err,result)=>{
        
        if(err){
            return response(
                400,
                null,
                err.message,
                res
            )
        }

        if(result.length === 0) {
            return response(
                400,
                null,
                'Email atau password salah',
                res
            )
        }

        const isMatch = await bcrypt.compare(
            password,
            result[0].password
        )

        if(!isMatch){
            return response(
                400,
                null,
                'password salah',
                res
            )
        }
        // jwt =====================================================
        const token = jwt.sign(
            {
                id:result[0].id,
                email:result[0].email
            },
            SECRET_KEY,
            {
                expiresIn : '1d'
            }
        )

        return response(
            200,
            {
                token
            },
            'LOGIN BERHASIL',
            res
        )
    })

}

module.exports = {
    register,
    login
}