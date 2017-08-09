(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('jolmohorRegistrationCtrl', ['$scope','$http', function($scope,$http){
		//$scope.passMatch = true;
		$scope.formSubmit = function(landreg){
			console.log(landreg);
			
			 	$http({
				  method: 'POST',
				  url: '/jolmohor_register',
				  data : landreg
				}).then(function successCallback(response) {
				  	console.log(response);
			    }, function errorCallback(response) {
				  	console.log(response);
			    });
			
			
		}

		







	}]);
})();
