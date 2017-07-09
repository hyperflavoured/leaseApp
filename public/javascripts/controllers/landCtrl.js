(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('landCtrl', ['$scope','$http', function($scope,$http){
		//$scope.passMatch = true;
		$scope.formSubmit = function(landreg){
			console.log(landreg);
			//if(reg.password===reg.password2){
			//	$scope.passMatch = true;
			 	$http({
				  method: 'POST',
				  url: '/index/land',
				  data : landreg
				}).then(function successCallback(response) {
				  	console.log(response);
			    }, function errorCallback(response) {
				  	console.log(response);
			    });
			//}else{
			//	$scope.passMatch = false;
			//}
			
		}

		







	}]);
})();