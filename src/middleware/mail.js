const mailer = require('nodemailer');

const mailOptions = {
  service: 'Gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  },
  ...(process.env.NODE_ENV !== 'production' && {
    tls: {
      rejectUnauthorized: false
    }
  })

}

const transporter = mailer.createTransport(mailOptions);

function sendMail(req, res, next) {
  transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: req.body.email,
    subject: "Mail Test",
    text: "Mail Body"
  }, function (error, info) {
    if (error) {
      console.log(error)
    }
    next();
  });
}

module.exports = sendMail;