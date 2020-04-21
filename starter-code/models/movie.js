var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title:  String,
  genre:  String,
  plot:   String,
  cast:   [{
    type: Schema.Types.ObjectId,
    ref: 'celebrity'}]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;