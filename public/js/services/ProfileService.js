angular.module('ProfileService', []).service('Profile', ['$http', function($http, $scope, Profile) {

	var URL = 'https://gentle-shore-39524.herokuapp.com';

	return {

		getAllProfiles  :  function(data){
			return $http.get(URL + '/stories', data)
		}

	       }

}]);
