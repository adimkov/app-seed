/**
 * Created by Anton on 21.03.2015.
 */

var databaseConfig = require('./config/database');
var logger = require('./utils/logger');
var mongoose = require('mongoose');
var db = require('./models/db');

function initializeDatabase() {
    logger.info('Establish MongoDB connection');
    mongoose.connect(databaseConfig.connectionString);
    return db;
}

/**
 * Bootstrap application
 * */
module.exports = function() {
    var database = initializeDatabase();

    return {
        database: database
    }
};