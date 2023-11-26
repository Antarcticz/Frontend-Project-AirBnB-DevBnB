const router = require('express').Router()
const userModel = require('../models/userModel')
const auth = require('../auth/auth')

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);

router.get('/me', auth.verifyToken, userModel.getUserData);
router.get('/', userModel.getAllUsers);

module.exports = router