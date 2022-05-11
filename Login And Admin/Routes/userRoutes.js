const express = require('express')

const isAuth = require('../Middleware/isAuth')

const router = express.Router()

const auth = require('../Middleware/isAuth')

const userController = require('../Controller/userController')

router.get('/user', userController.user)

router.get('/bmi', userController.bmi)

router.post ('/bmi', userController.postBmi)

router.get('/profile', userController.profile)

router.post('/profile', userController.saveProfile)

module.exports = router