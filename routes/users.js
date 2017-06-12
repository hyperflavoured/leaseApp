var express = require('express');
var router = express.Router();

var User = require('..models/user');



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

router.post('/users/register', function(req, res, next) {
  //get form
  var name=req.body.name;
  var email=req.body.email;
  var phone=req.body.phone;
  var nid=req.body.nid;
  var password=req.body.password;
  var password2=req.body.password2;
  


var newUser =new User({
	name :name,
	email:email,
	phone :phone,
	nid : nid,
	password: password
});

//Create user
User.createUser(newUser, function(user){
	console.log(user);
});
}); 


module.exports = router;
