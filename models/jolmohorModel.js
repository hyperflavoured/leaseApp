var mongoose = require("mongoose");
var jolmohorSchema = new mongoose.Schema({

	jolmohorname : {type : String, required : true},
	id : {type : String, required : true},
	ownername : {type : String},
	landsize: {type : String},
	purchasedate : {type : String},
	case : {type : String},
	casedate : {type : String}

	
});
module.exports = mongoose.model("jolmohor",jolmohorSchema, "jolmohorSchema");
