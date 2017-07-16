var router = require("express").Router();
var findLandModel = require("../models/land.js");

router.post("/find_land",function(req, res, next){
	findLandModel.find({})
	.exec(function(error, doc){
		if(error){

		}else{
			console.log(doc);
			res.status(200).json(doc);
		}
	});
});


module.exports = router;