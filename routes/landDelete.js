var router = require("express").Router();
var findLandModel = require("../models/land.js");

router.delete("/land_delete/:landId", function(req, res, next){
	console.log("land_delete");
	console.log(req.params.landId);
	findLandModel.findByIdAndRemove(req.params.landId)
	.exec(function(error, doc){

		if(error){

		}else{
			console.log("land successfully deleted using id");
			res.status(200).json({"message" : "Land data successfully deleted"});
		}
	});
});

module.exports = router;