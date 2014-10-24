// Declare REST supported services
var restSupport = require('connect-rest');

restSupport.get({
    path: '/example/hello'
}, function (req, content, next) {
    next(null, {
        example: 'Hello World'
    });
});
