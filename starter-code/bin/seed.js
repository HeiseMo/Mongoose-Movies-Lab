const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');

mongoose.connect('mongodb://localhost/starter-code', {
  useNewUrlParser: true
});

const celebs = [{
        name: "Rick Sanchez",
        occupation: "Scientist",
        catchPhrase: "Waba Lubba Dub Dub"
      },
      {
        name: "Morty Smith",
        occupation: "Student",
        catchPhrase: "Oh Jeez"
      },
      {
        name: "Birdperson",
        occupation: "Student",
        catchPhrase: "You appear to be dying. I will make efforts to prevent this, but can promise nothing"
      },
    ];

    Celeb.create(celebs).then(data => {
      console.log('Success');
      mongoose.connection.close();
    }).catch(err => {
      console.log(err);
    });