const express =  require('express');
const router = express.Router();
const {createTask, getTask, updateTask, deleteTask} = require("../controllers/taskController");
const authMiddleware = require('../middleware/authMiddleware');
// route menyimpan task task
router.post("/tasks",authMiddleware,createTask);

// route menampilkan  task

router.get("/tasks", authMiddleware,getTask)

// route ubah task

router.put("/tasks/:id",authMiddleware,updateTask);

// route hapus task

router.delete("/tasks/:id",authMiddleware, deleteTask)


module.exports = router;