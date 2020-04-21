const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity');

router.get('/celebrities', (req, res) => {
  Celeb.find().then(celebrities => {
  res.render('celebrities/index', { celebList: celebrities });
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new");
});

router.post('/celebrities/new', (req, res, next) => {
        
  const newCeleb = new Celeb(req.body);
  newCeleb.save()
  .then(() => {
      res.redirect('/celebrities');
  })
  .catch((error) => {
      console.log(error);
  })
});

router.get('/celebrities/:id', (req, res, next) => {
  Celeb.findById(req.params.id)
  .then(oneCeleb => {
    res.render('celebrities/show', {celeb: oneCeleb});
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/celebrities/:id/delete', (req, res, next) => {
  Celeb.findByIdAndRemove(req.params.id)
  .then(oneCeleb => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log(error);
  });
});


module.exports = router;