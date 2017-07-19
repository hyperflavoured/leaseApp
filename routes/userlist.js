var router = require("express").Router();
var userListModel = require("../models/user.js");

router.post("/user_list",function(req, res, next){
	userListModel.find({})
	.exec(function(error, doc){
		if(error){

		}else{
			console.log(doc);
			res.status(200).json(doc);
		}
	});
});


module.exports = router;