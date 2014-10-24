// Declare REST supported services
var restSupport = require('connect-rest');

restSupport.get({
    path: '/api/activities/date/:when/category/museum/geo/:geo/offset/:offset/limit/:limit'
}, function (req, content, next) {
    next(null,
        [

                {
                    "id": 2894,
                    "source": "paris api",
                    "name": "Crypte archéologique du parvis de Notre-Dame",
                    "description": null,
                    "small_description": null,
                    "lieu": null,
                    "address": "Place Jean-Paul II ",
                    "geolocation": "48.8572611183535,2.334423065185547",
                    "distance": 414.778,
                    "hasFee": null,
                    "categories": ["Museum"],
                    "files": [],
                    "occurences": []
                },
                {
                    "id": 61,
                    "source": "paris api",
                    "name": "Centre national d'art et de culture Georges Pompidou",
                    "description": null,
                    "small_description": null,
                    "lieu": null,
                    "address": "3  rue Beaubourg",
                    "geolocation": "48.8572611183535,2.334423065185547",
                    "distance": 437.766,
                    "hasFee": null,
                    "categories": ["Museum"],
                    "files": [],
                    "occurences": []
                },
                {
                    "id": 3422,
                    "source": "paris api",
                    "name": "La Conciergerie",
                    "description": null,
                    "small_description": null,
                    "lieu": null,
                    "address": "2 boulevard du palais",
                    "geolocation": "48.8572611183535,2.334423065185547",
                    "distance": 481.309,
                    "hasFee": null,
                    "categories": ["Museum"],
                    "files": [],
                    "occurences": []
                }]
    );
});
