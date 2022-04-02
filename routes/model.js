const express = require('express');
const Model = require('../models/model');
const model = require('../models/model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log(req.path);
  res.send(await model.fetchAll());
});

router.post('/', (req, res, next) => {
  const mdl = new Model('Marko', 100, 5, 30);
  mdl.save();
  console.log(req.path);
  res.redirect('/model/done');
});


router.get('/done', (req, res, next) => {
  console.log('gg');
  res.status(201).send('DONE');
});

module.exports = router;
