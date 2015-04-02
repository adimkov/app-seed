/**
 * Created by Anton on 21.03.2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = Schema({
    name: String,
    local: {
        email: String,
        password: String
    }
});

userSchema.methods.validPassword = function(pwd) {
    return bcrypt.compareSync(pwd, this.local.password);
};

userSchema.methods.generateHash = function(pwd) {
    this.local.password = bcrypt.hashSync(pwd, bcrypt.genSaltSync());
};

if (!userSchema.options.toObject) userSchema.options.toObject = {};
userSchema.options.toObject.transform  = function(doc, ret, options) {
    delete ret._id;
    delete ret.local.password;
};

module.exports = mongoose.model('User', userSchema);