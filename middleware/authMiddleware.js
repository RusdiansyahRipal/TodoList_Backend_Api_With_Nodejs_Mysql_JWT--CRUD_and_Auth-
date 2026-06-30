const  response = require('../response');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'belajar_backend_bersama_ripal';

const authMidlleware = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return response(
            400,
            null,
            'Token tidak ada',
            res
        )
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token,SECRET_KEY)
        req.user = decoded
        next()
    } catch {
        return response(
            401,
            null,
            'token tidak valid',
            res
        )
    }
}

module.exports = authMidlleware;