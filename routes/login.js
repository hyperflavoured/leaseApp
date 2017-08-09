var router = require("express").Router();
var userModel = require("../models/userModel");
var bcrypt = require("bcryptjs");

router.post("/login", function(req, res, next){
	console.log(req.body);
	userModel.findOne({"$or" : [ {"username" : req.body.username}, {"email" : req.body.username} ]})
	.exec(function(errorUser, docUser){
		if(errorUser){
			res.status(401).json({"message" : "unsuccessfull in searching user"});
		}else{
			console.log(req.body.password);
			console.log(docUser.password);
			var passwordMatched = bcrypt.compareSync(req.body.password, docUser.password);
			if(passwordMatched){
				res.status(200).json({
					"success" : true,
					"message" : "username/email and password matched",
					"userInfo" : docUser
				});
			}else{
				res.status(401).json({
					"success" : false,
					"message" : "username/email and password do not match"
				})
			}
			
		}
	});//userModel.findOne() ends here
	// console.log(req.body);
	// console.log("ldsjfdslkfjsdalkfjalafdsl");
	// userModel.find({"username" : "mahir", "password" : "1234"})
	// .exec(function(errorUser, docUser){
	// 	if(errorUser){
	// 		console.log("error found");
	// 	}else if(docUser){

	// 		console.log(docUser);
	// 		res.status(200).json({
	// 			"success" : true,
	// 			"message" : "username and password matched",
	// 			"userInfo" : docUser
	// 		});
	// 	}else{
	// 		console.log(docUser);
	// 		res.status(200).json({
	// 			"success" : false,
	// 			"message" : "username and password do not match"
	// 		});
	// 	}
	// });
});



router.post("/logout", function(req, res, next){
	
});


module.exports = router;