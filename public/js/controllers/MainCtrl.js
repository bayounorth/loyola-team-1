angular.module('MainCtrl', ['typer']).controller('MainController', function($scope, $http) {

	$scope.tagline = 'To the moon and back!';	


	// MENU
	//View selection for the side menu
	$scope.menuView = 1;
	console.log($scope.menuView);


	$scope.showSubscribe = function(){
		$scope.menuView = 2;
		console.log($scope.menuView);
	}
	$scope.showApply = function(){
		$scope.menuView = 3;
		console.log($scope.menuView);
	}
	$scope.showBacktoNav = function(){
		$scope.menuView = 1;
		console.log($scope.menuView);
	}

	$scope.image = "/img/images/KEN_4269.jpg";
	$scope.loyolaLogo = "/img/logos/logo-loyola-horizontal-w.svg";


	//APPLICATION AVAILABLE

	// //Tesnting if show is working
	$scope.applicationAllow = true;
	// // $scope.applicationAllow = false;

	
	$http.get("https://gentle-shore-39524.herokuapp.com/application-allowed")
	    .then(function(response) {
	        $scope.applicationAllow  = response.data;
	        console.log($scope.applicationAllow );
	    });





	//menu links
	// $scope.goHome = function(){
	//  $location.path('/');

	// }

	// $scope.goFaq = function(){
	//  $location.path('/faq');

	// }

	// $scope.goApplied = function(){
	//  $location.path('/applied');

	// }

	//end of menu stuff


});