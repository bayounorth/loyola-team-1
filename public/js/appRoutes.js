angular.module('appRoutes', ['typer']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/faq', {
			templateUrl: 'views/faq.html',
			controller: 'FaqController'
		})

		.when('/applied', {
			templateUrl: 'views/applied.html',
			controller: 'AppliedController'	
		})


		.when('/footer', {
			templateUrl: 'views/footer.html',
		})
		
		.when('/twitter', {
			templateUrl: 'views/twitter.html',
			controller: 'twitterCtrl'

		});
		

	$locationProvider.html5Mode(true);

}]);