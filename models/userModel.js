var mongoose = require("mongoose");
const uuidV1 = require("uuid/v1");
var bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
var userSchema = new mongoose.Schema({

	username : {type : String, required : true},
  userType : {type : String, default: "general"},
	email : {type : String},
	phoneNumber : {type : String},
	nid: {type : String , required : true},
	password : {type : String},
  caseDetails:{type: String}
	
});



// userSchema.pre('save', function(next) {
//   var user = this;

//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next();

//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if (err) return next(err);

//       // override the cleartext password with the hashed one
//       user.password = hash;
//       next();
//     });
//   });
// });

module.exports = mongoose.model("user",userSchema, "users");
