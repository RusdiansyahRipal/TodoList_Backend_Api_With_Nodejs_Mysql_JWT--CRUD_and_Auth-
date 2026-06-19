const express = require('express')
const router = express.Router();
const {register,login} =  require('../controllers/authController')
const authMidlleware = require('../middleware/authMiddleware')


router.post('/register',register);
router.post('/login',login);

router.get('/test',
    authMidlleware,
    (req,res)=>{
        res.json({
            message : 'controller masih dijalankan'
        })
})
router.get('/',(req,res)=>{
    res.send('jalan udah')
})

module.exports = router;