module.exports = {
    dist : {
        files : [ {
            dot : true,
            src : [ '.tmp', '<%= ezweb.dist %>/*', '!<%= ezweb.dist %>/.git*' ]
        } ]
    },
    postdist : {
        files : [ {
            dot : true,
            src: [
                '<%= ezweb.dist %>/scripts/features/{,**/}*.js',
                '<%= ezweb.dist %>/scripts/directives/{,**/}*.js',
                '<%= ezweb.dist %>/scripts/services/{,**/}*.js',
                '<%= ezweb.dist %>/scripts/filters/{,**/}*.js',
                '<%= ezweb.dist %>/scripts/{,**/}*.less',
                '<%= ezweb.dist %>/vendor/ezweb/{,**/}*.js',
                '<%= ezweb.dist %>/vendor/{,**/}*.less'
            ]
        } ]
    },
    server : '.tmp'
};
