const express=require('express')
const router=express.Router()

const user=require("../controllers/public")
const expense=require("../controllers/expense")
const fgtpwd=require("../controllers/forgotpassword")

router.get("/",user.login,function (req, res, next) {

    res.render('Login', {
      title: 'Login'
    });
});
router.get("/signup",function (req, res, next) {

    res.render('Signup', {
      title: 'Signup'
    });
});
router.post("/signup",user.addUser);
router.post("/",user.login);
router.post("/forgotpassword",fgtpwd.forgotpassword);
router.get("/resetpassword",fgtpwd.resetpassword);
router.get("/updatepassword",fgtpwd.updatepassword);










module.exports=router