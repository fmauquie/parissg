module.exports = {
    js: {
        files: [ '{.tmp,<%= ezweb.app %>}/scripts/{,**/}*.js', '<%= ezweb.app %>/vendor/ezweb/{,**/}*.js' ],
        tasks: [ 'newer:jshint:all' ]
    },
    mainJs: {
        files: [ '<%= ezweb.app %>/scripts/requirejs.conf.json' ],
        tasks: [ 'generateMain' ]
    },
    jsTest: {
        files: [ 'test/spec/{,**/}*.js' ],
        tasks: [ 'newer:jshint:test', 'karma' ]
    },
    gruntfile: {
        files: [ 'Gruntfile.js' ]
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= ezweb.app %>/scripts/{,**/}*.html',
            '<%= ezweb.app %>/scripts/{,**/}*.less',
            '<%= ezweb.app %>/scripts/{,**/}*.css',
            '<%= ezweb.app %>/scripts/{,**/}*.js',
            '<%= ezweb.app %>/scripts/{,**/}*.{png,jpg,jpeg,gif,webp,svg}',
            '.tmp/scripts/main.js'
        ]
    }
};
