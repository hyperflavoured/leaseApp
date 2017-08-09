(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('landDetailsCtrl', ['$scope','$http', "$routeParams", function($scope,$http, $routeParams){
		//$scope.passMatch = true;
		 console.log($routeParams.id);
		 $http({
		 	"method" : "GET",
		 	"url" : "/land_details/" + $routeParams.id
		 }).then(function(response){
		 	console.log(response);
		 	$scope.land = response.data.landInfo;
		 }, function(errorResponse){

		 });

	}]);
})();
