const express =  require('express');
const router = express.Router();
const {createTask, getTask, updateTask} = require("../controllers/taskController");
const authMiddleware = require('../middleware/authMiddleware');
// route menyimpan task task
router.post("/tasks",authMiddleware,createTask);

// route menampilkan  task

router.get("/tasks",authMidlleware,getTask)

// route ubah task

router.put("/task/:id",authMiddleware,updateTask);



module.exports = router;