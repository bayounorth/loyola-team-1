angular.module('MainCtrl', ['typer']).controller('MainController', function($scope) {

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