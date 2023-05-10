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
    if (recaptchaResponse.score < process.env.RECPTCHA_MIN_SCORE) {
      return res.status(400).render('index', {
        errors: { system_error: 'Recaptcha Token Error' }
      });
    }
  }
  next();
}

module.exports = { validateRecaptcha };