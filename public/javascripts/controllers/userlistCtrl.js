(function() {
	'use strict';

	/**
	* Home Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('userlistCtrl', ['$scope',"serverRequestAddr","$http", function($scope, serverRequestAddr, $http){
		$scope.getUserList = function(){

			$http({
				"method" : "POST",
				"url" : serverRequestAddr.devServerAdd + "/user_list"
			}).then(function(response){
				console.log(response);
				$scope.userList = response.data;
			}, function(errorResponse){
				console.log(errorResponse);
			});
		};

		$scope.getUserList();



		$scope.userDelete = function(userId){
			console.log(userId);
			$http({
				"method" : "DELETE",
				"url" : serverRequestAddr.devServerAdd + "/user_delete"+"/"+userId,
				"data" : {"userId" : userId}
			}).then(function(response){
				console.log(response);
				$scope.getuserList();
			}, function(errorResponse){

			});
		};
	}]);
})();