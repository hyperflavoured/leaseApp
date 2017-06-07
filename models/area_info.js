var mongoose = require("mongoose");


var areaSchema = new mongoose.Schema({
	apazilla : {type : String, required : true},
	Area : {type : String, required : true},
	jolmohor : {type : String, required : true},
	balumohor : {type : String},
	chingrimohor : {type : String},
	chingrimohor : {type : String},
	postalcode : {type : String, required : true},
});


module.exports = mongoose.model("area_info",areaSchema);