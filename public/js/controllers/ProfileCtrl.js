angular.module('ProfileCtrl', ['typer']).controller('ProfileController', function($scope, $http, Profile) {

	//GET ALL PROFILES 
				Profile.getAllProfiles().then(function(response){
					console.log(response.data);
					$scope.stories = response.data;
				});

});