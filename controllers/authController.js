const response = require('../response')
const db = require('../connection.js')

// 1. REGISTER =========================================================
const register = (req,res)=>{

    // ambil data dar req.bod
    const { username, email, password} = req.body

    // validasi data tidak kosing
    if( !username || !email || !password) {
        return response(400,null,'Semua Data Wajib Di Isi',res)
    }    

    // cek apakah email sudah ada atau belum

    const sqlCekEmail = 'SELECT * From users WHERE email = ?';

    db.query(sqlCekEmail,[email],(err,result)=>{
        // cek error quey
        if(err){
            return response(400,null,err.message,res);
        }

        // cek email
        if( result.length > 0 ) {
            return response(400,null,'Email Sudah Terdafatar',res)
        }

        // respon jika berhasil
    response (
        200, { username, email, password }, "Email Belum Terdafatar", res
    )
    })
    


}

module.exports = {
    register
}