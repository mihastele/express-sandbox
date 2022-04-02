/* eslint-disable new-cap */
const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/noforward', (req, res, next) => {
  console.log('noforward');
  res.send();
});

router.post((req, res, next) => {
  console.log('I\'m in middleware');
  next();
});

router.use('/miha', controller.mihacontroller);
module.exports = router;
