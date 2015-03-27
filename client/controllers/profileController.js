/**
 * Created by Anton on 27.03.2015.
 */
define(['./module'], function(module) {
    module.controller('ProfileController', ['$scope', '$http', function($scope, $http) {
        console.log('Profile controller');

        $scope.user = null;

        $scope.saveProfile = function() {
            $http.post('api/profile', $scope.user);
        };

        $http.get('api/profile').success(function(data){
            $scope.user = data;
        });

    }]);
});