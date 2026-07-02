const db = require('../connection');
const response = require('../response');

// createTask
const createTask = (req,res)=>{
    const {title} = req.body;
    const userId = req.user.id;

    if(!title){
        return response(400,null,"data tidak boleh kosong",res);
    }

    const sqlCreateTask = 'INSERT INTO tasks (title, user_id) VALUE (?, ?)';
    db.query(sqlCreateTask,[title,userId],(err,result)=>{

        if(err){
            return response(400,null,err.message,res)
        }

        return response(
            200,
            result,
            'data berhasil disimpan',
            res
        )
    })

}

// getTask

const getTask = (req,res)=>{
    const userId = req.user.id;
   
    const sqlGetTask = 'SELECT * FROM tasks WHERE user_id = ? ';
    db.query(sqlGetTask,[userId],(err,result)=>{
        
        if(err){
            return response(500,null,err.message,res)
        }

        if(result.length === 0) {
            return response(null,result,'belum ada todo yang kamu buat', res)
        }

        return response(200,result,'daftar todo',res)
    })

}


module.exports = {createTask,getTask};