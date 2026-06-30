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
            message : 'middleware berhasil',
            user : req.user
        })
})
router.get('/',(req,res)=>{
    res.send('jalan udah')
})

module.exports = router;