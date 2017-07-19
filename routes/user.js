var express = require('express');
var router = express.Router();
var User = require("../models/userModel");


/*=====================================================================================
=            Router to store user registration information in the database            =
=====================================================================================*/

router.post('/user_register', function(req, res, next) {
  console.log(req.body);

  var newUser = new User(req.body);

  //Create user
  newUser.save(function(err,user){
    if(err){
      res.status(400).json(err);
    }else{
      res.status(200).json({message : "User successfully saved"});
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
	User.findById(req.params.userId)
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
