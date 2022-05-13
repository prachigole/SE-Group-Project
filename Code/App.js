const express = require('express')

const path = require('path')

const session = require('express-session')

const app = express()

const authRoutes = require('./Routes/authRoutes')

const flash = require('connect-flash');

const userRoute = require('./Routes/userRoutes')

const adminRoute = require('./Routes/adminRoutes')

const bodyParser = require('body-parser')

const Feedback = require('./Model/feedback')

const user_progress = require('./Model/user_progress')

const user_meal_consumption = require('./Model/user_meal_consumption')

const Food = require('./Model/food')

const Excercise = require('./Model/exercise')

const progressRoute = require('./Routes/progressRoutes')



app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });


app.use(bodyParser.json());

app.use(session({
      secret:'my secret',
}))

app.use(flash())

app.use(authRoutes)

app.use(userRoute)

app.use(adminRoute)

app.use(progressRoute)

let PORT = process.env.PORT || 5000

app.listen(PORT)

// set template engine
app.set('view engine', 'ejs')
app.set('views', 'Views')


console.log(path.join(__dirname, 'public'))
//add static files path
app.use(express.static(path.join(__dirname, 'public')))

const dbconnection = require('./Utils/dbConnection')

const User = require('./Model/user') 

const UserGoal = require('./Model/userGoal')

const daily_meal = require('./Model/daily_meal')

UserGoal.belongsTo(User)
User.hasMany(UserGoal)

Feedback.belongsTo(User)
User.hasMany(Feedback)

user_meal_consumption.belongsTo(User)
User.hasMany(user_meal_consumption)

user_meal_consumption.belongsTo(Food)
Food.hasMany(user_meal_consumption)

daily_meal.belongsTo(User)
User.hasMany(daily_meal)

user_progress.belongsTo(User)
User.hasMany(user_progress)


//Check the database connection
const dbConnectionCheck = async () => { 
      try {
            await dbconnection.authenticate()
            console.log("Database Connected Successfully")
            await dbconnection.sync()
            //{alter: true}
            //{force:true}
            console.log("Tables successfully created")
      } catch (error) {
            console.log("Error in database")
      }
}
dbConnectionCheck()

app.use('*', (req,res,next) =>{
      res.render('404',{session:req.session})
})                                                      
