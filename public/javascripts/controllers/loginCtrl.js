(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('loginCtrl', ['$scope', "$http", function($scope, $http){
		$scope.loginSubmit = function(login){
			console.log(login);

			$http({
				"method" : "POST",
				"url" : "/login",
				"data" : login
			}).then(function(response){
				console.log(response);
			}, function(errorResponse){});


		}//$scope.loginSubmit() ends here
	}]);
})();