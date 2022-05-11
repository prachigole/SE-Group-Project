const express = require('express')

const router = express.Router()

const authController = require('../Controller/authController')

router.get('/login', authController.login)

router.get('/register', authController.register)

router.post('/register', authController.postRegister)

router.post('/send-otp', authController.sendOtp)

router.get('/validate-otp', authController.getvalidateOtp)

router.post('/validate-otp', authController.postvalidateOtp)

module.exports = router