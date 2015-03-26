/**
 * Created by Anton on 20.03.2015.
 */
var express = require('express');
var router = express.Router();

var homeRoute = require('./home');
var apiRoute = require('./api');

router.use('/', homeRoute);
router.use('/api', apiRoute);

module.exports = router;