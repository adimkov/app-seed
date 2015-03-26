/**
 * Created by Anton on 18.03.2015.
 */

define([
    'angular',
    'ngRoute',
    './controllers/index'], function(ng) {
    'use strict';

    return ng.module('app', ['ngRoute', 'app.controllers']);
});