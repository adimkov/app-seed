/**
 * Created by Anton on 18.03.2015.
 */
require.config({
    paths: {
        'angular': 'vendor/angular/angular',
        'ngRoute': 'vendor/angular-route/angular-route',
     },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'ngRoute': {
            exports: 'ngRoute',
            deps: ['angular']
        }
    },

     deps: ['./bootstrap']
});