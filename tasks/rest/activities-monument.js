// Declare REST supported services
var restSupport = require('connect-rest');

restSupport.get({
    path: '/api/activities/date/:when/category/monument/geo/:geo/offset/:offset/limit/:limit'
}, function (req, content, next) {
    next(null,
        [
            {
                "id": 3479,
                "source": "paris api",
                "name": "Hôtel de Ville",
                "description": null,
                "small_description": null,
                "lieu": null,
                "address": "1, place de l\\'Hôtel de ville",
                "geolocation": "48.8572611183535,2.334423065185547",
                "distance": 132.64,
                "hasFee": null,
                "categories": ["Monument" ],
                "files": [],
                "occurences": []
            },
            {
                "id": 5045,
                "source": "paris api",
                "name": "Tour Saint Jacques",
                "description": null,
                "small_description": null,
                "lieu": null,
                "address": "88 rue de Rivoli",
                "geolocation": "48.8572611183535,2.334423065185547",
                "distance": 289.458,
                "hasFee": null,
                "categories": ["Monument" ],
                "files": [],
                "occurences": []
            },
            {
                "id": 1202,
                "source": "paris api",
                "name": "Notre-Dame de Paris",
                "description": null,
                "small_description": null,
                "lieu": null,
                "address": "6 Place du Parvis de Notre-Dame ",
                "geolocation": "48.8572611183535,2.334423065185547",
                "distance": 433.192,
                "hasFee": null,
                "categories": ["Monument"],
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
                "categories": ["Monument"],
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
                "categories": ["Monument"],
                "files": [],
                "occurences": []
            }]
    );
});
