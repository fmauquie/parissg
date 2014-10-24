module.exports = function (grunt) {

    grunt.registerTask('dist', [
        'clean:dist',
        'generateMain',
        'copy:dist',
        'requirejs:dist',
        'clean:postdist',
        'copy:postclean',
        'compress'
    ]);

    grunt.registerTask('default', function () {
        grunt.log.warn('Starting dist ...');
        grunt.task.run([ 'dist' ]);
    });
};
