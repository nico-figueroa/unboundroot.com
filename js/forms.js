// forms.js — shows inline feedback when FormSubmit returns to the page after a successful submission
export function initContactForms() {
    const forms = document.querySelectorAll('.contact-form');

    forms.forEach((form) => {
        const formStatus = document.getElementById('form-status');

        if (formStatus) {
            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                const contactForm = event.target;
                const submitButton = contactForm.querySelector('input[type="submit"]');
                const originalLabel = submitButton ? submitButton.value : 'Submit';
                
                if (submitButton) {
                    submitButton.value = 'Sending...';
                    submitButton.disabled = true;
                }

                const formData = new FormData(contactForm);
                const payload = Object.fromEntries(formData.entries());
                
                payload._subject = contactForm.querySelector('input[name="_subject"]').value;
                payload._captcha = contactForm.querySelector('input[name="_captcha"]').value;

                try {
                    const response = await fetch('https://formsubmit.co/ajax/nitem18@hotmail.com', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) {
                        throw new Error('Submission failed');
                    }

                    formStatus.textContent = 'Thank you! Your message was sent.';
                    formStatus.className = 'form-status success';
                    contactForm.reset();

                } catch (error) {

                    formStatus.textContent = 'Sorry, your message could not be sent right now. Please contact us directly at nitem18@hotmail.com.';
                    formStatus.className = 'form-status error';

                } finally {

                    if (submitButton) {
                        submitButton.value = originalLabel;
                        submitButton.disabled = false;
                    }
                    
                }
            });
        }
    });

}
