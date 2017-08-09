var router = require("express").Router();
var jolmohorModel = require("../models/jolmohorModel");


router.post("/jolmohor_register", function(req, res, next){
	console.log(req.body);
	var newJolmohor = new jolmohorModel(req.body);
	newJolmohor.save(function(error, doc){
		if(error){

		}else if(doc){
			res.status(200).json({
				"message" : "Successfully added the jolmohor."
			});
		}else{

		}
	});
});

router.post("/jolmohor_list", function(req, res, next){
	for(var a in req.body.findQuery){
		req.body.findQuery[a] = new RegExp(req.body.findQuery[a], "gmi");
	}

	console.log(req.body.findQuery);
	jolmohorModel.find(req.body.findQuery)
	.exec(function(error, doc){
		if(error){

		}else{
			res.status(200).json({
				"jolmohorList" : doc,
				"message" : "Found " + doc.length + " jolmohors."
			});
		}
	});
});


router.get("/jolmohor_details/:jolmohorId", function(req, res, next){
	jolmohorModel.findById(req.params.jolmohorId)
	.exec(function(error, doc){
		if(error){

		}else if(doc){
			res.status(200).json({
				"jolmohorInfo" : doc,
				"message" : "Successfully found the jolmohor."
			});
		}else{

		}
	});
});
