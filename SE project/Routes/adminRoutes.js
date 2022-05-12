const express = require('express')

const router = express.Router()

const auth = require('../Middleware/isAdmin')

const adminController = require('../Controller/adminController')

router.get('/admin/newExcercise', adminController.SaveExcercise)

router.post('/admin/newExcercise', adminController.postSaveExcercise)

router.get('/admin/editExcercise/:id', adminController.editExcercise)

router.post('/admin/editExcercise', adminController.posteditExcercise)

router.get('/admin/deleteExcercise/:id', adminController.deleteExcercise)

router.get('/admin/dashboard', adminController.dashboard)

router.get('/admin/newFoodItem', adminController.Savefood)

router.post('/admin/newFoodItem', adminController.postSavefood)

router.get('/admin/editFoodItem/:id', adminController.editfood)

router.post('/admin/editFoodItem', adminController.posteditfood)

router.get('/admin/deleteFood/:id', adminController.deleteFood)

router.get('/admin/adminProfile', adminController.SaveAdminProfile)

router.post('/admin/adminProfile', adminController.postSaveAdminProfile)

router.get('/admin/removeSuggestedFood/:id', adminController.removeSuggestion)

router.get('/admin/addSuggestedFood/:id', adminController.addSuggestion)

module.exports = router