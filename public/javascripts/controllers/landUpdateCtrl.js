(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('landUpdateCtrl', ['$scope','$http',"$routeParams", function($scope, $http, $routeParams){
		//$scope.passMatch = true;

		$http({
			method : "GET",
			url : "/land_details/" + $routeParams.id
		}).then(function(response){
			console.log(response);
			$scope.landreg = response.data.landInfo;
		});

		console.log($routeParams);
		$scope.formSubmit = function(landreg){
			console.log(landreg);
			
			 	$http({
				  method: 'PUT',
				  url: '/land_update/' + $routeParams.id,
				  data : landreg
				}).then(function successCallback(response) {
				  	console.log(response);
			    }, function errorCallback(response) {
				  	console.log(response);
			    });
			
			
		}; // $scope.formSubmit() ends here

		







	}]);
})();
