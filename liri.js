var spotify = require("node-spotify-api");
var axios = require("axios");
var dotEnv = ("dotenv").config();
var keys = require("./keys.js");



var act = process. argv[2];
var request = process.argv.slice(3).join(" ");

console.log(act);
console.log(request);


// concert info request 
function concertfind(request) {
    
    //axios for search for concert
    axious.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response){
        console.log("Here is your concert information.")
        console.log("Venue: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.city + " " + response.data[0].venue.country)
    }).catch(function(error){
        if (error.response){
            console.log("info");
            console.log(error.response.data);
        }
    }); 
};



function movie(request) {
    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + request).then(function (response){
        console.log("Movie Info  \n");
        console.log("Name: " + response.Title + "\nYear: " + response.Year + "\nIMDB Rating: " + response.Ratings[0].Value +  "\nPlot: " + response.Plot + "\nActors & Actresses: " + response.Actors)
    }).catch(function (error){
        if (error.response){
            console.log("info");
            console.log(error.response.data);
        }
    });
};

function songSearch(request){
    var spotify = new spotify(keys.spotify);
    spotify.search({
        type: 'track',
        query: request
    }).then (function(data){
        if (request === "") {
            request = "the sign"
            console.log("Song Info \n")
        } else {
            for(i=0; i<data.tracks.items.length; i++){
                console.log("Match " + i +":\nArtist: " + data.tracks.items[i].artists[0].name + "\nSong: " + data.tracks.items[i].name +"\nAlbum: " + data.tracks.items[i].album.name + "\n Preview: " + data.tracks.items[i].preview_url);
        }
    };
    });

    switch (action) {
        case "concert-finder":
            findConcert(request);
    
            break;
        case "spotify-song":
            findSong(request)
            break;
        case "movie-search":
            findMovie(request)
            break;
        default:
            console.log("Please enter a valid option.");
            break;
    }







}