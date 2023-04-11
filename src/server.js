'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const { body ,validationResult } = require('express-validator');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY });
});


app.use(bodyParser.urlencoded({ extended: false }));
app.post(
  '/',
  body("name").not().isEmpty(),
  body("email").isEmail(),
  body("message").not().isEmpty(),
  (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("index", {title: 'Home', 
                                errors: errors.array(), 
                                success: false, 
                                name: req.body.name,
                                email: req.body.email,
                                message: req.body.message});
  } else {
    res.render("index", {title: 'Home', success: true});
  }
});

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});