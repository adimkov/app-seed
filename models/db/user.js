/**
 * Created by Anton on 21.03.2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = Schema({
    email: String,
    password: String,
});

userSchema.methods.validPassword = function(pwd) {
    return bcrypt.compareSync(pwd, this.password);
};

userSchema.methods.generateHash = function(pwd) {
    this.password = bcrypt.hashSync(pwd, this.salt);
};

module.exports = mongoose.model('User', userSchema);