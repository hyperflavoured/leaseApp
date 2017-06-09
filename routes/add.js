var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
//var fs = require("fs");
//var mkdirp = require("mkdirp");
//var sharp = require("sharp");
//const uuidV1 = require("uuid/v1");
//var passport = require("passport");  
//var auth = require("../middlewares/auth.js")();
//var rimraf = require('rimraf');

//var areaInfoModel = require("../../models/areaInfoModel");
router.post("/add/area_info",function(request, response, next){

	console.log("requested to /add/area_info/");

	if(request.body){
		var newLEASE = new areaInfoModel(request.body.areaInfo);
		var error = newHE.validateSync();
		if(error){
			response.status(400).json(errorMessageHandler("data not validated and saved", error));
		}else{
			newLEASE.save(function(error,doc){
				if(error){
					response.status(500).json(errorMessageHandler("unable to save data", error));
				}else{
					response.status(200).json(successMessageHandler("new data has been saved", doc));
				}
			});
		}
	}else{
		console.log("request.body not found");
		response.status(500).json({"message":"invalid request"});
	}
});
/* GET users listing. */
//  res.send({type:'POST'});

module.exports = router;
