// Declare REST supported services
var restSupport = require('connect-rest');

restSupport.get({
    path: '/api/activities/date/:when/category/film/geo/:geo/offset/:offset/limit/:limit'
}, function (req, content, next) {
    next(null,
        [

            {
                "id": 9008,
                "source": "allocine",
                "name": "Film \"Hautes-Terres\"",
                "description": "",
                "small_description": "",
                "lieu": "Le Nouveau Latina",
                "address": "20, rue du Temple - Paris 4e arrondissement",
                "geolocation": "48.858615,2.353515",
                "distance": 0.25,
                "hasFee": "0",
                "categories": [
                    "Film"
                ],
                "files": [
                    {
                        "path": "http://images.allocine.fr/pictures/14/06/26/10/48/587761.jpg"
                    },
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/70/85/59/19698628.jpg"
                    }
                ],
                "occurences": [
                    {
                        "jour": "2014-10-28T00:00:00.000Z",
                        "hour_start": "20:00:00",
                        "hour_end": "20:00:00"
                    }
                ]
            },
            {
                "id": 9009,
                "source": "allocine",
                "name": "Film \"Le Bal des vampires\"",
                "description": "",
                "small_description": "",
                "lieu": "Le Nouveau Latina",
                "address": "20, rue du Temple - Paris 4e arrondissement",
                "geolocation": "48.858615,2.353515",
                "distance": 0.25,
                "hasFee": "0",
                "categories": [
                    "Film"
                ],
                "files": [
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/35/59/99/19355043.jpg"
                    },
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/70/85/59/19698628.jpg"
                    }
                ],
                "occurences": [
                    {
                        "jour": "2014-10-26T00:00:00.000Z",
                        "hour_start": "18:00:00",
                        "hour_end": "18:00:00"
                    }
                ]
            },
            {
                "id": 9010,
                "source": "allocine",
                "name": "Film \"Qui veut la peau de Roger Rabbit ?\"",
                "description": "",
                "small_description": "",
                "lieu": "Le Nouveau Latina",
                "address": "20, rue du Temple - Paris 4e arrondissement",
                "geolocation": "48.858615,2.353515",
                "distance": 0.25,
                "hasFee": "0",
                "categories": [
                    "Film"
                ],
                "files": [
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/66/84/62/18959140.jpg"
                    },
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/70/85/59/19698628.jpg"
                    }
                ],
                "occurences": [
                    {
                        "jour": "2014-10-24T00:00:00.000Z",
                        "hour_start": "16:00:00",
                        "hour_end": "16:00:00"
                    },
                    {
                        "jour": "2014-10-26T00:00:00.000Z",
                        "hour_start": "14:00:00",
                        "hour_end": "14:00:00"
                    }
                ]
            },
            {
                "id": 9011,
                "source": "allocine",
                "name": "Film \"Une vie de chat\"",
                "description": "",
                "small_description": "",
                "lieu": "Le Nouveau Latina",
                "address": "20, rue du Temple - Paris 4e arrondissement",
                "geolocation": "48.858615,2.353515",
                "distance": 0.25,
                "hasFee": "0",
                "categories": [
                    "Film"
                ],
                "files": [
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/63/78/79/19510694.jpg"
                    },
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/70/85/59/19698628.jpg"
                    }
                ],
                "occurences": [
                    {
                        "jour": "2014-10-28T00:00:00.000Z",
                        "hour_start": "10:15:00",
                        "hour_end": "10:15:00"
                    }
                ]
            },
            {
                "id": 9012,
                "source": "allocine",
                "name": "Film \"E.T. l'extra-terrestre\"",
                "description": "",
                "small_description": "",
                "lieu": "Le Nouveau Latina",
                "address": "20, rue du Temple - Paris 4e arrondissement",
                "geolocation": "48.858615,2.353515",
                "distance": 0.25,
                "hasFee": "0",
                "categories": [
                    "Film"
                ],
                "files": [
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/00/02/36/52/affet.jpg"
                    },
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/70/85/59/19698628.jpg"
                    }
                ],
                "occurences": [
                    {
                        "jour": "2014-10-25T00:00:00.000Z",
                        "hour_start": "14:00:00",
                        "hour_end": "14:00:00"
                    }
                ]
            },
            {
                "id": 9013,
                "source": "allocine",
                "name": "Film \"Freaks\"",
                "description": "",
                "small_description": "",
                "lieu": "Le Nouveau Latina",
                "address": "20, rue du Temple - Paris 4e arrondissement",
                "geolocation": "48.858615,2.353515",
                "distance": 0.25,
                "hasFee": "0",
                "categories": [
                    "Film"
                ],
                "files": [
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/00/02/24/09/affiche.jpg"
                    },
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/70/85/59/19698628.jpg"
                    }
                ],
                "occurences": [
                    {
                        "jour": "2014-10-25T00:00:00.000Z",
                        "hour_start": "18:15:00",
                        "hour_end": "18:15:00"
                    }
                ]
            },
            {
                "id": 9014,
                "source": "allocine",
                "name": "Film \"J'arrête quand je veux\"",
                "description": "",
                "small_description": "",
                "lieu": "Le Nouveau Latina",
                "address": "20, rue du Temple - Paris 4e arrondissement",
                "geolocation": "48.858615,2.353515",
                "distance": 0.25,
                "hasFee": "0",
                "categories": [
                    "Film"
                ],
                "files": [
                    {
                        "path": "http://images.allocine.fr/pictures/14/05/21/16/08/372748.jpg"
                    },
                    {
                        "path": "http://images.allocine.fr/medias/nmedia/18/70/85/59/19698628.jpg"
                    }
                ],
                "occurences": [
                    {
                        "jour": "2014-10-27T00:00:00.000Z",
                        "hour_start": "22:00:00",
                        "hour_end": "22:00:00"
                    }
                ]
            }]
    );
});
