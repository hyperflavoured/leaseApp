var express = require('express');
var router = express.Router();
var User = require("../models/userModel");
var bcrypt = require("bcryptjs");

/*=====================================================================================
=            Router to store user registration information in the database            =
=====================================================================================*/

router.post('/user_register', function(req, res, next) {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  var newUser = new User(req.body);
  //Create user
  newUser.save(function(err,user){
    if(err){
      res.status(400).json(err);
      console.log("error");
    }else{
      res.status(200).json({message : "User successfully saved"});
      console.log("user saved");
      console.log(user);
    }
  });

}); 


/*=====  End of Router to store user registration information in the database  ======*/


/*=================================================================
=            Router to get user list from the database            =
=================================================================*/
router.post("/user_list", function(req, res, next){
	console.log(req.body.findQuery);
	for(var a in req.body.findQuery){
		req.body.findQuery[a] = new RegExp(req.body.findQuery[a], "gmi");
	}
	console.log(req.body);
	User.find(req.body.findQuery)
	.exec(function(error, doc){
		if(error){

		}else{
				res.status(200).json({
					"userList" : doc,
					"message" : "Found " + doc.length + " users"
				});
				
		}
	});
});


/*=====  End of Router to get user list from the database  ======*/



/*==================================================
=            Router to get user details            =
==================================================*/
router.get("/user_details/:userId", function(req, res, next){
	User.findById(req.params.userId, {password : false})
	.exec(function(error, doc){
		if(error){

		}else if(doc){
			res.status(200).json({
				"userInfo" : doc,
				"message" : "successfully found the user in the database"
			});
		}else{

		}
	});
});


/*=====  End of Router to get user details  ======*/


/*=============================================
=            Router to update user            =
=============================================*/
router.put("/user_update/:id", function(req, res, next){
	User.findByIdAndUpdate(req.params.id, req.body, function(error, doc){
		if(error){

		}else if(doc){
			res.status(200).json({
				"data" : doc,
				"message" : "user successfully updated"
			});
		}
	});
});


/*=====  End of Router to update user  ======*/



/*=========================================================
=            Router to delete user information            =
=========================================================*/
router.delete("/user_delete/:userId", function(req, res, next){
	User.findByIdAndRemove(req.params.userId)
	.exec(function(error, doc){
		if(error){

		}else if(doc){
			res.status(200).json({
				"message" : "successfully deleted the user from the database"
			});
		}
	});
});


/*=====  End of Router to delete user information  ======*/





module.exports = router;
