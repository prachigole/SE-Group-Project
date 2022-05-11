const express = require('express')

const router = express.Router()

const auth = require('../Middleware/isAuth')

const userController = require('../Controller/userController')


router.get('/user', userController.user)

router.get('/bmi', userController.bmi)

router.post('/bmi', userController.postBmi)

module.exports = router