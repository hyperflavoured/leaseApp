var mongoose = require("mongoose");
var landSchema = new mongoose.Schema({

	upazilla : {type : String, required : true},
	area : {type : String, required : true},
	postalcode : {type : String},
	jolmohor: {type : String},
	balumohor : {type : String},
	chingrimohor : {type : String},
	hatbazar : {type : String}

	
});
module.exports = mongoose.model("land",landSchema, "landSchema");
