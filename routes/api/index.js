/**
 * Created by Anton on 18.03.2015.
 */
var express = require('express');
var router = express.Router();
var logger = require('../../logger');
var profile = require('./profile');

router.use('/profile', profile);

router.get('/st', function(req, res) {
    logger.info('Get application status. Status: %s', 'OK');
    res.setHeader('content-type', 'text/plain');
    res.end('OK');
});

module.exports = router;