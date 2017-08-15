(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('userLandCtrl', ['$scope',"serverRequestAddr","$http", "$routeParams", function($scope, serverRequestAddr, $http, $routeParams){
		console.log($routeParams.nid);
		$scope.land = new Object();
		$scope.land.nid = $routeParams.nid;
		$scope.getLandList = function(land){
			// $scope.land = land;
			// $scope.land.nid = $routeParams.nid;
			$http({
				"method" : "POST",
				"url" : "/land_list",
				"data" : {
					"findQuery" : $scope.land
				}
			}).then(function(response){
				console.log(response);
				$scope.landList = response.data.landList;
			}, function(errorResponse){
				console.log(errorResponse);
			});
		};

		$scope.getLandList();



		// $scope.landDelete = function(landId){
		// 	console.log(landId);
		// 	$http({
		// 		"method" : "DELETE",
		// 		"url" : serverRequestAddr.devServerAdd + "/land_delete"+"/"+landId,
		// 		"data" : {"landId" : landId}
		// 	}).then(function(response){
		// 		console.log(response);
		// 		$scope.getLandList();
		// 	}, function(errorResponse){

		// 	});
		// };
	}]);
})();