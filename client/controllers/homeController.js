/**
 * Created by Anton on 18.03.2015.
 */
define(['./module'], function(module) {
    module.controller('HomeController', ['$scope', '$http', function($scope, $http) {
        console.log('Home controller');
        $http.get('api/st').success(function(data) {
            $scope.status = data;
        });
    }]);
});