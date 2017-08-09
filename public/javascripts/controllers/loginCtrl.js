(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('loginCtrl', ['$scope', "$http", "$window", function($scope, $http, $window){
		$scope.loginSubmit = function(login){
			console.log(login);

			$http({
				"method" : "POST",
				"url" : "/login",
				"data" : login
			}).then(function(response){
				if(response.status === 200){
					$window.localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo));
					$window.localStorage.setItem("loggedIn", "true");
					if(response.data.userInfo.userType === "admin"){
						$window.location.href = "#/admin";
						$window.location.reload();
					}
				}else{

				}
			}, function(errorResponse){});


		}//$scope.loginSubmit() ends here
	}]);
})();