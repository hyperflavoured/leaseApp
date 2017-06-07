(function() {
	'use strict';
	/**
	* MEAN Module
	*
	* Description
	*/
	angular.module('App', [
		'ngRoute',
		'oc.lazyLoad',
   ])
	.constant('serverRequestAddr', {
		devServerAdd : 'http://localhost:3000'
	})
	.config(['$routeProvider', '$locationProvider','serverRequestAddr', '$sceDelegateProvider','$httpProvider','$compileProvider', function($routeProvider, $locationProvider, serverRequestAddr, $sceDelegateProvider, $httpProvider, $compileProvider) {
		

		/*========================================
		=            $compileProvider            =
		========================================*/
		
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
		
		/*=====  End of $compileProvider  ======*/
		
		/*=================================
		=            Whitelist            =
		=================================*/
		
		$sceDelegateProvider.resourceUrlWhitelist([
			   // Allow same origin resource loads.
			   'self',
			   // Allow loading from our assets domain.  Notice the difference between * and **.
			    serverRequestAddr.devServerAdd+"/**"
			   ]);
		
		/*=====  End of Whitelist  ======*/
		

		$routeProvider
		.when('/', {
			templateUrl: serverRequestAddr.devServerAdd + '/home', // sends request to server for html page
			controller: 'homeCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/homeCtrl.js',
						]})
				}]
			}
		})
        .when('/', {
            templateUrl: serverRequestAddr.devServerAdd + '/addLease', // sends request to server for html page
            controller: 'addLeaseCtrl',
            resolve: {
                loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files : [
                        serverRequestAddr.devServerAdd + '/javascripts/controllers/addLeaseCtrl.js',
                        ]})
                }]
            }
        })
		.otherwise('/');
   	$locationProvider.hashPrefix('');
 	}])
})();
