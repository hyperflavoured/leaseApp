var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({

	username : {type : String, required : true},
	email : {type : String, required : true},
	phoneNumber : {type : String},
	nid: {type : String},
	password : {type : String}
	
});
module.exports = mongoose.model("user",userSchema, "userSchema");
