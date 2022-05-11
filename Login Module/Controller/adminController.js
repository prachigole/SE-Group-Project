const Excercise = require('../Model/excercise')

const Food = require('../Model/food')

const Feedback = require('../Model/feedback')

const User = require('../Model/user')

const levels = { 1 : "Low", 2 : "Medium", 3 : "High"};

exports.SaveExcercise = (req,res) => {
    var exedata = {
        excercise_id : "",
        excercise_name : "",
        excercise_level : null
      };  
    res.render("enterExcercise",{
        formType : "create",
        execerciseLevel : levels,
        excerciseData : exedata,
        message : ""
     });
}

exports.postSaveExcercise = async(req,res) => {
    try {

        var exedata = {
            excercise_id : "",
            excercise_name : req.body.ex_name,
            excercise_level : req.body.ex_level
          };  

        if(exedata.excercise_name != "" && exedata.excercise_level != null)
            {
                Excercise.create(exedata)
                .then(data => {
                    res.redirect("/admin/dashboard");
                }).catch(err => {
                    res.render("enterExcercise",{
                        formType : "create",
                        execerciseLevel : levels,
                        excerciseData : exedata,
                        message: "Something went wrong here !!!"
                    });
                })      
            }
            else {
                res.render("enterExcercise",{
                    formType : "create",
                    execerciseLevel : levels,
                    excerciseData : exedata,
                    message: "Please Enter All the Details !!"
                 });
            }
       
    } catch (error) {
       // res.send("Something Went Wrong :: ERROR :: <br/>"+ error);
       res.render("enterExcercise",{
        formType : "create",
        execerciseLevel : levels,
        excerciseData : exedata,
        message: "Something went wrong here !!!"
     });
    }
};


exports.deleteExcercise = async (req,res) => {

    try {
        await Excercise.destroy({
            where: { excercise_id: req.params.id },
          }).then(data => {
            res.redirect("/admin/dashboard");
        });
    }
    catch (error)
    {
        console.log(error);
    }
    
}

exports.editExcercise = async (req,res) => {
    var exedata = {
        excercise_id : "",
        excercise_name : "",
        excercise_level : null
      };  

      try {

        var dataexe = await Excercise.findOne({ where: { excercise_id : req.params.id } });

        exedata.excercise_id = dataexe.excercise_id;
        exedata.excercise_name = dataexe.excercise_name;
        exedata.excercise_level = dataexe.excercise_level;

        res.render("enterExcercise",{
            formType : "edit",
            execerciseLevel : levels,
            excerciseData : exedata,
            message : ""
         });

      }catch(error)
      {
        res.render("enterExcercise",{
            formType : "edit",
            execerciseLevel : levels,
            excerciseData : exedata,
            message : "Something Went Wrong !!"
         });
      }
    
}

exports.posteditExcercise = async(req,res) => {

    var exedata = {
        excercise_id : req.body.excercise_id,
        excercise_name : "",
        excercise_level : null
      };  

    try {


        
        exedata.excercise_name = req.body.ex_name;
        exedata.excercise_level = req.body.ex_level;

        if(exedata.excercise_name != "" && exedata.excercise_level != null)
            {
                Excercise.update(exedata,{
                    where: { excercise_id: req.body.excercise_id },
                })
                .then(data => {
                    res.redirect("/admin/dashboard");
                }).catch(err => {
                    res.render("enterExcercise",{
                        formType : "edit",
                        execerciseLevel : levels,
                        excerciseData : exedata,
                        message: "Something went wrong here !!!"
                    });
                })      
            }
            else {
                res.render("enterExcercise",{
                    formType : "edit",
                    execerciseLevel : levels,
                    excerciseData : exedata,
                    message: "Please Enter All the Details !!"
                 });
            }
       
    } catch (error) {
       // res.send("Something Went Wrong :: ERROR :: <br/>"+ error);
       res.render("enterExcercise",{
        formType : "edit",
        execerciseLevel : levels,
        excerciseData : exedata,
        message: "Something went wrong here !!!"
     });
    }
};

const foodType = { 1: "Vegetarian", 2: "Non-Vegetarian", 3: "Eggitarian" };
const mealType = { 1: "Breakfast", 2: "Lunch", 3: "Snacks", 4: "Dinner" };;
const genderlist = { 1: "Male", 2: "Female", 3: "Other" };


const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('-');
}

exports.dashboard = async (req, res) => {

    var fooddata = await Food.findAll();// to find all data of food table
    var exedata = await Excercise.findAll();//to find all exercise table
    var feedback = await Feedback.findAll({ where: { feedback_type: 2 } });//to find all fooddata feedbacks

    var counts = {};
    counts.breakfast = await Food.count({ where: { meal_Type: 1 } });
    counts.lunch = await Food.count({ where: { meal_Type: 2 } });
    counts.snacks = await Food.count({ where: { meal_Type: 3 } });
    counts.dinner = await Food.count({ where: { meal_Type: 4 } });
    counts.userCount = await User.count({where:{user_type:2}});
    res.render("dashboard", {
        Foodfeed: feedback,
        excerciseData: exedata,
        foodData: fooddata,
        query: counts,
        Levels: levels,
    });
};


exports.removeSuggestion = async (req, res) => {
    try {
        await Feedback.destroy({
            where: { feedback_id: req.params.id },
        }).then(data => {
            res.redirect("/admin/dashboard");
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.addSuggestion = async (req, res) => {
    var fooddata = await Feedback.findOne({ where: { feedback_id: req.params.id } });

    var food = {
        food_id: fooddata.feedback_id,
        food_name: fooddata.description,
        food_type: 0,
        calory_level: 0,
        quantity: "",
        calories: "",
        meal_type: 0
    };
    res.render("enterFood", {
        formType: "create",
        foodData: food,
        foodType: foodType,
        caloryLevel: levels,
        mealType: mealType,
        message: ""
    });
}

exports.Savefood = (req, res) => {
    var food = {
        food_id: "",
        food_name: "",
        food_type: 0,
        calory_level: 0,
        quantity: "",
        calories: "",
        meal_type: 0
    };
    res.render("enterFood", {
        formType: "create",
        foodData: food,
        foodType: foodType,
        caloryLevel: levels,
        mealType: mealType,
        message: ""
    });
};

exports.deleteFood = async (req, res) => {

    try {
        await Food.destroy({
            where: { food_id: req.params.id },
        }).then(data => {
            res.redirect("/admin/dashboard");
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.editfood = async (req, res) => {

    var food = {
        food_id: "",
        food_name: "",
        food_type: 0,
        calory_level: 0,
        quantity: "",
        calories: "",
        meal_type: 0
    };

    try {

        var fooddata = await Food.findOne({ where: { food_id: req.params.id } });
        food.food_id = fooddata.food_id;
        food.food_name = fooddata.food_name;
        food.food_type = fooddata.food_type;
        food.calory_level = fooddata.calory_level;
        food.quantity = fooddata.quantity;
        food.calories = fooddata.calories;
        food.meal_type = fooddata.meal_type;

        res.render("enterFood", {
            formType: "edit",
            foodData: food,
            foodType: foodType,
            caloryLevel: levels,
            mealType: mealType,
            message: ""
        });

    } catch (error) {
        res.render("enterFood", {
            formType: "edit",
            foodData: food,
            foodType: foodType,
            caloryLevel: levels,
            mealType: mealType,
            message: "Something Went Wrong !!"
        });
    }


};

exports.posteditfood = async (req, res) => {

    var food = {
        food_id: req.body.food_id,
        food_name: "",
        food_type: 0,
        calory_level: 0,
        quantity: "",
        calories: "",
        meal_type: 0
    };

    try {

        food.food_name = req.body.food_name;
        food.food_type = req.body.food_type;
        food.calory_level = req.body.calory_level;
        food.quantity = req.body.quantity;
        food.calories = req.body.calories;
        food.meal_type = req.body.meal_type;

        if (food.food_id != "" &&
            food.food_name != "" &&
            food.food_type != null &&
            food.calory_level != null &&
            food.quantity != "" &&
            food.calories != "" &&
            food.meal_type != null) {

            await Food.update(food,
                {
                    where: { food_id: req.body.food_id },
                })
                .then(data => {
                    res.redirect("/admin/dashboard");
                }).catch(err => {

                    res.render("enterFood", {
                        formType: "edit",
                        foodData: food,
                        foodType: foodType,
                        caloryLevel: levels,
                        mealType: mealType,
                        message: "Something went Wrong !!"
                    });
                })
        } else {
            res.render("enterFood", {
                formType: "edit",
                foodData: food,
                foodType: foodType,
                caloryLevel: levels,
                mealType: mealType,
                message: "Something went Wrong !!"
            });
        }

    } catch (error) {
        res.render("enterFood", {
            formType: "edit",
            foodData: food,
            foodType: foodType,
            caloryLevel: levels,
            mealType: mealType,
            message: "Something Went Wrong !!"
        });
    }


};

exports.SaveAdminProfile = async (req, res) => {

    var adminProfile = {
        name: "",
        email_id: "",
        dob: "",
        gender: null
    };
    try {

        //var admindata = await User.findAll({ where: { user_id : req.session.userDetails.user_id } });// to find all data of Admin Data
        var admindata = await User.findOne({ where: { user_id: 1 } });// to find all data of Admin Data

        adminProfile.name = admindata.name,
            adminProfile.email_id = admindata.email_id,
            adminProfile.dob = formatDate(admindata.dob),
            adminProfile.gender = admindata.gender

        res.render("adminProfile", {
            profileData: adminProfile,
            glist: genderlist,
            message: ""
        });
    } catch (error) {

        res.render("adminProfile", {
            profileData: adminProfile,
            glist: genderlist,
            message: "Something went wrong !!"
        });
    }
};

exports.postSaveAdminProfile = async (req, res) => {
    try {

        //var admindata = await User.findAll({ where: { user_id : req.session.userDetails.user_id } });// to find all data of Admin Data

        var adminProfile = {
            name: req.body.name,
            email_id: req.body.email_id,
            dob: formatDate(req.body.dob),
            gender: req.body.gender
        };

        if (adminProfile.name != "" &&
            adminProfile.gender != null &&
            adminProfile.dob != null &&
            adminProfile.email_id != "") {

            await User.update(adminProfile,
                {
                    where: { user_id: 1 },
                })
                .then(data => {
                    res.redirect("/admin/dashboard");
                }).catch(err => {

                    res.render("adminProfile", {
                        profileData: adminProfile,
                        glist: genderlist,
                        message: "Something went wrong here !!!"
                    });
                })
        }
        else {
            res.render("adminProfile", {
                profileData: adminProfile,
                glist: genderlist,
                message: "Please Enter All the Details !!"
            });
        }

    } catch (error) {
        // res.send("Something Went Wrong :: ERROR :: <br/>"+ error);

        res.render("adminProfile", {
            profileData: adminProfile,
            glist: genderlist,
            message: "Something went wrong here !!!"
        });
    }
};

exports.postSavefood = async (req, res) => {
    try {

        var food = {
            food_name: req.body.food_name,
            food_type: req.body.food_type,
            calory_level: req.body.calory_level,
            quantity: req.body.quantity,
            calories: req.body.calories,
            meal_type: req.body.meal_type
        };

        if (food.food_name != "" &&
            food.food_type != null &&
            food.calory_level != null &&
            food.quantity != "" &&
            food.calories != "" &&
            food.meal_type != null) {
            Food.create(food)
                .then(async data => {
                    if (req.body.food_id != "") {
                        await Feedback.destroy({
                            where: { feedback_id: req.body.food_id },
                        }).then(data => {
                            res.redirect("/admin/dashboard");
                        });
                    }
                    res.redirect("/admin/dashboard");
                }).catch(err => {
                    res.render("enterFood", {
                        formType: "create",
                        foodData: food,
                        foodType: foodType,
                        caloryLevel: levels,
                        mealType: mealType,
                        message: "Something went wrong here !!!"
                    });
                })
        }
        else {
            res.render("enterFood", {
                formType: "create",
                foodData: food,
                foodType: foodType,
                caloryLevel: levels,
                mealType: mealType,
                message: "Please Enter All the Details !!"
            });
        }

    } catch (error) {
        // res.send("Something Went Wrong :: ERROR :: <br/>"+ error);

        res.render("enterFood", {
            formType: "create",
            foodData: food,
            foodType: foodType,
            caloryLevel: levels,
            mealType: mealType,
            message: "Something went wrong here !!!"
        });
    }
};
