(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('userUpdateCtrl', ['$scope','$http',"$routeParams", function($scope, $http, $routeParams){
		$scope.passMatch = true;
		$http({
			method : "GET",
			url : "/user_details/" + $routeParams.id,
		}).then(function(response){
			$scope.reg = response.data.userInfo;
		});

		/*=================================================================
		=            Function to submit registration form data            =
		=================================================================*/
		
		$scope.updateInfo = function(reg){
			console.log(reg);
			if(reg.hasOwnProperty("password") && reg.password===reg.password2){
				$scope.passMatch = true;
				$http({
				  method: 'PUT',
				  url: '/user_update/'+ $routeParams.id, //this router is in the /route/user.js
				  data : reg
				}).then(function successCallback(response) {
				  	console.log(response);
			    }, function errorCallback(response) {
				  	console.log(response);
			    });
			}else if(!reg.hasOwnProperty("password")){
				$scope.passMatch = false;
				$http({
				  method: 'PUT',
				  url: '/user_update/'+ $routeParams.id, //this router is in the /route/user.js
				  data : reg
				}).then(function successCallback(response) {
				  	console.log(response);
			    }, function errorCallback(response) {
				  	console.log(response);
			    });
			}else{

			}
			
		}//$scope.formSubmit() ends here
		
		
		/*=====  End of Function to submit registration form data  ======*/
		




	}]);
})();