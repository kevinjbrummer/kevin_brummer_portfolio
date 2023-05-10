const { check ,validationResult } = require('express-validator');

const contactValidationChain = () => [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please enter a name')
    .isLength({ max: 255 })
    .withMessage('Name must be 255 characters or fewer'),
  check("email")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please enter an email')
    .isLength({ max: 255 })
    .withMessage('Email must be 255 characters or fewer')
    .isEmail()
    .withMessage('Email format is incorrect'),
  check("message")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please enter a message')
    .isLength({ max: 1000 })
    .withMessage('Message must be 1000 characters or fewer'),
  check('grecaptcha')
    .trim()
    .escape()
    .if((val, { req }) => process.env.NODE_ENV !== 'test' )
    .not()
    .isEmpty()

];

const myValidationResult = validationResult.withDefaults({
  formatter: error => error.msg
});

function validateContactForm(req, res, next) {
  const result = myValidationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).render('index', {
      title: 'Home',
      recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY,
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      errors: result.mapped()
    });
  }
  next();
}

module.exports = { contactValidationChain, validateContactForm }