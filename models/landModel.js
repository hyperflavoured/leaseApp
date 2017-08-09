var mongoose = require("mongoose");
var landSchema = new mongoose.Schema({

	division : {type : String, required: true},
	district : {type : String, required: true},
	upazilla : {type : String, required: true},
	thana : {type : String, required: true},
	village : {type : String, required: true},
	landType : {type : String, required: true},
	landName : {type : String},
	landSize : {type : String},
	location : {type : String},
	purchaseDate : {type : Date},
	purchaseAmount : {type : Number},
	caseDetails : {type : String},
	caseDate : {type : Date},
	ownerName : {type : String, required: true},
	nid : {type : String}
	
});
module.exports = mongoose.model("land",landSchema, "landSchema");
