const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity');
const Movie = require('../models/movie');

router.get('/movies', (req, res) => {
  Movie.find().then(movies => {
  res.render('movies/index', { movieList: movies });
  });
});

router.get('/movies/new', (req, res, next) => {
  Celeb.find().then(celebrities => {
    res.render('movies/new', { celebList: celebrities });
    });
});

router.post('/movies/new', (req, res, next) => {
        
  const newMovie = new Movie(req.body);
  newMovie.save()
  .then(() => {
      res.redirect('/movies');
  })
  .catch((error) => {
      console.log(error);
  });
});

module.exports = router;