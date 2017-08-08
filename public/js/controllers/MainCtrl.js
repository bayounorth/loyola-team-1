angular.module('MainCtrl', ['typer']).controller('MainController', function($scope, $http) {

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
	// //Testing if show is working
	$scope.applicationAllow = true;
	// // $scope.applicationAllow = false;

	$http.get("https://gentle-shore-39524.herokuapp.com/application-allowed")
	    .then(function(response) {
	        $scope.applicationAllow  = response.data;
	        console.log($scope.applicationAllow );
	    });



	    $scope.postSubscription = function(data){

	    	$http.post("https://gentle-shore-39524.herokuapp.com/new-subscription", data)
			    .then(function(response) {
			        
			        console.log(response );
			    });

	    }


	    $scope.postApplication = function(data){

	    	$http.post("https://gentle-shore-39524.herokuapp.com/new-application", data)
			    .then(function(response) {
			        
			        console.log(response );
			    });

	    }

// PARALLAX MATERIALS 

	$scope.headerTitle = "<boot up your career>"
	$scope.text1 = "The Loyola Center for Entrepreneurship and Community Development (CECD) has partnered with Tech Talent South and software development studio LookFar to develop a new certificate program in software development.  This innovative 10-week program is designed to bridge the gap between the core skills learned in a liberal arts education and the starting point for a career in technology and software development."
	$scope.text3 = "Leverage the Power of Technology to Solve Problems"
	$scope.img1 = "/img/images/IMG_0032.JPG";
	$scope.img2 = "/img/images/screen02.png";


// LOGOS

	$scope.codeLogo = "img/logos/code_logo.svg"
	$scope.codeLogoWhite = "img/logos/code_logo_white2.svg"


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