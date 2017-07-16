(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('findLandCtrl', ['$scope',"serverRequestAddr","$http", function($scope, serverRequestAddr, $http){
		$scope.getLandList = function(){

			$http({
				"method" : "POST",
				"url" : serverRequestAddr.devServerAdd + "/find_land"
			}).then(function(response){
				console.log(response);
				$scope.landList = response.data;
			}, function(errorResponse){
				console.log(errorResponse);
			});
		};

		$scope.getLandList();



		$scope.landDelete = function(landId){
			console.log(landId);
			$http({
				"method" : "DELETE",
				"url" : serverRequestAddr.devServerAdd + "/land_delete"+"/"+landId,
				"data" : {"landId" : landId}
			}).then(function(response){
				console.log(response);
				$scope.getLandList();
			}, function(errorResponse){

			});
		};
	}]);
})();