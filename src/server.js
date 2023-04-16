'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { body ,validationResult } = require('express-validator');

const contactValidationResult = validationResult.withDefaults({
  formatter: error => {
    return {
      param: error.param,
      message: error.msg
    };
  },
});

var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  },
  tls : { rejectUnauthorized: false }
});

// App
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY });
});


app.use(bodyParser.urlencoded({ extended: false }));
app.post(
  '/',
  body("name")
    .not()
    .isEmpty()
    .withMessage('Please enter a name')
    .isLength({ max: 255 })
    .withMessage('Name must be 255 characters or fewer'),
  body("email")
    .not()
    .isEmpty()
    .withMessage('Please enter an email')
    .isEmail()
    .withMessage('Email format is incorrect')
    .isLength({ max: 255 })
    .withMessage('Email must be 30 characters or fewer'),
  body("message")
    .not()
    .isEmpty()
    .withMessage('Please enter a messge')
    .isLength({ max: 1000 })
    .withMessage('Message must be 1000 characters or fewer'),
  (req, res) => {
  const errors = contactValidationResult(req);


  var has_recaptcha_error = true;
  recaptchaResponse(req.body.grecaptcha).then(result => {
    if (result['success'] && result['score'] >= parseFloat(process.env.RECAPTCHA_MIN_SCORE)) {
      has_recaptcha_error = false;

    } 

    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.render(
        "index", 
        {
          title: 'Home', 
          errors: errors.array(), 
          success: false, 
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
          recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY,
          has_recaptcha_error: has_recaptcha_error
        }
      );
    } else {
      var mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_ADDRESS,
        subject: `Contact from ${req.body.name}`,
        text: req.body.message
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
      res.render("index", {title: 'Home', success: true, recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY});
    }
  });


});

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

async function recaptchaResponse(grecaptcha) {
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${grecaptcha}`);
  const jsonData = await response.json();
  return jsonData;
}