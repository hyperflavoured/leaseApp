var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('partials/home', { title: 'Home' });
});

router.get('/addLease', function(req, res, next) {
  res.render('partials/addLease', { title: 'Add Lease' });
});

module.exports = router;
