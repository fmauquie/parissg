module.exports = {
    options : {
        jshintrc : '.jshintrc',
        reporter : require('jshint-stylish')
    },
    all : [ 'Gruntfile.js', '<%= ezweb.app %>/scripts/{,**/}*.js'],
    test : {
        options : {
            jshintrc : 'test/.jshintrc'
        },
        src : [ 'test/spec/{,*/}*.js' ]
    }
};
