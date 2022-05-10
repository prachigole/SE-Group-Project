
const axios = require("axios");

const User = require('../Model/user')

const UserGoal = require('../Model/userGoal')


exports.user = async (req,res,next) => {
      const users = await UserGoal.findAll(
            {
                  where:
                  {
                        userUserId: req.session.user.user_id
                  },
                  order:[
                        ['createdAt','DESC']
                  ]
            })
      console.log(users[0].dataValues)
      res.render('user')
} 

const getAge = (dob) => { 
      {
      var today = new Date();
      var birthDate = new Date(dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
            age--;
      }
      return age;
      }
}

exports.bmi = async (req,res,next) =>{
     const weight = req.session.userDetails.weight
     const height = req.session.userDetails.height

     const bmi = {
      method: 'GET',
      url: 'https://mega-fitness-calculator1.p.rapidapi.com/bmi',
      params: {weight: weight, height: height},
      headers: {
        'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com',
        'X-RapidAPI-Key': 'd404a45337msh012e315fa5b2587p1af251jsn8c7cc37fbba4'
      }
    };
      const response = await axios.request(bmi)
      req.session.bmi = response.data.info.bmi
      console.log(response)
      if(response.status == 200)
          return res.render('bmi', 
                        {data : response.data.info
                  })
      else
          console.log("Error on fetching Bmi details")
      
}

exports.postBmi = async (req,res,next) =>{
      let age = getAge(req.session.userDetails.dob)
      let gender;

      if(req.session.userDetails.gender == 1)
            gender = 'male'
      else if(req.session.userDetails.gender == 2)
            gender = 'female'
      else
            gender = 'other'

      console.log(req.session.userDetails)
      const options1 = {
            method: 'GET',
            url: 'https://bmr-and-tmr.p.rapidapi.com/calculate-bmr',
            params: {weight: req.session.userDetails.weight, height: req.session.userDetails.height, age: age, sex: gender, inImperial: 'false'},
            headers: {
            'X-RapidAPI-Host': 'bmr-and-tmr.p.rapidapi.com',
            'X-RapidAPI-Key': 'd404a45337msh012e315fa5b2587p1af251jsn8c7cc37fbba4'
            }
      };

      const response = await axios.request(options1)
      let bmr = response.data.bmr
      const activity_type = req.session.userDetails.activityLevel
      const weight = req.session.userDetails.weight
      const goalWeight = req.session.userDetails.goalWeight
      let goal_type

      if(weight > goalWeight)
            goal_type = 1
      else if(goalWeight > weight)
            goal_type = 2
      else
            goal_type = 3


      if(activity_type == 1)
            bmr += 300
      else if(activity_type == 2)
            bmr += 600
      else
            bmr += 900

       User.create({
            name: req.session.userDetails.username,
            email_id: req.session.email,
            dob: req.session.userDetails.dob,
            gender: req.session.userDetails.gender,
            user_type: 2,
      })
      .then(result =>{
            console.log(result.dataValues)
            let user
            User.findAll({where: {email_id: req.session.email}})
            .then(users =>{ req.session.user = users[0]
            
            UserGoal.create({
                  weight: req.session.userDetails.weight,
                  height: req.session.userDetails.height,
                  activity_type:req.session.userDetails.activityLevel,
                  bmi: req.session.bmi,
                  goal_duration: req.session.userDetails.duration,
                  targetted_calories: bmr,
                  goal_weight: req.session.userDetails.goalWeight,
                  goal_type: goal_type,
                  userUserId: req.session.user.user_id
            })
            .then(result => res.redirect('/user'))
            })
      })
      .catch(err => res.redirect('/login'))
 }

exports.profile = async (req,res,next) => {

      const user = await User.findOne({where: {email_id: req.session.email}})
      const userId = user.user_id
      const userGoal = await UserGoal.findOne({where: {userUserId: userId}})
      
      res.render('profile',{usergoal: userGoal,user:user})
}
 
exports.saveProfile = async (req,res,next) => {
      const user = await User.findOne({where: {email_id: req.session.email}})
      const userId = user.user_id
     
      User.update({
                  email_id: req.body.email,
                  gender: req.body.gender
      },
      {where: {email_id: req.session.email}})
      .then(result =>{
            console.log("user:" + result)
            UserGoal.update({
                  weight: parseFloat(req.body.weight),
                  goal_weight: parseFloat(req.body.goalWeight),
                  height:  parseInt(req.body.height),
                  activity_type: req.body.activityType,
                  goal_duration: req.body.goalDuration
            },{where: {userUserId: userId}})
      .then(result =>{
            console.log(result)
      })
      })
      console.log(req.body)
}



    
  