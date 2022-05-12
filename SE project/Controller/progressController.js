const axios = require("axios");

const User = require('../Model/user')

const UserGoal = require('../Model/userGoal')

const UserProgress=require('../Model/user_progress')

const { sort } = require("../Node_Modules/semver/semver")
const Exercise = require("../Model/exercise")
const Meal=require("../Model/user_meal_consumption")
const date = require('date-and-time');
const { join } = require("path");
const food = require("../Model/food");

exports.progress = async(req,res,next)=>{
    res.render("progress");
}

exports.postprogress=async(req,res,next)=>{
    const userGoal = await UserGoal.findAll(
        {
              where:
              {
                    userUserId: 1//req.session.user.user_id
              }
        })
    console.log(userGoal[0].dataValues);
    let updatedWeight=req.body.value;
    const bmi= (req.body.value)/((userGoal[0].dataValues.height*userGoal[0].dataValues.height)/10000);   
    let goal_weight=60; // usergoal
    let currentWeight=userGoal[0].dataValues.weight;
    let remarks
    const type=userGoal[0].dataValues.goal_type;
    
    if(type==1)
    {
        remarks="You are achieving your goal"
    }    
    else if(type==2){
        let w=updatedWeight-currentWeight;
        remarks="You have sucessfully followed your diet and you have gained "+w+" kg";
    }
    else{
        let w=currentWeight - updatedWeight;
        remarks="You have sucessfully followed your diet and you have loss "+w+" kg";     
    }
    remarks=remarks.toString();
    UserProgress.create({
        current_weight:userGoal[0].dataValues.weight,
        updated_weight:parseInt(req.body.value),
        bmi,
        remarks,
        userUserId:1 //session
    })
        .then(result=> res.redirect('/daily_progress'))
        .catch(err=>console.log(err))
}

exports.daily_progress=async(req,res,next)=>{
    const userp=await UserProgress.findAll(
        {
            where:{
                userUserId:1

            },
            order:[
                ['progress_id','DESC']
            ]
        })

    const usergoal=await UserGoal.findAll({
        where:{
            userUserId:1
        },
        order:[
            ['goad_id','DESC']
        ]
    })

    const exercise=await Exercise.findAll({
        where:{
            exercise_level:usergoal[0].dataValues.activity_type
        }
    })

    exercise.forEach(e=>{
        console.log(e.dataValues.exercise_name)
    })

    res.render('daily_progress',{userp:userp[0].dataValues,exercise,goal_day:usergoal[0].dataValues.goal_duration});
}

exports.user_daily=async(req,res)=>{
    
    const date1=new Date();
    const days=req.params.id;
    console.log(days)
    let date2=date1 //usergoal-> created at
        for(let i=1;i<days;i++){
            date2=date.addDays(date2,1)
        }
        console.log(date2);
    const meal=await Meal.findAll({
        where:{
            userUserId:1, //session
            consumption_date:date2
        },
        include: [{
            model: food,
            required: true
           }]    
    })

    if(meal.length==0)
    {    
        console.log("Founded") //404 Page
        res.render('Error 404')
    }
    else{
        console.log("Not Founded")
    const userGoal = await UserGoal.findAll(
        {
              where:
              {
                    userUserId: 1//req.session.user.user_id
              }
        })
    let cal=0
    meal.forEach(m=>{
        cal+= m.dataValues.Quantity * m.dataValues.food.calories
    })
    date2=date.format(date2,"DD/MM/YYYY");
    console.log(date2)
    res.render("user_daily_progress",{meal:meal,goal_cal:userGoal[0].dataValues.targetted_calories,user_cal:cal,date:date2,day:days});
    }
}