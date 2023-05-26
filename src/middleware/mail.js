const mailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;

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

const htmlToTextOptions = {
  wordwrap: 130,
}

const transporter = mailer.createTransport(mailOptions);
transporter.use('compile', htmlToText(htmlToTextOptions));

function getBodyHtml(req) {
  return `<p>
  Hello ${req.body.name}!
</p>
<p>
Thank you for taking the time to send a message to me.
<br>
I'm usually pretty busy, but I'll try to get back to you as soon as I can.
</p>
<p>Below, you can review the contents of your message</p>
<p>
  ----------------------------
  <br>
  Name: ${req.body.name}
  <br>
  Email: ${req.body.email}
  <br>
  Message: 
  <br>
  ${req.body.message}
  <br>
  ----------------------------
</p>
<p>
  Thanks again, and have a wonderful day!
</p>
<p>
  Sincerely,
  Kevin Brummer
</p>
`;
}

function getAdminBodyHtml(req) {
  return `<p>
  You recieved a message from kevinbrummer.com.
</p>
<p>
  ----------------------------
  <br>
  Name: ${req.body.name}
  <br>
  Email: ${req.body.email}
  <br>
  Message: 
  <br>
  ${req.body.message}
  <br>
  ----------------------------
</p>
`;
}

async function sendMail(req, res, next) {
  transporter.sendMail({
    from: `Kevin Brummer <${process.env.EMAIL_ADDRESS}>`,
    to: req.body.email,
    subject: "Contact Request Sent - kevinbrummer.com",
    html: getBodyHtml(req)
  }, function (error, info) {
    if (error) {
      console.log(error);
      return res.render('index', {
        title: 'Home',
        recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY,
        system_error: true
      });
    }
    next();
  });
}

module.exports = sendMail;