const express = require('express')

const router = express.Router()

const auth = require('../Middleware/isAuth')

const userController = require('../Controller/userController')

router.use(express.json())

router.get('/user', userController.user)

router.post('/user',userController.userPost)

router.get('/bmi', userController.bmi)

router.post('/bmi', userController.postBmi)

module.exports = router