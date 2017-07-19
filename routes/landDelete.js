var router = require("express").Router();
var findLandModel = require("../models/land.js");

router.delete("/user_delete/:userId", function(req, res, next){
	console.log("user_delete");
	console.log(req.params.userId);
	findUserModel.findByIdAndRemove(req.params.userId)
	.exec(function(error, doc){

		if(error){

		}else{
			console.log("user successfully deleted using id");
			res.status(200).json({"message" : "user data successfully deleted"});
		}
	});
});

module.exports = router;