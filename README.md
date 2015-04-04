# sp-seed (single page application skeleton)
sp-seed is an application skeleton for web apps. It uses AngularJS with Asynchronous Module Definition (AMD) for front-end and Node.js for back-end. It is suitable for Single Page Application (SPA)
##Initilization:
for install all required  backend modules and frontend modules

`npm install`
##Server
Nothing special, nodejs application skeleton with integrated logging, authentication and data access modules.
Used modules:
* bcrypt-nodejs     - password hashing
* express-flash     - displaying flash messages
* express-session   - session integration
* express-winston   - winston into express, logging all requests to file.
* mongoose          - mongoDB data access
* passport          - authentication and authorization
* passport-local    - forms authentication module
* winston           - logging

##Client
AngularJS with asynchronous module definition concept (AMD). All modules will be loaded with requirejs on demand.
Used modules:
* angular           - angular core
* angular-route     - angular routing
* requirejs         - AMD
* bootstrap         - CSS 

###Sample of module definition:
`/client/controllers/loginController.js`
```javascript
define(['./module'], function(module) {
    module.controller('LoginController', ['$scope', function($scope) {
        console.log('Login controller');
        // module definition
    }]);
});
```
to load this module automatically into application on startup - edit `/client/controllers/index.js`
```javascript
define([
    './homeController',
    './loginController'], // new controller
    function (){
});
```
##File Structure
``` 
|- bin                          
|   |- www                      : server with default port 9090
|- client                       : client side application
|   |- controllers              : angular controllers
|   |   |- homeController.js    : HomeController module
|   |   |- index.js             : controllers loader module. This module request from app.js module
|   |   |- module.js            : angular module definition
|   |- directives               : placeholder for application directives module
|   |- filters                  : placeholder for application filters module
|   |- models                   : placeholder for application models module
|   |- services                 : placeholder for application services module
|   |- views                    : application views
|   |   |- home.html            : partial HTML file for home page
|   |- app.js                   : application main module
|   |- bootstrap.js             : application bootstraper. Loads application module, initialize HTML
|   |- main.js                  : module of requirejs configuration 
|   |- routes.js                : angular routing configuration
|- config                       : config files
|   |- database.js              : database configuration
|- logs                         : logs files
|- models                       : models 
|   |- db                       : database context 
|   |   |- index.js             : database context loader
|   |   |- user.js              : user entity
|- public                       : application assets
|   |- images                   : images
|   |- stylesheets              : custom styles
|   |   |- login.css            : styles for login page
|   |   |- style.css            : common styles
|- routes                       : router module
|   |- api                      : API routes
|   |   |- index.js             : API route loader
|   |- home.js                  : default routes 
|   |- index.js                 : routes loader
|- views                        : template files
|   |- home                     : template files for home route
|   |   |- index.jade           : default page 
|   |   |- signin.jade          : login page
|   |   |- signup.jade          : register page
|   |- error.jade               : default error reporting page
|   |- layout.jade              : default layout
|- app.js                       : main application module
|- authentication.js            : authentication/authorization module
|- bootstrap.js                 : initialization application module
|- logger.js                    : logger
```