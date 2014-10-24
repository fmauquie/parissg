//Load all supported rest services
var glob = require('glob');
glob.sync('*', {
    cwd: './tasks/rest/'
}).forEach(function (file) {
        key = file.replace(/\.js$/, '');
        require('../rest/' + file);
    });
