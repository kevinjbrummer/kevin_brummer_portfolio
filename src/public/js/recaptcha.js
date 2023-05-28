const submitButton = document.getElementById('submitBtn');

  submitButton.addEventListener('click', submitContactForm);

  function submitContactForm(e) {
    e.preventDefault();
    submitButton.setAttribute('disabled', true);
    grecaptcha.ready(function() {
      grecaptcha.execute("6LcUTHglAAAAAE0_iToC-oXD8Cte2MdkT1mNorDm", {action: 'submit'}).then(function(token) {
          const contactForm = document.getElementById('contact-form');
          const recaptchaElement = document.createElement('input');

          recaptchaElement.setAttribute('type', 'hidden');
          recaptchaElement.setAttribute('value', token);
          recaptchaElement.setAttribute('name', 'grecaptcha');

          contactForm.appendChild(recaptchaElement);

          contactForm.submit();
      });
    });
  }