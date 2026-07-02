const express =  require('express');
const router = express.Router();
const {createTask, getTask} = require("../controllers/taskController");
const authMiddleware = require('../middleware/authMiddleware');
const authMidlleware = require('../middleware/authMiddleware');

// route create task
router.post("/tasks",authMiddleware,createTask);

// route get task

router.get("/tasks",authMidlleware,getTask)


module.exports = router;