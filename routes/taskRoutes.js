const express =  requier('express');
const routes = express.Routes();
const {createTask} = require("../controllers/taskController");
const authMiddleware = require('../middleware/authMiddleware')

// route create task
routes.post("/tasks",authMiddleware,createTask);