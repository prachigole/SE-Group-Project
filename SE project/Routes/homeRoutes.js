const express = require('express')

const router = express.Router()

const auth = require('../Middleware/isAuth')

const homeController = require('../Controller/homeController')