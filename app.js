var express = require('express'); // this var has the functionality of the express module

var app = express(); // it specifies the app as a new express application = it represents the express application
// app has all the methods of the express able to be accesed on app

app.set('view engine', 'ejs');

var routes = require('./routes'); // it is gonna look into routes folder and put all routes into var routes

// it's telling express that the static assets are in public path directory
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



// Routes

// home - 1. parameter is the route, the 2nd is a callback function with a request and response parameters. Once the server gets request from the clients, it sends back the response
app.get('/', routes.home);

// movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// notFound - something that is often seen in production enviroment, best to have it at the end
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);

// app.listen(3000, function() {
//   console.log("The application is running on localhost:3000");
// });
