var router = require("express").Router();
var userModel = require("../models/userModel");

router.post("/login", function(req, res, next){
	console.log(req.body);
	console.log("ldsjfdslkfjsdalkfjalafdsl");
	userModel.find({"username" : "mahir", "password" : "1234"})
	.exec(function(errorUser, docUser){
		if(errorUser){
			console.log("error found");
		}else if(docUser){

			console.log(docUser);
			res.status(200).json({
				"success" : true,
				"message" : "username and password matched",
				"userInfo" : docUser
			});
		}else{
			console.log(docUser);
			res.status(200).json({
				"success" : false,
				"message" : "username and password do not match"
			});
		}
	});
});



router.post("/logout", function(req, res, next){
	
});


module.exports = router;