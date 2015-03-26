/**
 * Created by Anton on 18.03.2015.
 */
var express = require('express');
var router = express.Router();
var auth = require('../authentication');
var path = require('path');

/**
 * Gets index page
 * */
router.get('/', auth.isAuthenticated, function(req, res) {
    res.render('home/index.jade', {title: 'app'});
});

/**
 * Gets login page
 * */
router.get('/signin', function(req, res) {
    res.render('home/signin.jade', {title: 'Login', message: req.flash('error')});
});

/**
 * Gets login page
 * */
router.get('/signup', function(req, res) {
    res.render('home/signup.jade', {title: 'Create new user', message: req.flash('error')});
});

/**
 * Gets login page
 * */
router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/signin');
});

/**
 *
 * Posts login page
 * */
router.post('/signin', auth.passport.authenticate('local-signin',
    {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
    }));

/**
 *
 * Posts signup page
 * */
router.post('/signup', auth.passport.authenticate('local-signup',
    {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }));

module.exports = router;