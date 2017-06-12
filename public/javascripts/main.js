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
		.when('/home', {
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
        .when('/addLease', {
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
        .when('/about_us', {
			templateUrl: serverRequestAddr.devServerAdd + '/about_us', // sends request to server for html page
			controller: 'aboutUsCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/aboutUsCtrl.js',
						]})
				}]
			}
        })
        .when('/e_tender', {
			templateUrl: serverRequestAddr.devServerAdd + '/e_tender', // sends request to server for html page
			controller: 'eTenderCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/eTenderCtrl.js',
						]})
				}]
			}
        })
        .when('/lease', {
			templateUrl: serverRequestAddr.devServerAdd + '/lease', // sends request to server for html page
			controller: 'leaseCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/leaseCtrl.js',
						]})
				}]
			}
        })
        .when('/find_land', {
			templateUrl: serverRequestAddr.devServerAdd + '/find_land', // sends request to server for html page
			controller: 'findLandCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/findLandCtrl.js',
						]})
				}]
			}
        })
        .when('/contact_us', {
			templateUrl: serverRequestAddr.devServerAdd + '/contact_us', // sends request to server for html page
			controller: 'contactUsCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/contactUsCtrl.js',
						]})
				}]
			}
        })

        .when('/register', {
			templateUrl: serverRequestAddr.devServerAdd + '/register', // sends request to server for html page
			controller: 'registerCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/contactUsCtrl.js',
						]})
				}]
			}
        })
		.otherwise('/');
   	$locationProvider.hashPrefix('');
 	}])
})();
