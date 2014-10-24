module.exports = {
    dist : {
        files : [ {
            expand : true,
            cwd : '<%= ezweb.app %>/images',
            src : '*.{png,jpg,jpeg,gif}',
            dest : '.tmp/images'
        },
        {
            expand : true,
            cwd : '<%= ezweb.app %>/ezweb',
            src : '**/*.{png,jpg,jpeg,gif}',
            dest : '.tmp/ezweb'
        } ]
    }
};
