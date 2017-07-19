var router = require("express").Router();
var userModel = require("../models/userModel");

router.post("/login", function(req, res, next){
	userModel.findOne({"username" : req.body.username })
	.exec(function(errorUser, docUser){
		if(errorUser){

		}else if(docUser){

		}else{

		}
	});
});



router.post("/logout", function(req, res, next){
	
});


module.exports = router;