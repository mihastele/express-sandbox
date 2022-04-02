const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const modelRoutes = require('./routes/model');
const pathLink = require('./util/path');
const path = require('path');


/*
installing and setup pug

npm install --save pug
*/


/*
installing and setup ejs and handlebars

npm install --save ejs express-handlebars


*/

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views'); // optional, it is already default

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(pathLink, 'public')));
app.use('/admin', adminRoutes);
app.use('/model', modelRoutes);

app.use('/favicon.ico', (req, res, next) => {
  console.log('NEJ');
  res.send();
});

app.get('/izi', (req, res, next) => {
  // console.log(req);
  res.status(200).render('pages/izi', {req});
});


app.use((req, res, next) => {
  res.status(404).send('404 Page not found');
});


app.listen(3000);
