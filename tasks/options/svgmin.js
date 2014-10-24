module.exports = {
    dist : {
        files : [ {
            expand : true,
            cwd : '<%= ezweb.app %>/scripts',
            src : '{,**/}*.svg',
            dest : '.tmp/images'
        } ]
    }
};
