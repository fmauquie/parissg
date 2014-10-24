module.exports = {
    dist : {
        options : {
            collapseWhitespace : true
        },
        files : [ {
            expand : true,
            cwd : '<%= ezweb.app %>',
            src : [ '*.html', 'scripts/{,**/}*.html', 'vendor/ezweb/**/*.html' ],
            dest : '.tmp'
        } ]
    }
};
