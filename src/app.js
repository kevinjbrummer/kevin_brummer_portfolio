const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { contactValidationChain, validateContactForm } = require('./middleware/validation')
const validateRecaptcha = require('./middleware/recaptcha');
const sendMail = require('./middleware/mail');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
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
    });
  }
);

app.use('/assets', express.static(path.join(__dirname, '/public')));

module.exports = app;