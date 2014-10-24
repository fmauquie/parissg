// declaring app and dependencies
define([ //
    'ezweb/ezweb', //
    'domReady', //
    'ngResource', //
    'ngAnimate', //
    'ngSanitize', //
    'ngRoute', //
    'underscore', //
    'Restangular', //
    'ngTouch', //
    'bootstrap', //
    'angularMoment', //
    'ezweb/main', // Split this up if you don't need the whole ez-web
    'filters', //
    'services', //
    'directives', //
    'features', //
    'layouts' //
], function (ezweb) {
    'use strict';

    // Start the web application, taking care of loading required modules
    return ezweb.start() //
        // Configure the different aspects of your app here.
        // We give you an example using the EZ-Web default authentication backend and Spring Security
        .config([
            'ezweb.auth.services.usersProvider', //
            function (userServiceProvider) {
                userServiceProvider.configure('app.services.authentication.backend');
            }
        ]) //
        ;
});
