'use strict';

// Grab configs files in a directory and return on single object
function loadConfig(path) {
    var glob = require('glob'), object = {}, key;
    glob.sync('*', {
        cwd: path
    }).forEach(function (option) {
        key = option.replace(/\.js$/, '');
        object[key] = require(path + option);
    });
    return object;
}

module.exports = function (grunt) {

    // Init grunt config
    var config = {};
    grunt.util._.extend(config, loadConfig('./tasks/options/'));
    grunt.initConfig(config);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.loadTasks('tasks');
};
