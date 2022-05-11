const Excercise = require('../Model/excercise')


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
                    res.redirect("/food/Admin/Dashboard");
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
            res.redirect("/food/Admin/Dashboard");
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
                    res.redirect("/food/Admin/Dashboard");
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


