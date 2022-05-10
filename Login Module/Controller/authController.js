const mail = require('../Utils/send-email')

const User = require('../Model/user')

const genrateOpt = () => {
      return Math.floor(100000 + Math.random() * 900000);
}

exports.login = (req,res,next) =>{
      res.render("login.ejs")
}

exports.register = (req,res,next) =>{
      res.render("register.ejs")
}

exports.postRegister = (req,res,next) =>{
      req.session.userDetails = req.body
      console.log(req.session)
      res.redirect('/bmi')
}

exports.sendOtp = (req,res,next) => {
      var email
      console.log(req.body)
      var otp
      if(req.session.email == null)
      {
            email = req.body.email
            req.session.email = email
            
      }
      else
            email = req.session.email
      otp = genrateOpt()
      req.session.otp = otp
      mail.sendemail(email,otp)
      .then(response => {
            console.log(response)
            console.log("Congratulations!! Mail Sent Successfully..")
            res.redirect('/validate-otp')
      })
      .catch(err =>{
            console.log("Opss..! Error in sending Email.")
      })
}

exports.resendOtp = (req,res,next) =>{
      req.session.againsend = true
      this.sendOtp(req,res,next);
}

exports.getvalidateOtp = (req,res,next) =>{
      // console.log(req.flash('success')[0])
      // console.log(req.flash('error')[0])
      let errmessage = req.flash('error');
      if (errmessage.length > 0) {
            errmessage = errmessage[0];
      } else {
            errmessage = null;
      }
      let message

      if(req.session.againsend == true)   
            message = "A verification Code again sent to " + req.session.email
      else       
            message = "A verification Code sent to " + req.session.email
      res.render("validateOtp.ejs",{message: message, 
            warning: "Check your spam folder as well",
            email: req.session.email,
            otp:req.session.otp,
            success:req.flash('success')[0],
            error:errmessage})
}

exports.postvalidateOtp = async (req,res,next) => {
      const otp = req.body.generatedotp
      const userotp = req.body.otp
      const useremail = req.body.email

      if(otp === userotp)
      {
            const users = await User.findAll({where: {email_id: useremail}})
            if(users.length < 1)
                  return res.redirect('/register')
            else
            {
                  req.session.user = users[0]
                  return res.redirect('/user')       
            }
      }
      else
            req.flash('error', "Invalid Otp..Please Try Again.")
            return res.redirect('/validate-otp')
}