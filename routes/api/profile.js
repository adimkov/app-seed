/**
 * Created by Anton on 27.03.2015.
 */
var express = require('express');
var router = express.Router();
var logger = require('../../logger');
var db = require('../../models/db');

router.get('/', function(req, res) {
    logger.info('Get user profile');
    res.json(req.user.toObject());
});

router.post('/', function(req, res) {
    logger.info('Save user profile');

    db.User.where({ _id: req.user._id }).update({name: req.body.name}, function(err) {
        if (err) res.status(500).json(err);
        res.end();
    });
});

module.exports = router;