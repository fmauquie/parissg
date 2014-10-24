// declaring app and dependencies
define([ //
    'ezweb/ezweb', //
    'domReady', //
    'ngResource', //
    'ngAnimate', //
    'ngRoute', //
    'bootstrap', //
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
            'ezweb.auth.services.users.backend.defaultProvider', //
            function (userServiceProvider, defaultUserServiceBackendProvider) {
                // Always configure the backend you are going to use before
                // configuring the user service with it (if configuration of the backend is necessary).
                defaultUserServiceBackendProvider.configure({
                    // See the file (hopefully soon the docs) to see what options are available.
                    // Any option not set is kept at default value.
                    rememberMeParameter: '_spring_security_remember_me'
                });
                userServiceProvider.configure('ezweb.auth.services.users.backend.default');
            }
        ]) //
        ;
});
