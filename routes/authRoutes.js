const express = require('express')
const router = express.Router();
const {register} =  require('../controllers/authController')


router.post('/register',register)

router.get('/',(req,res)=>{
    res.send('jalan udah')
})

module.exports = router;