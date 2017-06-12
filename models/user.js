var mongoose = require("mongoose");
var db= mongoose.connection;
mongoose.connect('mongodb://localhost/testing');
var userSchema = new mongoose.Schema({
	username : {type : String, required : true},
	email : {type : String, required : true},
	phoneNumber : {type : String},
	nid: {type : String},
	password : {type : String},
	
	accessPaths : {type : Array},

	});




module.exports = mongoose.model("user",userSchema, "userSchema");

module.exports.createUser =function(newUser , callback)
{
	newUser.save(callback);
}