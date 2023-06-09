const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { contactValidationChain, validateContactForm } = require('./middleware/validation')
const validateRecaptcha = require('./middleware/recaptcha');
const sendMail = require('./middleware/mail');
const { error } = require('console');

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
  validateRecaptcha,
  sendMail,
  (req, res) => {
   res.status(200).render('index', {
      title: 'Home',
      success: true,
      recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY,
    });
  }
);

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.use('/robots.txt', function (req, res, next) {
  res.type('text/plain')
  res.send(
    `User-agent: *
    Disallow: 
    Sitemap: https://kevinbrummer.com/assets/sitemap.xml`);
});

app.use((req, res, next) => {
  res.status(404).render('error', {status: 404});
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).render('error', {status: 500})
});

module.exports = app;