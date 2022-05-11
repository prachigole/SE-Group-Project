const express = require('express')

const router = express.Router()

const auth = require('../Middleware/isAdmin')

const exeController = require('../Controller/excerciseController')

router.get('/Excercise/Admin/NewExcercise', exeController.SaveExcercise)

router.post('/Excercise/Admin/NewExcercise', exeController.postSaveExcercise)

router.get('/Excercise/Admin/EditExcercise/:id', exeController.editExcercise)

router.post('/Excercise/Admin/EditExcercise', exeController.posteditExcercise)

router.get('/Excercise/Admin/DeleteExcercise/:id', exeController.deleteExcercise)



module.exports = router