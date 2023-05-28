const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { contactValidationChain, validateContactForm } = require('./middleware/validation')
const validateRecaptcha = require('./middleware/recaptcha');
const sendMail = require('./middleware/mail');

app.set('view engine', 'pug');
console.log(process.env.RECAPTCHA_SITE_KEY);

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

module.exports = app;