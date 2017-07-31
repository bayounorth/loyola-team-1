angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/faq', {
			templateUrl: 'views/faq.html',
			controller: 'NerdController'
		})

		.when('/applied', {
			templateUrl: 'views/applied.html',
			controller: 'AppliedController'	
		});

	$locationProvider.html5Mode(true);

}]);