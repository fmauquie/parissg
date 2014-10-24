// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function (karma) {
    var configuration = {
        // base path, that will be used to resolve files and exclude
        // '' means path of karma.conf.js file watch is under Website folder
        basePath: '../../',

        // karma-jasmine plugin is an Adapter for the Jasmine testing framework.
        //      load jasmine (this replaces JASMINE and JASMINE_ADAPTER file references)
        // use karma-requirejs plugin then exclude your require main.js
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            //--- app files
            //      Should the files be included in the browser using <script> tag? Use false if you wanna load them manually, eg. using Require.js
            // **/*.js: All files with a "js" extension in all subdirectories

            'test/test-main.js',
            'app/vendor/ezweb/**/*.html',
            'app/scripts/**/*.html',

            { pattern: 'app/scripts/**/*.js', included: false },
            { pattern: 'app/vendor/**/*.js', included: false },

            { pattern: 'test/**/*.js', included: false },

            //// These are not watched because they're not expected to change.
            //// These are not included because they are not JavaScript files and Karma inserts
            //// these as <script> tags.
            //// These are served however, as the adapter will load them into the captured browsers.
            //// The cucumber-html.css file can be copied and customized, simply change the path.
            //// The adapter will load any file ending with '.css' into the captured browsers.
            //{ pattern: 'node_modules/karma-cucumberjs/vendor/cucumber-html.css', watched: false, included: false, served: true },
            //{ pattern: 'test/bdd-tests/app.template', watched: false, included: false, served: true },


            //// These are not included because they're text feature files and shouldn't go in script tags.
            //// These are watched because feature files will change during dev and you want Karma to run
            //// tests when these change.
            //// These are served by Karma so the adapter can load their contents when its time to test.
            //{ pattern: 'test/bdd-tests/features/*.feature', watched: true, included: false, served: true },

            { pattern: 'app/vendor/ezweb/**/*.less', included: false, served: true}

            //// The adapter is not watched as it will not change.
            //// The adapter is included so it gets added as a <script> to the page.
            //// The adpater is served so the <script> tag will work when its added to the captured browsers.
            //{ pattern: 'node_modules/karma-cucumberjs/lib/adapter.js', watched: false, included: true, served: true },


            //// The step definitions should be loaded last so the adapter can load the global functions
            //// needed by the step defs.
            //// The step defs are watched and served so Karma runs when they change.
            //{ pattern: 'test/bdd-tests/steps/*.js', watched: true, included: true, served: true }
        ],

        exclude: [
            'app/scripts/main.js',
            'app/vendor/ezweb/**/*.spec.js'
        ],

        //IMPORTANT: USE ONLY PhantomJS WHEN COMMIT
        browsers: ['PhantomJS'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        reporters: ['progress', 'dots', 'junit'],

        htmlReporter: {
            outputDir: 'build/logs'
        },

//
//        preprocessors: {
//            'app/**/*.js': 'coverage'
//        },
//
//        coverageReporter: {
//            type : 'lcov',
//            dir : 'testCoverage/'
//        },

        // web server port
        port: 8080,
        // runner port
        runnerPort: 9100,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        // CLI --log-level debug
        logLevel: karma.LOG_INFO,

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 6000,

        autoWatch: true,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        //load the needed plugins (according to karma docs, this should not be needed tho)
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-requirejs',
            'karma-phantomjs-launcher',
            "karma-junit-reporter"
            //"karma-coverage"
        ]

    };

    karma.set(configuration);

};