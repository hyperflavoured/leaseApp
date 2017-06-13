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
		$scope.formSubmit = function(reg){
			console.log(reg);
			if(reg.password===reg.password2){
				$scope.passMatch = true;
				$http({
				  method: 'POST',
				  url: '/index/register',
				  data : reg
				}).then(function successCallback(response) {
				  	console.log(response);
			    }, function errorCallback(response) {
				  	console.log(response);
			    });
			}else{
				$scope.passMatch = false;
			}
			
		}



	}]);
})();