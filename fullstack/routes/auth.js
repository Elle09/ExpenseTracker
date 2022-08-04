const express=require('express')

const router=express.Router();

const authController=require('../controllers/auth')
router.get('/login',function (req, res, next) {

    res.render('login', {
      title: 'Login'
    });
})
router.get('/signup',function (req, res, next) {

  res.render('signup', {
    title: 'Signup'
  });
})
router.post('/signup',authController.register)

router.post('/login',authController.login)


module.exports = router;
