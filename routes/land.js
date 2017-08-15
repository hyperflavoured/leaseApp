var router = require("express").Router();
var landModel = require("../models/landModel");


router.post("/land_register", function(req, res, next){
	console.log(req.body);
	req.body.purchaseDate = new Date(req.body.purchaseDate);
	req.body.caseDate = new Date(req.body.caseDate);
	var newLand = new landModel(req.body);
	var error = newLand.validateSync();
	if(error){
		console.log("error found in validateSync");
	}else{

		newLand.save(function(errorSave, doc){
			if(errorSave){

			}else if(doc){
				res.status(200).json({
					"message" : "Successfully added the land."
				});
			}else{

			}
		});
	}
});

router.post("/land_list", function(req, res, next){
	for(var a in req.body.findQuery){
		req.body.findQuery[a] = new RegExp(req.body.findQuery[a], "gmi");
	}

	console.log(req.body.findQuery);
	landModel.find(req.body.findQuery)
	.exec(function(error, doc){
		if(error){

		}else{
			res.status(200).json({
				"landList" : doc,
				"message" : "Found " + doc.length + " lands."
			});
		}
	});
});


router.get("/land_details/:landId", function(req, res, next){
	landModel.findById(req.params.landId)
	.exec(function(error, doc){
		if(error){

		}else if(doc){
			res.status(200).json({
				"landInfo" : doc,
				"message" : "Successfully found the land."
			});
		}else{

		}
	});
});


router.put("/land_update/:landId", function(req, res, next){
	landModel.findByIdAndUpdate(req.params.landId, req.body, function(error, doc){
		if(error){

		}else if(doc){
			res.status(200).json({
				"data" : doc,
				"message" : "land data updated successfully"
			});
		}
	});
});

router.delete("/land_delete/:landId", function(req, res, next){
	landModel.findByIdAndRemove(req.params.landId)
	.exec(function(error, doc){
		if(error){

		}else if(doc){
			res.status(200).json({
				"message" : "Successfully deleted the land."
			});
		}
	});
});

module.exports = router;