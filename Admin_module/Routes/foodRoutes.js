const express = require('express')

const router = express.Router()

const auth = require('../Middleware/isAdmin')

const foodController = require('../Controller/foodController')

router.get('/food/Admin/Dashboard', foodController.dashboard)

router.get('/food/Admin/NewFoodItem', foodController.Savefood)

router.post('/food/Admin/NewFoodItem', foodController.postSavefood)

router.get('/food/Admin/EditFoodItem/:id', foodController.editfood)

router.post('/food/Admin/EditFoodItem', foodController.posteditfood)

router.get('/food/Admin/DeleteFood/:id', foodController.deleteFood)

router.get('/User/Admin/AdminProfile', foodController.SaveAdminProfile)

router.post('/User/Admin/AdminProfile', foodController.postSaveAdminProfile)


router.get('/food/Admin/RemoveSuggestedFood/:id', foodController.removeSuggestion)

router.get('/food/Admin/AddSuggestedFood/:id', foodController.addSuggestion)




module.exports = router