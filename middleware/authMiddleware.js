const { response } = require('express');
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

    next()
}

module.exports = authMidlleware;