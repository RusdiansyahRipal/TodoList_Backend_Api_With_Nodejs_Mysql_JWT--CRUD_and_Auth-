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

// updateTask
const updateTask = (req,res)=>{
            /* ======== menyimpan data yang dibutuhkan ============= */
        // 1. mengkap id task / id todo yang dikirim melalui parameter
            const {id} = req.params;
        // 2. menangkap data yang akan diubah yang dirim melalui post (form)
            const {title,status} = req.body;
        // 3. menangkap data user yang sedang login
            const userId = req.user.id;

            /** VALIDASI */
        // 1. validasi data tidak boleh kosong
            if(!title || !status) {
                return response(400,null,'DATA TIDAK BOLEH KOSONG', res)
            }

            /** MENULIS  QUERY SQL */
        // 1. data yang dapat diupdate adalah data yang id todo (todo) milik dari user yang login
            const sqlUpdate = `UPDATE tasks SET title = ?, status = ? WHERE id = ? AND user_id = ?`; 

            /** MENJALANKAN QUERY SQL */
            db.query(sqlUpdate,[title, status, id, userId],(err,result)=>{
        // validasi jika error
                if(err){
                    return response ( 500, null, err.message, res);
                }

        // validasi jika data tidak ditemukan atau task/todo bukan milik user atau gagal mengubah data
                if(result.affectedRows === 0){
                    return response (404, null, 'DATA TIDAK DITEMUKAN', res)
                }

                return response(200, result, 'DATA BERHASIL DIUBAH', res);

            })

}

// deleteTask

const deleteTask = (req,res)=>{
        /**====MENGAMBIL DATA ATAU VARIABEL YANG DIBUTHKATAN===== */
        // mengambil id yang dikirim melalui parameter
        const {id} = req.params;

        // mengambil id yang berhasil login
        const userId = req.user.id;

        /**====VALIDASI==== */
        // id yang dikirim harus terisi tidak boleh kosong
        if (!id){
            return response(400,null,'PILIH TODO YANG MAU DIHAPUS TERLEBIH DULU', res);
        }

        /**====MEMBUAT PERINTAH SQL ATAU QUERY SQL ==== */
        const sqlDelete = 'DELETE FROM tasks WHERE id = ? AND user_id = ?'
        
        /**=== MENJALANKAN SQL ATAU MENJALANKAN QUERY === */
        db.query(sqlDelete,[id,userId],(err,result)=>{

            if(err){
                return response(500,null,err.message, res)
            }

            if(result.affectedRows === 0){
                return response(404, result, 'Data tidak ada', res)
            }

            return response(200,result,'berhasil dihapus', res)
        })
}

module.exports = {createTask, getTask, updateTask, deleteTask};