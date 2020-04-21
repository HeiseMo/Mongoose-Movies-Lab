var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var celebSchema = new Schema({
  name:  String,
  occupation: String,
  catchPhrase:   String
});

const Celeb = mongoose.model('celebrity', celebSchema);

module.exports = Celeb;