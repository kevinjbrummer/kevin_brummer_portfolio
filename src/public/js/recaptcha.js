const submitButton = document.getElementById('submitBtn');

    submitButton.addEventListener('click', submitContactForm);

    function submitContactForm(e) {
      e.preventDefault();
      grecaptcha.ready(function() {
        grecaptcha.execute(recaptchaSiteKey, {action: 'submit'}).then(function(token) {
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