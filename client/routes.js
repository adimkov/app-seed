/**
 * Created by Anton on 18.03.2015.
 */
define(['./app'], function(app) {
   'use strict';

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        }).when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileController'
        }).otherwise({
                redirectTo: '/'
            }
        );
    }]);
});