async function tokenVerify(token) {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token
    })
  })

  return await res.json()
}

async function validateRecaptcha(req, res, next) {
  if (process.env.NODE_ENV !== 'test') {
    const recaptchaResponse = await tokenVerify(req.body['grecaptcha']);
    if (recaptchaResponse.success !== true || recaptchaResponse.score < process.env.RECPTCHA_MIN_SCORE) {
      console.log(recaptchaResponse);
      return res.render('index', {
        title: 'Home',
        system_error: 'Recaptcha Token Error',
        recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY,
      });
    }
  }
  next();
}

module.exports = validateRecaptcha;