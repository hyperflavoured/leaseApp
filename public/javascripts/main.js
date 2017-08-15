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
        
        
        .when('/find_land', {
			templateUrl: serverRequestAddr.devServerAdd + '/find_land_page', // sends request to server for html page
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
	    .when('/user_land/:nid', {
			templateUrl: serverRequestAddr.devServerAdd + '/user_land_page', // sends request to server for html page
			controller: 'userLandCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/userLandCtrl.js',
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
						serverRequestAddr.devServerAdd + '/javascripts/controllers/registerCtrl.js',
						]})
				}]
			}
        })
        .when('/user_update/:id',{
        	templateUrl: serverRequestAddr.devServerAdd + '/user_update_page', // sends request to server for html page
        	controller: 'userUpdateCtrl',
        	resolve: {
        		loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
        			return $ocLazyLoad.load({
        				files : [
        				serverRequestAddr.devServerAdd + '/javascripts/controllers/userUpdateCtrl.js',
        				]})
        		}]
        	}
        })


        .when('/login', {
			templateUrl: serverRequestAddr.devServerAdd + '/login', // sends request to server for html page
			controller: 'loginCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/loginCtrl.js',
						]})
				}]
			}
        })



        .when('/user_list', {
			templateUrl: serverRequestAddr.devServerAdd + '/user_list_page', // sends request to server for html page
			controller: 'userlistCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/userlistCtrl.js',
						]})
				}]
			}
        })

        .when('/admin', {
			templateUrl: serverRequestAddr.devServerAdd + '/admin', // sends request to server for html page
			controller: 'adminCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/adminCtrl.js',
						]})
				}]
			}
        })

        .when('/land_registration', {
			templateUrl: serverRequestAddr.devServerAdd + '/land_registration', // sends request to server for html page
			controller: 'landRegistrationCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/landCtrl.js',
						]})
				}]
			}
        })
        .when('/land_update/:id', {
			templateUrl: serverRequestAddr.devServerAdd + '/land_update_page', // sends request to server for html page
			controller: 'landUpdateCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/landUpdateCtrl.js',
						]})
				}]
			}
        })
        .when('/land_details/:id', {
			templateUrl: serverRequestAddr.devServerAdd + '/land_details', // sends request to server for html page
			controller: 'landDetailsCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/landDetailsCtrl.js',
						]})
				}]
			}
        })


       
		.otherwise('/');
   	$locationProvider.hashPrefix('');
 	}]).run(["$rootScope", "$window", function($rootScope, $window){
 		$rootScope.userInfo = JSON.parse($window.localStorage.getItem("userInfo"));
 		$rootScope.loggedIn = $window.localStorage.getItem("loggedIn");
 		$rootScope.logOut = function(){
 			$window.localStorage.clear();
 			$window.location.href = "#/login";
 			$window.location.reload();
 		};
 	}]);
})();
