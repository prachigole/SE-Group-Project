const express = require('express')

const isAuth = require('../Middleware/isAuth')

const router = express.Router()

const auth = require('../Middleware/isAuth')

const userController = require('../Controller/userController')

router.get('/user', userController.user)

router.post('/user', userController.userPost)

router.get('/bmi', userController.bmi)

router.post ('/bmi', userController.postBmi)

router.get('/profile', userController.profile)

router.post('/profile', userController.saveProfile)

router.get('/logout', userController.logout)

router.get('/add-food-request', userController.addRequestFood)

router.post('/add-food-request', userController.addRequestFoodPost)

module.exports = router