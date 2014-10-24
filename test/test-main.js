'use strict';

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/.spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

require.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        angular: 'app/vendor/angular/angular',
        ngMocks: 'app/vendor/angular-mocks/angular-mocks',
        ngRoute: 'app/vendor/angular-route/angular-route',
        ngResource: 'app/vendor/angular-resource/angular-resource',
        ngScenario: 'app/vendor/angular-scenario/angular-scenario',
        ngCookies: 'app/vendor/angular-cookies/angular-cookies',
        ngSanitize: 'app/vendor/angular-sanitize/angular-sanitize',
        jquery: 'app/vendor/jquery/dist/jquery',
        'domReady': 'app/vendor/domready/domReady',
        'Source': 'app/scripts',
        'Specs': 'test/spec',
        ezweb: 'app/vendor/ezweb',
        text: 'app/vendor/requirejs-text/text',
        'ez-i18n': 'app/vendor/ezweb/i18n/ez-i18n',
        bootstrap: 'app/vendor/bootstrap/dist/js/bootstrap',
        less: 'app/vendor/ezweb/stub/less',
        lessc: 'app/vendor/require-less/lessc',
        normalize: 'app/vendor/require-less/normalize',
        bootstrapDatepicker: 'app/vendor/bootstrap-datepicker/js/bootstrap-datepicker',
        moment: 'app/vendor/moment/moment',
        bootstrapDatepickerLocales: 'app/vendor/bootstrap-datepicker/js/locales',
        momentLang: 'app/vendor/moment/lang'
    },

    shim: {
        ngRoute: {
            deps: ['angular'],
            exports: 'ngRoute'
        },
        ngMocks: {
            deps: ['angular'],
            exports: 'ngMocks'
        },
        ngResource: {
            deps: ['angular'],
            exports: 'ngResource'
        },
        ngScenario: ['angular'],
        ngCookies: ['angular'],
        ngSanitize: ['angular'],
        angular: {
            deps: [ 'jquery'],
            exports: 'angular'
        },
        bootstrap: {
            deps: ['jquery', 'less']
        }
    },
    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
