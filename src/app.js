const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { contactValidationChain, validateContactForm } = require('./components/validation')

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY });
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post(
  '/',
  contactValidationChain(),
  validateContactForm,
  (req, res, next) => {
    res.status(200).end();

});

app.use('/assets', express.static(path.join(__dirname, '/public')));

module.exports = app;