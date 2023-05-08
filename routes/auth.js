const express = require('express')
const {register, login} = require('../controllers/auth.js')

const router = express.Router();

//register ve login post işlemi, bunları burada kullanabilmmek için controllerin içinde export, burda da import lazım
router.post('/register', register)
router.post('/login', login)

module.exports = router 

//bunları ana index.js içinde import etmek lazım