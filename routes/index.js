var express = require('express');
var router = express.Router();

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

module.exports = router;
