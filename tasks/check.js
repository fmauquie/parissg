module.exports = function (grunt) {
    grunt.registerTask('check', [ 'newer:jshint', 'test']);
};


