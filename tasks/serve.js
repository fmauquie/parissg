
module.exports = function (grunt) {
    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['connect:dist:keepalive']);
        }
        grunt.task.run([ 'clean:server', 'generateMain', 'copy:css', 'connect:livereload', 'watch' ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([ 'serve' ]);
    });
};
