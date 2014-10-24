// Declare REST supported services
var restSupport = require('connect-rest');

restSupport.get({
    path: '/api/meteo'
}, function (req, content, next) {
    // http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric
    next(null, [{
        "status": "scattered clouds",
        "temp": 14.2,
    }]);
});
