// Declare REST supported services
var restSupport = require('connect-rest');

var eventsStub = [
    {
        "id": 95512,
        "source": "paris",
        "nom": "Concert Cit&eacute; : Farnaz Modarresifar ",
        "description": "SOME HTML BLAH BLAH",
        "small_description": "SOME HTML BLAH BLAH",
        "lieu": "Cit&eacute; internationale des arts",
        "adresse": "18, rue de l'H&ocirc;tel de Ville",
        "lat": 48.8539539,
        "lon": "2.3572164",
        "hasFee": "0",
        "distance": 29.661,
        "categories": ["Concert", "Spectacles"],
        "files": [
        {
            "path": "http://SOMETHING.COM/SOMEFILE",
            "credit": "Farnaz+Modarresifar+"
        }
        ],
        "occurences": [
            {
                "jour": "2014-10-13T00:00:00.000Z",
                "hour_start": "20:30:00",
                "hour_end": "21:30:00"
            }
        ]
    },
    {
        "id": 95513,
        "source": "paris",
        "nom": "Test event",
        "description": "yooooooo",
        "small_description": "yoooooooooo",
        "lieu": "Cit&eacute; internationale des arts",
        "adresse": "18, rue de l'H&ocirc;tel de Ville",
        "lat": 48.8539539,
        "lon": "2.3572164",
        "hasFee": "0",
        "distance": 29.661,
        "categories": ["Concert", "Spectacles"],
        "files": [
            {
                "path": "http://SOMETHING.COM/SOMEFILE",
                "credit": "Farnaz+Modarresifar+"
            }
        ],
        "occurences": [
            {
                "jour": "2014-10-13T00:00:00.000Z",
                "hour_start": "20:30:00",
                "hour_end": "21:30:00"
            }
        ]
    }
];

restSupport.get({
    path: '/example/hello'
}, function (req, content, next) {
    next(null, {
        example: 'Hello World'
    });
});

restSupport.get({
    path: '/events'
}, function(req, content, next){
    next (null, eventsStub);
});

restSupport.get({
   path: '/event/:id'
}, function(req, content, next){
    next (null, {
            "id": 95512,
            "source": "paris",
            "nom": "Concert Cit&eacute; : Farnaz Modarresifar ",
            "description": "SOME HTML BLAH BLAH",
            "small_description": "SOME HTML BLAH BLAH",
            "lieu": "Cit&eacute; internationale des arts",
            "adresse": "18, rue de l'H&ocirc;tel de Ville",
            "lat": 48.8539539,
            "lon": "2.3572164",
            "hasFee": "0",
            "distance": 29.661,
            "categories": ["Concert", "Spectacles"],
            "files": [
                {
                    "path": "http://SOMETHING.COM/SOMEFILE",
                    "credit": "Farnaz+Modarresifar+"
                }
            ],
            "occurences": [
                {
                    "jour": "2014-10-13T00:00:00.000Z",
                    "hour_start": "20:30:00",
                    "hour_end": "21:30:00"
                }
            ]
        },
        {
            "id": 95513,
            "source": "paris",
            "nom": "Test event",
            "description": "yooooooo",
            "small_description": "yoooooooooo",
            "lieu": "Cit&eacute; internationale des arts",
            "adresse": "18, rue de l'H&ocirc;tel de Ville",
            "lat": 48.8539539,
            "lon": "2.3572164",
            "hasFee": "0",
            "distance": 29.661,
            "categories": ["Concert", "Spectacles"],
            "files": [
                {
                    "path": "http://SOMETHING.COM/SOMEFILE",
                    "credit": "Farnaz+Modarresifar+"
                }
            ],
            "occurences": [
                {
                    "jour": "2014-10-13T00:00:00.000Z",
                    "hour_start": "20:30:00",
                    "hour_end": "21:30:00"
                }
            ]
        });
});

restSupport.get({
    path: '/userByEvents'
}, function(req, content, next){
    next (null, null);
});
