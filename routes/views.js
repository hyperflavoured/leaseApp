var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
  res.send("fuck");
});

router.get('/home', function(req, res, next) {
  res.render("partials/home",{ title: 'JPT'});
});

module.exports = router;
