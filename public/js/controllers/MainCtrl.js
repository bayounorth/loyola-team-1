angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'To the moon and back!';	



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



});