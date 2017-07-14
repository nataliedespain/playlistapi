// BASE SETUP
// =============================================================================





// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({
     "results": [
       {
         "id": 1,
         "title": "Spreading Rumors",
         "artist": "Grouplove",
         "cover_art": "spreading_rumors.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "I'm With You",
            "length": "5:34"
          },
          {
            "id": 2,
            "title": "Borderlines And Aliens",
            "length": "3:50"
          },
          {
            "id": 3,
            "title": "Schoolboy",
            "length": "3:52"
          },
          {
            "id": 4,
            "title": "Ways to Go",
            "length": "3:36"
          },
          {
            "id": 5,
            "title": "Shark Attack",
            "length": "3:59"
          },
          {
            "id": 6,
            "title": "Sit Still",
            "length": "4:05"
          },
          {
            "id": 7,
            "title": "Hippy Hill",
            "length": "2:56"
          },
          {
            "id": 8,
            "title": "What I Know",
            "length": "3:55"
          },
          {
            "id": 9,
            "title": "Didn't Have To Go",
            "length": "3:45"
          },
          {
            "id": 10,
            "title": "Bitin' The Bullet",
            "length": "4:09"
          },
          {
            "id": 11,
            "title": "News To Me",
            "length": "3:46"
          },
          {
            "id": 12,
            "title": "Raspberry",
            "length": "3:16"
          },
          {
            "id": 13,
            "title": "Save The Party For Me",
            "length": "3:28"
          }
         ]
       },
       {
         "id": 2,
         "title": "In Return",
         "artist": "ODESZA",
         "cover_art": "in_return.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Always This Late",
            "length": "2:41"
          },
          {
            "id": 2,
            "title": "Say My Name",
            "length": "4:23"
          },
          {
            "id": 3,
            "title": "Bloom",
            "length": "3:16"
          },
          {
            "id": 4,
            "title": "All We Need",
            "length": "3:31"
          },
          {
            "id": 5,
            "title": "Sundara",
            "length": "2:16"
          },
          {
            "id": 6,
            "title": "White Lies",
            "length": "4:37"
          },
          {
            "id": 7,
            "title": "Kusanagi",
            "length": "3:28"
          },
          {
            "id": 8,
            "title": "Echoes",
            "length": "4:24"
          },
          {
            "id": 9,
            "title": "It's Only",
            "length": "4:28"
          },
          {
            "id": 10,
            "title": "Koto",
            "length": "3:14"
          },
          {
            "id": 11,
            "title": "Memories That You Call",
            "length": "4:08"
          },
          {
            "id": 12,
            "title": "Sun Models",
            "length": "2:40"
          },
          {
            "id": 13,
            "title": "For Us",
            "length": "5:49"
          }
         ]
       },
       {
         "id": 3,
         "title": "Passive Me, Agressive You",
         "artist": "The Naked And Famous",
         "cover_art": "naked_famous.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "All Of This",
            "length": "3:55"
          },
          {
            "id": 2,
            "title": "Punching In A Dream",
            "length": "3:58"
          },
          {
            "id": 3,
            "title": "Frayed",
            "length": "3:46"
          },
          {
            "id": 4,
            "title": "The Source",
            "length": "0:48"
          },
          {
            "id": 5,
            "title": "The Sun",
            "length": "3:57"
          },
          {
            "id": 6,
            "title": "Eyes",
            "length": "4:43"
          },
          {
            "id": 7,
            "title": "Young Blood",
            "length": "4:07"
          },
          {
            "id": 8,
            "title": "No Way",
            "length": "5:30"
          },
          {
            "id": 9,
            "title": "Spank",
            "length": "4:10"
          },
          {
            "id": 10,
            "title": "Jilted Lovers",
            "length": "3:16"
          },
          {
            "id": 11,
            "title": "A Wolf In Geek's Clothing",
            "length": "3:14"
          },
          {
            "id": 12,
            "title": "The Ends",
            "length": "1:49"
          },
          {
            "id": 13,
            "title": "Girls Like You",
            "length": "6:04"
          }
         ]
       },
       {
         "id": 4,
         "title": "Flume",
         "artist": "Flume",
         "cover_art": "flume.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Sintra",
            "length": "2:34"
          },
          {
            "id": 2,
            "title": "Holdin On",
            "length": "2:34"
          },
          {
            "id": 3,
            "title": "Left Alone",
            "length": "3:31"
          },
          {
            "id": 4,
            "title": "Sleepless",
            "length": "3:29"
          },
          {
            "id": 5,
            "title": "On Top",
            "length": "3:52"
          },
          {
            "id": 6,
            "title": "Stay Close",
            "length": "2:58"
          },
          {
            "id": 7,
            "title": "Insane",
            "length": "3:34"
          },
          {
            "id": 8,
            "title": "Change",
            "length": "2:28"
          },
          {
            "id": 9,
            "title": "Ezra",
            "length": "3:37"
          },
          {
            "id": 10,
            "title": "More Than You Thought",
            "length": "4:08"
          },
          {
            "id": 11,
            "title": "Space Cadet",
            "length": "2:13"
          },
          {
            "id": 12,
            "title": "Bring You Down",
            "length": "4:38"
          },
          {
            "id": 13,
            "title": "Warm Thoughts",
            "length": "3:48"
          },
          {
            "id": 14,
            "title": "What You Need",
            "length": "4:10"
          },
          {
            "id": 15,
            "title": "Star Eyes",
            "length": "2:27"
          }
         ]
       },
       {
         "id": 5,
         "title": "Pharmacy",
         "artist": "Galantis",
         "cover_art": "pharmacy.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Forever Tonight",
            "length": "3:39"
          },
          {
            "id": 2,
            "title": "Gold Dust",
            "length": "3:54"
          },
          {
            "id": 3,
            "title": "In My Head",
            "length": "3:41"
          },
          {
            "id": 4,
            "title": "Runaway (U & I)",
            "length": "3:47"
          },
          {
            "id": 5,
            "title": "Dancin' To The Sound Of A Broken Heart",
            "length": "3:39"
          },
          {
            "id": 6,
            "title": "Louder, Harder, Better",
            "length": "4:26"
          },
          {
            "id": 7,
            "title": "Kill 'Em With The Love",
            "length": "3:42"
          },
          {
            "id": 8,
            "title": "Call If You Need Me",
            "length": "4:01"
          },
          {
            "id": 9,
            "title": "Peanut Butter Jelly",
            "length": "3:23"
          },
          {
            "id": 10,
            "title": "Firebird",
            "length": "4:08"
          },
          {
            "id": 11,
            "title": "Don't Care",
            "length": "3:45"
          },
          {
            "id": 12,
            "title": "You",
            "length": "3:41"
          },
          {
            "id": 13,
            "title": "Water",
            "length": "3:43"
          }
         ]
       },
       {
         "id": 6,
         "title": "Cleopatra",
         "artist": "The Lumineers",
         "cover_art": "cleopatra.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Sleep On The Floor",
            "length": "3:32"
          },
          {
            "id": 2,
            "title": "Ophelia",
            "length": "2:40"
          },
          {
            "id": 3,
            "title": "Cleopatra",
            "length": "3:21"
          },
          {
            "id": 4,
            "title": "Gun Song",
            "length": "3:37"
          },
          {
            "id": 5,
            "title": "Angela",
            "length": "3:22"
          },
          {
            "id": 6,
            "title": "In The Light",
            "length": "3:52"
          },
          {
            "id": 7,
            "title": "Gale Song",
            "length": "3:14"
          },
          {
            "id": 8,
            "title": "Long Way From Home",
            "length": "2:32"
          },
          {
            "id": 9,
            "title": "Sick In The Head",
            "length": "2:31"
          },
          {
            "id": 10,
            "title": "My Eyes",
            "length": "3:37"
          },
          {
            "id": 11,
            "title": "Patience",
            "length": "1:37"
          }
         ]
       },
       {
         "id": 7,
         "title": "If You Leave",
         "artist": "Daughter",
         "cover_art": "daughter.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Winter",
            "length": "4:42"
          },
          {
            "id": 2,
            "title": "Smother",
            "length": "4:01"
          },
          {
            "id": 3,
            "title": "Youth",
            "length": "4:13"
          },
          {
            "id": 4,
            "title": "Still",
            "length": "3:33"
          },
          {
            "id": 5,
            "title": "Lifeforms",
            "length": "5:35"
          },
          {
            "id": 6,
            "title": "Tomorrow",
            "length": "4:39"
          },
          {
            "id": 7,
            "title": "Human",
            "length": "3:32"
          },
          {
            "id": 8,
            "title": "Touch",
            "length": "4:26"
          },
          {
            "id": 9,
            "title": "Amsterdam",
            "length": "4:02"
          },
          {
            "id": 10,
            "title": "Shallows",
            "length": "6:54"
          }
         ]
       },
       {
         "id": 8,
         "title": "Currents",
         "artist": "Tame Impala",
         "cover_art": "currents.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Let It Happen",
            "length": "7:48"
          },
          {
            "id": 2,
            "title": "Nangs",
            "length": "1:48"
          },
          {
            "id": 3,
            "title": "The Moment",
            "length": "4:15"
          },
          {
            "id": 4,
            "title": "Yes I'm Changing",
            "length": "4:31"
          },
          {
            "id": 5,
            "title": "Eventually",
            "length": "5:19"
          },
          {
            "id": 6,
            "title": "Gossip",
            "length": "0:55"
          },
          {
            "id": 7,
            "title": "The Less I Know The Better",
            "length": "3:36"
          },
          {
            "id": 8,
            "title": "Past Life",
            "length": "3:48"
          },
          {
            "id": 9,
            "title": "Diciples",
            "length": "1:49"
          },
          {
            "id": 10,
            "title": "'Cause I'm A Man",
            "length": "4:02"
          },
          {
            "id": 11,
            "title": "Reality In Motion",
            "length": "4:12"
          },
          {
            "id": 12,
            "title": "Love/Paranoia",
            "length": "3:06"
          },
          {
            "id": 13,
            "title": "New Person, Same Old Mistakes",
            "length": "6:03"
          }
         ]
       },
       {
         "id": 9,
         "title": "ZABA",
         "artist": "Glass Animals",
         "cover_art": "zaba.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Flip",
            "length": "3:43"
          },
          {
            "id": 2,
            "title": "Black Mambo",
            "length": "4:09"
          },
          {
            "id": 3,
            "title": "Pools",
            "length": "4:49"
          },
          {
            "id": 4,
            "title": "Gooey",
            "length": "4:49"
          },
          {
            "id": 5,
            "title": "Walla Walla",
            "length": "3:37"
          },
          {
            "id": 6,
            "title": "Intruxx",
            "length": "2:49"
          },
          {
            "id": 7,
            "title": "Hazey",
            "length": "4:26"
          },
          {
            "id": 8,
            "title": "Toes",
            "length": "4:15"
          },
          {
            "id": 9,
            "title": "Wyrd",
            "length": "4:06"
          },
          {
            "id": 10,
            "title": "Cocoa Hooves",
            "length": "4:32"
          },
          {
            "id": 11,
            "title": "JDNT",
            "length": "4:24"
          }
         ]
       },
       {
         "id": 10,
         "title": "Miracle Mile",
         "artist": "STRFKR",
         "cover_art": "strfkr.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "While I'm Alive",
            "length": "3:50"
          },
          {
            "id": 2,
            "title": "Sazed",
            "length": "3:27"
          },
          {
            "id": 3,
            "title": "Malmo",
            "length": "3:36"
          },
          {
            "id": 4,
            "title": "Beach Monster",
            "length": "2:12"
          },
          {
            "id": 5,
            "title": "Isea",
            "length": "0:54"
          },
          {
            "id": 6,
            "title": "YAYAYA",
            "length": "2:14"
          },
          {
            "id": 7,
            "title": "Fortune's Fool",
            "length": "2:07"
          },
          {
            "id": 8,
            "title": "Kahlil Gibran",
            "length": "4:01"
          },
          {
            "id": 9,
            "title": "Say to You",
            "length": "4:26"
          },
          {
            "id": 10,
            "title": "Atlantis",
            "length": "2:31"
          },
          {
            "id": 11,
            "title": "Leave It All Behind",
            "length": "3:17"
          },
          {
            "id": 12,
            "title": "I Don't Want To See",
            "length": "3:35"
          },
          {
            "id": 13,
            "title": "Last Words",
            "length": "2:57"
          },
          {
            "id": 14,
            "title": "Golden Light",
            "length": "4:43"
          },
          {
            "id": 15,
            "title": "Nite Rite",
            "length": "7:12"
          }
         ]
       },
       {
         "id": 11,
         "title": "Bloom",
         "artist": "RUFUS DU SOL",
         "cover_art": "bloom.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Brighter",
            "length": "4:41"
          },
          {
            "id": 2,
            "title": "Like An Animal",
            "length": "4:02"
          },
          {
            "id": 3,
            "title": "Say A Prayer For Me",
            "length": "4:37"
          },
          {
            "id": 4,
            "title": "You Were Right",
            "length": "3:59"
          },
          {
            "id": 5,
            "title": "Be With You",
            "length": "4:03"
          },
          {
            "id": 6,
            "title": "Daylight",
            "length": "3:16"
          },
          {
            "id": 7,
            "title": "Hypnotised",
            "length": "4:07"
          },
          {
            "id": 8,
            "title": "Tell Me",
            "length": "3:49"
          },
          {
            "id": 9,
            "title": "Until the Sun Needs to Rise",
            "length": "4:52"
          },
          {
            "id": 10,
            "title": "Lose My Head",
            "length": "4:24"
          },
          {
            "id": 11,
            "title": "Innerbloom",
            "length": "9:38"
          }
         ]
       },
       {
         "id": 12,
         "title": "For Emma, Forever Ago",
         "artist": "Bon Iver",
         "cover_art": "bon_iver.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Flume",
            "length": "3:39"
          },
          {
            "id": 2,
            "title": "Lump Sum",
            "length": "3:21"
          },
          {
            "id": 3,
            "title": "Skinny Love",
            "length": "3:59"
          },
          {
            "id": 4,
            "title": "The Wolves (Act I and II)",
            "length": "5:22"
          },
          {
            "id": 5,
            "title": "Blindsided",
            "length": "5:29"
          },
          {
            "id": 6,
            "title": "Creature Fear",
            "length": "3:06"
          },
          {
            "id": 7,
            "title": "Team",
            "length": "1:57"
          },
          {
            "id": 8,
            "title": "For Emma",
            "length": "3:41"
          },
          {
            "id": 9,
            "title": "Re: Stacks",
            "length": "6:41"
          }
         ]
       },
       {
         "id": 13,
         "title": "GENERATIONWHY",
         "artist": "ZHU",
         "cover_art": "zhu.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Intro (Neon City)",
            "length": "1:10"
          },
          {
            "id": 2,
            "title": "Cold Blooded",
            "length": "4:18"
          },
          {
            "id": 3,
            "title": "In The Morning",
            "length": "4:06"
          },
          {
            "id": 4,
            "title": "Secret Weapon",
            "length": "4:03"
          },
          {
            "id": 5,
            "title": "Electrify Me",
            "length": "4:16"
          },
          {
            "id": 6,
            "title": "Numb",
            "length": "4:27"
          },
          {
            "id": 7,
            "title": "Palm of My Hand",
            "length": "6:13"
          },
          {
            "id": 8,
            "title": "Money",
            "length": "5:07"
          },
          {
            "id": 9,
            "title": "One Minute to Midnight",
            "length": "4:16"
          },
          {
            "id": 10,
            "title": "Reaching",
            "length": "4:16"
          },
          {
            "id": 11,
            "title": "Hometown Girl",
            "length": "4:12"
          },
          {
            "id": 12,
            "title": "Good Life",
            "length": "4:31"
          },
          {
            "id": 13,
            "title": "Generationwhy",
            "length": "3:52"
          }
         ]
       },
       {
         "id": 14,
         "title": "Rise",
         "artist": "Lane 8",
         "cover_art": "rise.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "Loving You",
            "length": "4:02"
          },
          {
            "id": 2,
            "title": "Diamonds",
            "length": "5:54"
          },
          {
            "id": 3,
            "title": "Klara",
            "length": "5:48"
          },
          {
            "id": 4,
            "title": "Ghost",
            "length": "3:25"
          },
          {
            "id": 5,
            "title": "Cosi",
            "length": "3:52"
          },
          {
            "id": 6,
            "title": "Hot As You Want",
            "length": "4:47"
          },
          {
            "id": 7,
            "title": "Undercover",
            "length": "4:47"
          },
          {
            "id": 8,
            "title": "Sunlight",
            "length": "4:55"
          },
          {
            "id": 9,
            "title": "The Great Divide",
            "length": "3:26"
          },
          {
            "id": 10,
            "title": "Rise",
            "length": "6:58"
          }
         ]
       },
       {
         "id": 15,
         "title": "another eternity",
         "artist": "Purity Ring",
         "cover_art": "purity_ring.jpg",
         "tracks": [
          {
            "id": 1,
            "title": "heartsigh",
            "length": "3:19"
          },
          {
            "id": 2,
            "title": "bodyache",
            "length": "2:53"
          },
          {
            "id": 3,
            "title": "push pull",
            "length": "3:28"
          },
          {
            "id": 4,
            "title": "repetition",
            "length": "3:39"
          },
          {
            "id": 5,
            "title": "stranger than earth",
            "length": "4:19"
          },
          {
            "id": 6,
            "title": "begin again",
            "length": "3:37"
          },
          {
            "id": 7,
            "title": "dust hymn",
            "length": "3:30"
          },
          {
            "id": 8,
            "title": "floor on the floor",
            "length": "3:15"
          },
          {
            "id": 9,
            "title": "sea castle",
            "length": "3:27"
          },
          {
            "id": 10,
            "title": "stillness in woe",
            "length": "4:01"
          }
         ]
       }
     ]
    }
);
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
