
/**
 * Declare connect:livereload middleware config
 * Adding REST support in additions of serving statics files
 * for dev / test setting purpose
 */
var restSupport = require('connect-rest');
var livereloadMiddlewareConfig = function(connect, options) {
    var middlewares = [];
    var directory = options.directory || options.base[options.base.length - 1];
    if (!Array.isArray(options.base)) {
        options.base = [ options.base ];
    }
    options.base.forEach(function(base) {
        // Serve static files.
        middlewares.push(connect.static(base));
    });
    // Make directory browse-able.
    middlewares.push(connect.directory(directory));

    middlewares.push(connect.json());
    middlewares.push(connect.query());
    middlewares.push(connect.urlencoded());
    middlewares.push(restSupport.rester());

    return middlewares;
};

module.exports = {
    options : {
        port : 9000,
        hostname : 'localhost',
        livereload : 35730
    },
    livereload : {
        options : {
            open : false,
            base : [ '.tmp', '<%= ezweb.app %>' ],
            middleware : livereloadMiddlewareConfig
        }
    },
    test : {
        options : {
            port : 9001,
            base : [ '.tmp', 'test', '<%= ezweb.app %>' ]
        }
    },
    dist : {
        options : {
            port : 9000,
            open : false,
            base : 'dist' ,
            middleware : livereloadMiddlewareConfig
        }
    }
};
