module.exports = (req,res,next) => {
    if(req.session.userDetails.user_type != 1)
          return res.redirect('/User/NotAllowed')
}