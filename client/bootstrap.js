/**
 * Created by Anton on 18.03.2015.
 */
define(['require', 'angular', 'app', 'routes'], function(require, ng) {
    'use strict';

    ng.element(document).ready(function() {
       ng.bootstrap(document, ['app']);
    });
});