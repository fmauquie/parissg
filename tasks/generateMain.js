'use strict';

var _ = require('lodash');

module.exports = function (grunt) {

    grunt.registerTask('generateMain', function () {
        var options = this.options({
            config: grunt.config.process('<%= ezweb.app %>/scripts/requirejs.conf.json'),
            tmp: '.tmp/scripts'
        });
        var defaultRequireJsConfig = grunt.file.readJSON(grunt.config.process('<%= ezweb.app %>/vendor/ezweb/stub/requirejs.conf.json'));
        var projectRequireJsConfig = grunt.file.readJSON(options.config);

        var finalConfig = _.assign({}, defaultRequireJsConfig, projectRequireJsConfig);
        _.assign(finalConfig.paths, defaultRequireJsConfig.paths, projectRequireJsConfig.paths);
        _.assign(finalConfig.shim, defaultRequireJsConfig.shim, projectRequireJsConfig.shim);

        var mainJs = 'require.config(' + JSON.stringify(finalConfig) + ');';

        grunt.file.write(options.tmp + '/main.js', mainJs);
    });
};
