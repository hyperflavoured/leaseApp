var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	username : {type : String, required : true},
	email : {type : String, required : true},
	password : {type : String, required : true},
	contactNumber : {type : String},
	company : {type : String},
	dob : {type : Date},
	age : {type : String},
	address : {type : String},
	firstname : {type : String, required : true},
	middlename : {type : String},
	lastname : {type : String, required : true},
	accessPaths : {type : Array},
	role : {type:String, required : true},
	userCreated : {type: Date, default: Date.now},
});




module.exports = mongoose.model("user",userSchema, "users");