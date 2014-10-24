// Declare REST supported services
var restSupport = require('connect-rest');

restSupport.get({
    path: '/api/activities/date/:when/category/sport/geo/:geo/offset/:offset/limit/:limit'
}, function (req, content, next) {
    next(null,
        [
            {
                "idactivites": 6370,
                "source": "paris api",
                "name": "Terrain de sport des jardins Saint-Paul",
                "description": null,
                "small_description": null,
                "lieu": null,
                "address": "9 rue Charlemagne",
                "geolocation": "48.8572611183535,2.334423065185547",
                "distance": 712.066,
                "hasFee": null,
                "categories": ["Sport"],
                "files": [],
                "occurences": []
            },
            {
                "idactivites": 6371,
                "source": "paris api",
                "name": "Terrain de sport Neuve Saint-Pierre",
                "description": null,
                "small_description": null,
                "lieu": null,
                "address": "5/7 rue Neuve Saint-Pierre",
                "geolocation": "48.8572611183535,2.334423065185547",
                "distance": 903.904,
                "hasFee": null,
                "categories": ["Sport"],
                "files": [],
                "occurences": []
            }]
    );
});
