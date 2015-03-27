/**
 * Created by Anton on 22.03.2015.
 */
var logger = require('./logger');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('./models/db');

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local-signin', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
    db.User.findOne({ email: email }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        logger.info('Sign in user: %s', email);
        return done(null, user);
    });
  }
));

passport.use('local-signup', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
    db.User.findOne({ email: email }, function(err, user) {
        if (err) { return done(err); }
        if (user) {
            return done(null, false, { message: 'That email is already taken.' })
        }
        else {
            var newUser = new db.User();
            newUser.email = email;
            newUser.passport = newUser.generateHash(password);
            newUser.save(function(err) {
                if (err) return done(err);

                logger.info('Sign up user: %s', email);
                return done(null, newUser);
            })
        }
    });
  }
));

var intergrator = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());
};

var isAuthenticated = function(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    //res.sendStatus(403);
    res.redirect('/signin');
};


module.exports = {
    integrate: intergrator,
    passport: passport,
    isAuthenticated: isAuthenticated
};