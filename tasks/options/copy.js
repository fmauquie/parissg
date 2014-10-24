module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= ezweb.app %>/scripts',
                dest: '.tmp/scripts/',
                src: [ '{,**/}*.css', '{,**/}*.less']
            },
            {
                expand: true,
                cwd: '<%= ezweb.app %>/vendor',
                dest: '.tmp/vendor/',
                src: [ '{,**/}*.css', '{,**/}*.less']
            },
            {
                expand: true,
                cwd: '<%= ezweb.app %>/scripts/',
                dest: '.tmp/scripts/',
                src: '{,**/}*.{png,jpg,jpeg,gif}'
            },
            {
                expand: true,
                cwd: '<%= ezweb.app %>/vendor',
                dest: '.tmp/vendor',
                src: '**/*.{png,jpg,jpeg,gif}'
            },
            {
                expand: true,
                cwd: '<%= ezweb.app %>/scripts/features',
                dest: '.tmp/scripts/features',
                src: '{,**/}*.{eot,svg,ttf,woff}'
            },
            {
                expand: true,
                cwd: '<%= ezweb.app %>/vendor',
                dest: '.tmp/vendor',
                src: '{,**/}*.{eot,svg,ttf,woff}'
            },
            {
                expand: true,
                cwd: '<%= ezweb.app %>',
                dest: '.tmp',
                src: [ '*.html', 'scripts/{,**/}*.html', 'vendor/ezweb/**/*.html' ]
            },
            {
                expand: true,
                dot: true,
                cwd: '<%= ezweb.app %>',
                dest: '.tmp',
                src: [ '*.{ico,png,txt}', '.htaccess' ]
            },
            {
                expand: true,
                dot: true,
                cwd: '<%= ezweb.app %>/scripts',
                dest: '.tmp/scripts',
                src: '{,**/}*.{js,json}'
            },
            {
                expand: true,
                dot: true,
                cwd: '<%= ezweb.app %>/vendor',
                dest: '.tmp/vendor',
                src: [ '{,**/}*.{js,json}' ]
            }
        ]
    },
    postclean: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: '.tmp/vendor',
                dest: '<%= ezweb.dist %>/vendor/',
                src: [ 'requirejs/require.js', 'json3/{,**/}*.js', 'respond/{,**/}*.js' ]
            }
        ]
    },
    css: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: '<%= ezweb.dist %>/scripts',
                dest: '.tmp/scripts/',
                src: [ '*.css']
            }
        ]
    }
};
