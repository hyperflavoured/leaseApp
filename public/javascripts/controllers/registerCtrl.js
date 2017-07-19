(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('registerCtrl', ['$scope','$http', function($scope,$http){
		$scope.passMatch = true;

		/*=================================================================
		=            Function to submit registration form data            =
		=================================================================*/
		
		$scope.formSubmit = function(reg){
			console.log(reg);
			if(reg.password===reg.password2){
				$scope.passMatch = true;
				$http({
				  method: 'POST',
				  url: '/user_register', //this router is in the /route/user.js
				  data : reg
				}).then(function successCallback(response) {
				  	console.log(response);
			    }, function errorCallback(response) {
				  	console.log(response);
			    });
			}else{
				$scope.passMatch = false;
			}
			
		}//$scope.formSubmit() ends here
		
		
		/*=====  End of Function to submit registration form data  ======*/
		




	}]);
})();