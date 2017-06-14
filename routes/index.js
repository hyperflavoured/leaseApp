var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Land =require("../models/land");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('partials/home', { title: 'Home' });
});

router.get('/about_us', function(req, res, next) {
  res.render('partials/about_us', { title: 'About Us' });
});

router.get('/contact_us', function(req, res, next) {
  res.render('partials/contact_us', { title: 'Contact Us' });
});
router.get('/e_tender', function(req, res, next) {
  res.render('partials/e_tender', { title: 'E-Tender' });
});

router.get('/lease', function(req, res, next) {
  res.render('partials/lease', { title: 'Lease' });
});

router.get('/find_land', function(req, res, next) {
  res.render('partials/find_land', { title: 'Find Land' });
});

router.get('/register', function(req, res, next) {
  res.render('partials/register', { title: 'Register' });
});



//registration

router.post('/index/register', function(req, res, next) {
  console.log(req.body);

  var newUser = new User(req.body);

  //Create user
  newUser.save(function(err,user){
    if(err){
      res.status(400).json(err);
    }else{
      res.status(200).json({message : "User successfully saved"});
    }
  });

}); 
// router.post('/index/login', function(req, res, next) {
//   console.log(req.body);

//   User.find({username : req.body.username},function(err,user){
//     if(err){

//     }else if(user){
//       // user.pass === req.body.pass
//     }else{

//     }
//   })

// }); 

router.get('/land', function(req, res, next) {
  res.render('partials/land', { title: 'Land' });
});
      /// LAND REGISTRATION ///

router.post('/index/land', function(req, res, next) {
  console.log(req.body);

  var newLand = new Land(req.body);

  //Create land info
  newLand.save(function(err,land){
    if(err){
      res.status(400).json(err);
    }else{
      res.status(200).json({message : "Land successfully registered"});
    }
  });

}); 


module.exports = router;
