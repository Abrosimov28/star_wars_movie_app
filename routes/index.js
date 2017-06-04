var moviesJSON = require('../movies.json');


// home - 1. parameter is the route, the 2nd is a callback function with a request and response parameters. Once the server gets request from the clients, it sends back the response
exports.home = function(req, res) {

  var movies = moviesJSON.movies;

  res.render('home', {
    title : "Star War Movies", // we are passing in value from our route
    movies : movies
  }); // don't need to specify view/...
};

// movie_single
exports.movie_single = function(req, res) {

  var episode_number = req.params.episode_number;

  var movies = moviesJSON.movies;

  if (episode_number >= 1 && episode_number <= 6) {

  var movie = movies[episode_number - 1];

  var title = movie.title;

  var main_characters = movie.main_characters;

  res.render('movie_single', {
    movies : movies,
    title : title,
    movie : movie,
    main_characters : main_characters
  });
} else {
  res.render('notFound', { // we are rendering notFound ejs
    movies : movies,
    title : "This is not the page you are looking for"
  });
}
};

// notFound - something that is often seen in production enviroment, best to have it at the end
exports.notFound = function(req, res) {
  var movies = moviesJSON.movies;
  res.render('notFound', {
    movies : movies,
    title : "This is not the page you are looking for"
  })
};
