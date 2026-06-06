
const express = require('express')
const app = express()
const db = require('./connection');


app.use(express.json())
app.listen(3000, () => {
  console.log("server running")
})