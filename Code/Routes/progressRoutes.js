const express = require('express')

const router = express.Router()

//const auth = require('../Middleware/isAuth')

const progressController = require('../Controller/progressController')

router.get("/progress",progressController.progress);
router.post("/progress",progressController.postprogress);
router.get("/daily_progress",progressController.daily_progress);
router.get("/daily_progress/:id",progressController.user_daily);
router.post("/check_data/:id",progressController.checkProgress);
router.get("/user_daily_progress",progressController.user_daily_progress);
module.exports=router