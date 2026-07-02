
const express = require('express')
const app = express()
const db = require('./connection');
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')


app.use(express.json())
app.use(authRoutes);
app.use(taskRoutes);
app.listen(3000, () => {
  console.log("server running")
})