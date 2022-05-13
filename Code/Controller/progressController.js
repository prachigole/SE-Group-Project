const axios = require("axios");

const User = require('../Model/user')

const UserGoal = require('../Model/userGoal')

const UserProgress=require('../Model/user_progress')
const Exercise = require("../Model/exercise")
const Meal=require("../Model/user_meal_consumption")
const date = require('date-and-time');
const { join } = require("path");
const food = require("../Model/food");
const { response } = require("express");
const { user } = require("./userController");

exports.progress = async(req,res,next)=>{
    if(req.session.user){
    const userGoal = await UserGoal.findAll(
        {
              where:
              {
                    userUserId: req.session.user.user_id
              },
              order:[
                    ['createdAt','DESC']
              ]
        })  
    let date1=new Date();
    let date2=userGoal[0].dataValues.createdAt;
    let goal_dur=userGoal[0].dataValues.goal_duration;

    let date3=date.addDays(date2,goal_dur*28);   
    if(date1==date3)
        res.render("progress");
    else
        res.redirect("user_daily_progress")
    }
    else   
        res.redirect("/login")
}

exports.postprogress=async(req,res,next)=>{
    if(req.session.user){
    const userGoal = await UserGoal.findAll(
        {
              where:
              {
                    userUserId: req.session.user.user_id
              },
              order:[
                    ['createdAt','DESC']
              ]
        })

    let updatedWeight=req.body.value;
    const bmi= (req.body.value)/((userGoal[0].dataValues.height*userGoal[0].dataValues.height)/10000);   
    let goal_weight=60; // usergoal
    let currentWeight=userGoal[0].dataValues.weight;
    let remarks
    const type=userGoal[0].dataValues.goal_type;
    
    if(type==2)
    {
        remarks="You are achieving your goal"
    }    
    else if(type==3){
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
        userUserId:req.session.user.user_id //session
    })
        .then(result=> res.redirect('/daily_progress'))
        .catch(err=>console.log(err))
    }
    else    
        res.redirect('login')
}

exports.daily_progress=async(req,res,next)=>{
    if(req.session.user){    
    const userp=await UserProgress.findAll(
        {
            where:{
                userUserId:req.session.user.user_id

            },
            order:[
                ['progress_id','DESC']
            ]
        })

    const usergoal=await UserGoal.findAll({
        where:{
            userUserId:req.session.user.user_id
        },
        order:[
            ['goad_id','DESC']
        ]
    })

    const exercise=await Exercise.findAll({
        where:{
            excercise_level:usergoal[0].dataValues.activity_type
        }
    })
    res.render('daily_progress',{userp:userp[0].dataValues,exercise,goal_day:usergoal[0].dataValues.goal_duration});
    }
    else    
        res.redirect('login')

}

exports.user_daily_progress=async(req,res,next)=>{
    if(req.session.user){

    const usergoal=await UserGoal.findAll({
        where:{
            userUserId:req.session.user.user_id
        },
        order:[
            ['goad_id','DESC']
        ]
    })

    const exercise=await Exercise.findAll({
        where:{
            excercise_level:usergoal[0].dataValues.activity_type
        }
    })
    res.render('udaily_progress',{exercise,goal_day:usergoal[0].dataValues.goal_duration});
    }
    else    
        res.redirect('login')

}


exports.checkProgress=async(req,res)=>{
    const usergoal=await UserGoal.findAll({
        where:{
            userUserId:req.session.user.user_id
        },
        order:[
            ['goad_id','DESC']
        ]
    })    
        let date1=usergoal[0].dataValues.createdAt
        let datax=req.params.id-1
        let date2=date1
        let date3=new Date()
        if(datax>0)
            date2=date.addDays(date1,datax)
        let date4=date2.setHours(0,0,0,0);
        let date5=date3.setHours(0,0,0,0);
        console.log(date4)
        console.log(date5)
           
        if(date4>date5)
            res.json(3)
        else{
            const meal=await Meal.findAll({
                where:{
                    userUserId:req.session.user.user_id, //session
                    consumption_date:date2
                },
                include: [{
                    model: food,
                    required: true
                   }]    
            })
        
            if(meal.length>0)
            {    
                res.json(1)
            }
            else
                res.json(2)
        }
}

exports.user_daily=async(req,res)=>{
    if(req.session.user){
    // const date1=new Date();
    // const days=req.params.id;   
    // let date2=date1 //usergoal-> created at
    //     for(let i=1;i<days;i++){
    //         date2=date.addDays(date2,1)
    //     }
    //     console.log(date2);
    const usergoal=await UserGoal.findAll({
        where:{
            userUserId:req.session.user.user_id
        },
        order:[
            ['goad_id','DESC']
        ]
    })
        const date1=usergoal[0].dataValues.createdAt;
        const days=req.params.id-1;
        console.log(days)
        let date2=date1 //usergoal-> created at
        if(days>0)
            date2=date.addDays(date2,days)
        console.log(date2)
    const meal=await Meal.findAll({
        where:{
            userUserId:req.session.user.user_id, //session
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
                    userUserId: req.session.user.user_id
              }
        })
    let cal=0
    meal.forEach(m=>{
        cal+= m.dataValues.Quantity * m.dataValues.food.calories
    })
    date2=date.format(date2,"DD/MM/YYYY");  
    res.render("user_daily_progress",{meal:meal,goal_cal:userGoal[0].dataValues.targetted_calories,user_cal:cal,date:date2,day:days});
    }
    }
    else    
        res.redirect("/login")
}