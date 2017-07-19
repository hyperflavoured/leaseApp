(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('findLandCtrl', ['$scope',"serverRequestAddr","$http", function($scope, serverRequestAddr, $http){
		$scope.getLandList = function(land){

			$http({
				"method" : "POST",
				"url" : "/land_list",
				"data" : {
					"findQuery" : land
				}
			}).then(function(response){
				console.log(response);
				$scope.landList = response.data.landList;
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