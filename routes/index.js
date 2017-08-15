var express = require('express');
var router = express.Router();
var jolmohorModel = require("../models/jolmohorModel");


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


router.get('/admin', function(req, res, next) {
  res.render('partials/admin', { title: 'Admin' });
});

router.get('/find_land_page', function(req, res, next) {
  res.render('partials/find_land', { title: 'Find Land' });
});

router.get('/user_land_page', function(req, res, next) {
  res.render('partials/user_land', { title: 'My Land List' });
});

router.get('/user_list_page', function(req, res, next) {
  res.render('partials/user_list', { title: 'User List' });
});

router.get("/land_update_page", function(req, res, next){
  res.render("partials/update_land", { title : "Land Update"});
});

router.get('/register', function(req, res, next) {
  // console.log("flsjklskjsd");
  res.render('partials/register', { title: 'Register' });
});

router.get("/user_update_page", function(req, res, next){
  res.render("partials/user_update", { title : "User Update"});
});
  
 


router.get('/land_registration', function(req, res, next) {
  res.render('partials/landRegistration', { title: 'Land' });
});

router.get('/land_details', function(req, res, next) {
  res.render('partials/landDetails', { title: 'Land Details' });
});




router.get('/login', function(req, res, next) {
  res.render('partials/login', { title: 'login' });
});


module.exports = router;
