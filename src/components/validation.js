const { check ,validationResult } = require('express-validator');

const contactValidationChain = () => [
  check("name")
  .not()
  .isEmpty()
  .withMessage('Please enter a name')
  .isLength({ max: 255 })
  .withMessage('Name must be 255 characters or fewer'),
  check("email")
  .not()
  .isEmpty()
  .withMessage('Please enter an email')
  .isEmail()
  .withMessage('Email format is incorrect')
  .isLength({ max: 255 })
  .withMessage('Email must be 30 characters or fewer'),
  check("message")
  .not()
  .isEmpty()
  .withMessage('Please enter a messge')
  .isLength({ max: 1000 })
  .withMessage('Message must be 1000 characters or fewer'),
];

const myValidationResult = validationResult.withDefaults({
  formatter: error => error.msg
});

function validateContactForm(req, res, next) {
  const result = myValidationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.mapped() });
  }
  next();
}

module.exports = {contactValidationChain, validateContactForm}