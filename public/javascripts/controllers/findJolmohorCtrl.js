(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('findJolmohorCtrl', ['$scope',"serverRequestAddr","$http", function($scope, serverRequestAddr, $http){
		$scope.getJolmohorList = function(jolmohor){

			$http({
				"method" : "POST",
				"url" : "/jolmohor_list",
				"data" : {
					"findQuery" : jolmohor
				}
			}).then(function(response){
				console.log(response);
				$scope.jolmohorList = response.data.jolmohorList;
			}, function(errorResponse){
				console.log(errorResponse);
			});
		};

		$scope.getJolmohorList();



		$scope.jolmohorDelete = function(jolmohorId){
			console.log(jolmohorId);
			$http({
				"method" : "DELETE",
				"url" : serverRequestAddr.devServerAdd + "/jolmohor_delete"+"/"+JolmohorId,
				"data" : {"jolmohorId" : jolmohorId}
			}).then(function(response){
				console.log(response);
				$scope.getJolmohorList();
			}, function(errorResponse){

			});
		};
	}]);
})();