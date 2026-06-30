const db = require('../connection');
const respones = require('../response');


const createTask = (req,res)=>{
    const {title} = req.body;
    const userId = req.user.id;

    if(!title){
        return response(400,null,"data tidak boleh kosong",res);
    }

    const sqlCreateTask = 'INSERT INTO tasks (title) VALUE (?)';
    db.query(sqlCreateTask,[title],(err,result)=>{

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


module.exports = {createTask};